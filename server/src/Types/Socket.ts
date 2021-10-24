import * as http from 'http';
import { MessageType } from './Messages';

export type DataEmitType = MessageType;
export type ArgsEventCallback = MessageType;

export interface ISocket {
  initConnection(
    httpServer: http.Server,
    port: string | number,
  ): void;
  emitEvent(event: string, emitData: DataEmitType);
  addEvent(event: string, callback: (args: DataEmitType) => void): void;
}
