import { ActionsType } from "../../types/Action";
import { GlobalApiTemplateType } from "../../types/Api";
import { MessageType } from "../../types/Message";
import {
  ADD_MESSAGE,
  FETCH_MESSAGES_DONE,
  FETCH_MESSAGES_ERROR,
  FETCH_MESSAGES_INIT,
} from "./actions";

function MessagesReducer(
  state: GlobalApiTemplateType<MessageType[]>,
  action: ActionsType
): GlobalApiTemplateType<MessageType[]> {
  switch (action.type) {
    case FETCH_MESSAGES_INIT: {
      return {
        status: "pending",
        data: [],
        error: null,
      };
    }
    case FETCH_MESSAGES_DONE: {
      return {
        ...state,
        data: [...action.value],
        status: "resolved",
      };
    }
    case FETCH_MESSAGES_ERROR: {
      return {
        ...state,
        data: [],
        error: action.value,
        status: "rejected",
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        data: [...(state.data || []), action.value],
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default MessagesReducer;
