import { Content, Container, Author } from "./styles";
import { MessageType } from "../../types/Message";

function Message({ content, createdAt, author }: MessageType) {
  return (
    <Container>
      <Content>{content}</Content>
      <Author>
        {author}
        <b>{new Date(createdAt).toLocaleDateString()}</b>
      </Author>
    </Container>
  );
}

export default Message;
