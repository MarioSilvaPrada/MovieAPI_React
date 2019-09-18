import { combineReducers } from "redux";

import movieReducers from "./movieReducer";
import fetchReducer from "./fetchReducer";
import getPage from "./getPage";
import movieInfo from "./movieInfo";
import actorInfoReducer from "./actorInfoReducer";

export default combineReducers({
  movieReducers,
  fetchReducer,
  getPage,
  movieInfo,
  actorInfoReducer
});
