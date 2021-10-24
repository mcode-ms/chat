import io, { Socket } from "socket.io-client";
import config from "../config";
import { MessageForm } from "../types/Message";

class SocketService {
  private socket: Socket = {} as Socket;

  public init(): Promise<null> {
    return new Promise((resolve, reject) => {
      this.socket = io(config.ws!);

      this.socket.on("connect", () => {
        console.log("[Client] Socket connected"); // true
        resolve(null);
      });

      this.socket.on("connect_error", (error) => {
        console.error("[Client] Socket connection error");
        reject(error);
      });
    });
  }

  public send(message: MessageForm): void {
    this.socket.emit("message", message);
  }

  public subscribe(event: string, callback: (args:any) => void) {
    this.socket.on(event, callback);
  }

  public unsubscribe(event:string) {
    this.socket.off(event);
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}

const socketService = new SocketService();

export default socketService;
