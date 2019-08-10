import * as TYPES from "./types";
import tmdb from "../api/tmdb";
import axios from "axios";

let API_URL = "https://api.themoviedb.org/3/";
let API_KEY = "api_key=aeb5dba1f1913a3c858099a94105e7c3";

export const getConfig = () => async dispatch => {
  const res = await tmdb.get('/configuration');
  console.log(res)
  dispatch({
    type: TYPES.GET_CONFIG,
    payload: res.data
  });
};

// Get genres from API
export const getGenres = () => async dispatch => {
  const res = await tmdb.get('/genre/movie/list');
  dispatch({
    type: TYPES.GET_GENRES,
    payload: res.data.genres
  });
};

export const getMovies = (type) => async dispatch => {
  const res = await axios.get(`${API_URL}movie/${type}?${API_KEY}&page=1`);
  dispatch({
    type: TYPES.GET_DISCOVER,
    payload: res.data.results
  });
};
