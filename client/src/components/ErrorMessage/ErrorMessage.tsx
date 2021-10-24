import React from "react";
import { Container } from "./style";

type PropsType = {
  children: JSX.Element | JSX.Element[];
};

function ErrorMessage({ children }: PropsType) {
  return <Container>{children}</Container>;
}

export default ErrorMessage;
