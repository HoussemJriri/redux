import { CLEAR, SAVE } from "../actions/types";

const saveReducer = (state = null, action) => {
  switch (action.type) {
    case SAVE:
      return action.payload;
    case CLEAR:
      return null;
    default:
      return state;
  }
};
export default saveReducer;
