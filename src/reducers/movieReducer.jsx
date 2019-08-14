import * as TYPES from "../actions/types";

const INITIAL_STATE = {
  genres: [],
  genreSelected: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_GENRES:
      return { ...state, genres: action.payload };
    case TYPES.GET_DISCOVER:
      return { ...state, movies: action.payload };
    case TYPES.GENRE_SELECTED:
      return { ...state, genreSelected: action.payload };
    default:
      return state;
  }
};
