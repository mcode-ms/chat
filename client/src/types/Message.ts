export type MessageForm = {
    author: string;
    content: string;
};

export type MessageType = MessageForm & {
    id: number;
    createdAt: Date;
};
