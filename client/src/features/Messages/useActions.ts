import { useEffect, useReducer } from "react";
import MessagesService from "../../services/MessagesService";
import { GlobalApiTemplateType } from "../../types/Api";
import { MessageType } from "../../types/Message";
import MessagesReducer from "./reducer";
import {
  ADD_MESSAGE,
  FETCH_MESSAGES_DONE,
  FETCH_MESSAGES_ERROR,
  FETCH_MESSAGES_INIT,
} from "./actions";
import socketService from "../../services/SocketService";

const defaultState: GlobalApiTemplateType<MessageType[]> = {
  data: [],
  status: "idle",
};

const useActions = () => {
  const [actionState, setActionsState] = useReducer(
    MessagesReducer,
    defaultState
  );

  const fetchMessages = () => {
    setActionsState({
      type: FETCH_MESSAGES_INIT,
    });

    MessagesService.getAll()
      .then((data) => {
        setActionsState({
          type: FETCH_MESSAGES_DONE,
          value: data,
        });
      })
      .catch((e) => {
        setActionsState({
          type: FETCH_MESSAGES_ERROR,
          value: e,
        });
      });
  };

  const addMessageHandler = (data: MessageType) => {
    setActionsState({
      type: ADD_MESSAGE,
      value: data,
    });
  };

  const componentDidMountHandler = () => {
    fetchMessages();
    socketService.subscribe("message", addMessageHandler);

    return () => {
      socketService.unsubscribe("message");
    };
  };

  useEffect(componentDidMountHandler, []);

  return {
    ...actionState,
  };
};

export default useActions;
