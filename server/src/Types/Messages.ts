export type NewMessageType = {
  author: string;
  content: string;
};

export type MessageType = NewMessageType & {
  id: number;
  createdAt: Date;
};

export interface IMessageService {
  getAll(): MessageType[];
  getLatest: () => MessageType;
  add(message: NewMessageType): void;
}
