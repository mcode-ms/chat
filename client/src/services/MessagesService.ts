import config from "../config";

interface IMessage {
  getAll: () => Promise<Response>;
}

const MessagesService: IMessage = {
  getAll: () =>
    fetch(`${config.api}/messages`).then((response: Response) =>
      response.json()
    ),
};

export default MessagesService;
