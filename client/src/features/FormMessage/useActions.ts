import { FormEvent, useState } from "react";
import socketService from "../../services/SocketService";

const useActions = () => {
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");

  const handleSubmit = (event: FormEvent<EventTarget>): void => {
    event.preventDefault();

    // basic validation
    if (author && content) {
      socketService.send({
        content,
        author,
      });

      setContent("");
      setErrorText("");
    } else if (!content) {
      setErrorText("Please enter your comment");
    } else if (!author) {
      setErrorText("Please enter your name");
    }
  };

  return {
    setAuthor,
    setContent,
    author,
    errorText,
    content,
    handleSubmit,
  };
};

export default useActions;
