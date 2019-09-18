import * as TYPES from "../actions/types";

export default (state = { loading: true }, action) => {
    switch (action.type) {
      case TYPES.IS_LOADING_ACTOR_INFO:
        return { ...state, loading: action.payload };
      case TYPES.SELECT_ACTOR_ID:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };