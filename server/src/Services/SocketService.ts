import { ArgsEventCallback, DataEmitType, ISocket } from "../Types/Socket";
import * as http from 'http';
import { Server, Socket } from 'socket.io';
import config from '../config';

class SocketService implements ISocket {
  private socket: Socket;
  private io: Server;
  private readonly events: {
    [index: string]: (args: ArgsEventCallback) => void;
  };

  constructor(httpServer: http.Server) {
    this.io = new Server(httpServer, {
      cors: config.cors,
    });
    this.events = {};
  }

  public initConnection(): void {
    this.io.on('connect', (socket: Socket) => {
      this.socket = socket;

      console.log(`[Client] Connected`);

      socket.on('disconnect', () => {
        console.log('[Client] Disconnected');
      });

      socket.on('error', (err) => {
        console.log(`[Client][Error] ${err.message || err}`);
      });

      Object.keys(this.events).forEach((eventName) => {
        this.socket.on(eventName, this.events[eventName]);
      });
    });
  }

  public emitEvent(event: string, emitData: DataEmitType): void {
    this.io.emit(event, emitData);
  }

  public addEvent(event: string, callback: (args: DataEmitType) => void): void {
    if (Object.keys(this.events).includes(event) === false) {
      this.events[event] = callback;
    } else {
      console.log(`The Event: ${event} already defined`);
    }
  }
}

export default SocketService;
