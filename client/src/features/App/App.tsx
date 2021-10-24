import React from "react";
import Messages from "../Messages";
import { Layout, Header, Main, Container } from "./styles";
import FormMessage from "../FormMessage";
import ErrorMessage from "../../components/ErrorMessage";
import useActions from "./useActions";

function App() {
  const { wsConnectionStatus } = useActions();

  const getContent = () => {
    switch (wsConnectionStatus) {
      case "rejected": {
        return (
          <ErrorMessage>
            <span>Ups. Cannot connect to server</span>
          </ErrorMessage>
        );
      }
      case "resolved": {
        return (
          <>
            <Messages />
            <FormMessage />
          </>
        );
      }
      default:
        return <span>Loading..</span>;
    }
  };

  return (
    <Layout>
      <Container>
        <Header>Chat</Header>
        <Main>{getContent()}</Main>
      </Container>
    </Layout>
  );
}

export default App;
