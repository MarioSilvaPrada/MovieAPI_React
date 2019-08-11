import * as TYPES from "./types";
// import tmdb from "../api/tmdb";
import axios from "axios";

import { API_URL, API_KEY, getData, moviesData } from "../api/moviesFetch";

// export const API_URL = "https://api.themoviedb.org/3/";
// export const API_KEY = process.env.REACT_APP_APIKEY;

// Get genres from API
export const getGenres = () => async dispatch => {
  const res = await axios.get(`${API_URL}genre/movie/list?api_key=${API_KEY}`);
  // const res = await tmdb.get('/genre/movie/list')
  dispatch({
    type: TYPES.GET_GENRES,
    payload: res.data.genres
  });
};

export const getMovies = (arr, query) => async dispatch => {
  const res = getData(arr, query);

  dispatch({
    type: TYPES.GET_MOVIES,
    payload: res
  });

};
