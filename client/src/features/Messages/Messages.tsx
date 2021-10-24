import React, { useRef, useEffect } from "react";
import { Container, Title } from "./styles";
import useActions from "./useActions";
import Message from "../../components/Message";
import { MessageType } from "../../types/Message";
import ErrorMessage from "../../components/ErrorMessage";

function Messages() {
  const { data, error, status } = useActions();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  if (status === "pending") {
    return <>Loading...</>;
  }

  if (status === "rejected") {
    return (
      <ErrorMessage>
        <h4>Ups. Error</h4>
        <p>{error?.message || error}</p>
      </ErrorMessage>
    );
  }

  if (status === "resolved") {
    if (data?.length) {
      return (
        <Container>
          {data.map((item: MessageType) => (
            <Message key={item.id} {...item} />
          ))}
          <div ref={messagesEndRef} />
        </Container>
      );
    } else {
      return (
        <Container>
          <Title>Uh. No messages here.</Title>
          <p>Add some message!</p>
        </Container>
      );
    }
  }

  return <></>;
}

export default Messages;
