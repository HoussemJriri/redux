import { v4 as uuidv4 } from "uuid";
import { ADD, DELETE, COMPLETE, EDIT } from "../actions/types";

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return state.concat(action.payload);
    case DELETE:
      return state.filter( el => el.id !== action.payload)
    case COMPLETE:
      return state.map((el) =>
        el.id === action.payload ? { ...el, complete: !el.complete } : el
      );
    case EDIT:
      return state.map(el =>
        el.id === action.payload.id ? action.payload : el
      );

    default:
      return state;
  }
};
export default toDoReducer;
