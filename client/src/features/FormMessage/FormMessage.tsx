import React, { ChangeEvent } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import useActions from "./useActions";
import { InputStyles, InputWrapper, SubmitStyles } from "./styles";

function FormMessage() {
  const { author, content, errorText, handleSubmit, setAuthor, setContent } =
    useActions();
  const authorInputHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setAuthor(event.target.value);
  const commentInputHandler = (event: ChangeEvent<HTMLInputElement>): void =>
    setContent(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <InputStyles
          placeholder={"What do you want to say?"}
          type="text"
          value={content}
          onChange={commentInputHandler}
        />
        <InputStyles
          type="text"
          placeholder={"Your name?"}
          value={author}
          onChange={authorInputHandler}
        />
        <SubmitStyles type="submit" value="Submit" />
      </InputWrapper>

      {errorText && (
        <ErrorMessage>
          <span>{errorText}</span>
        </ErrorMessage>
      )}
    </form>
  );
}

export default FormMessage;
