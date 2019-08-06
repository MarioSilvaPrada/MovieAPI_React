import * as TYPES from "../actions/types";

const INITIAL_STATE = {
  genres: [],
  movies: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_GENRES:
      return { ...state, genres: action.payload };
      case TYPES.GET_DISCOVER :
        return {...state, movies: action.payload}
    default:
      return state;
  }
};
