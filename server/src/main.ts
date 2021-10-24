import express from 'express';
import cors from 'cors';
import * as http from 'http';
import config from './config';
import MessagesService from './Services/MessageService';
import SocketService from './Services/SocketService';
import { NewMessageType } from "./Types/Messages";

const app: express.Application = express();
app.use(cors());
app.use(express.json());

const applicationPort: string | number = process.env.port || config.port;

const httpServer: http.Server = http.createServer(app);
const messagesService = new MessagesService();
const socketService = new SocketService(httpServer);

const onMessageEventHandler = (message: NewMessageType) => {
  messagesService.add(message);
  socketService.emitEvent("message", messagesService.getLatest());
};

// websocket init and generate
socketService.initConnection();
socketService.addEvent("message", onMessageEventHandler);

// get all messages
app.get('/messages', (_req, res) => {
  return res.send(messagesService.getAll());
});

// default run app
httpServer.listen(applicationPort, () => {
  console.log(`Running server on port ${applicationPort}`);
});
