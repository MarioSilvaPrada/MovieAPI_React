import * as TYPES from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case TYPES.GET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
