import * as TYPES from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
      case TYPES.SELECT_MOVIE_ID:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };