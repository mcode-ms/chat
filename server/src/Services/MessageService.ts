import {
  IMessageService,
  MessageType,
  NewMessageType,
} from '../Types/Messages';

class MessagesService implements IMessageService {
  private readonly messages: MessageType[];

  constructor() {
    this.messages = [];
  }

  public getAll(): MessageType[] {
    return this.messages;
  }

  public getLatest(): MessageType {
    if (this.messages.length) {
      return this.messages[this.messages.length - 1];
    }
    return null;
  }

  public add(message: NewMessageType): void {
    this.messages.push({
      id: this.messages.length + 1, // simulate id
      createdAt: new Date(),
      ...message,
    });
  }
}

export default MessagesService;
