import { combineReducers } from "redux";

import movieReducers from "./movieReducer";
import fetchReducer from "./fetchReducer";
import getPage from "./getPage";

export default combineReducers({
  movieReducers,
  fetchReducer,
  getPage
});
