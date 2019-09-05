import { combineReducers } from "redux";

import movieReducers from "./movieReducer";
import fetchReducer from "./fetchReducer";
import getPage from "./getPage";
import movieInfo from "./movieInfo";

export default combineReducers({
  movieReducers,
  fetchReducer,
  getPage,
  movieInfo
});
