import * as TYPES from "./types";
import tmdb from "../api/tmdb";

// Get genres from API
export const getGenres = () => async dispatch => {
  const res = await tmdb.get("/genre/movie/list");
  dispatch({
    type: TYPES.GET_GENRES,
    payload: res.data
  });
};
