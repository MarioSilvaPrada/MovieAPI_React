import * as TYPES from "../actions/types";

export const MOVIES_DATA = {
  
};

export default (state = MOVIES_DATA, action) => {
  switch (action.type) {
    case TYPES.GET_MOVIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
