import * as TYPES from "../actions/types";


export default (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.IS_LOADING:
      return { ...state, loading: action.payload };
    case TYPES.GET_URL:
      return { ...state, ...action.payload };
    case TYPES.FETCH_MOVIES:
      return { ...state, movies: action.payload };
    case TYPES.SELECT_DISCOVER:
      return { ...state, discover: action.payload };
    default:
      return state;
  }
};
