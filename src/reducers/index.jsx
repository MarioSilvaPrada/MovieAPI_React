import { combineReducers } from "redux";

import movieReducers from "./movieReducer";
import fetchReducer from "./fetchReducer";

export default combineReducers({
  movieReducers,
  fetchReducer,
});
