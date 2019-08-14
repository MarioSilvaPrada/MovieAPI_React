import * as TYPES from "./types";
// import tmdb from "../api/tmdb";
import axios from "axios";

import { API_URL, API_KEY, getData, moviesData } from "../api/moviesFetch";



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
  getData(arr, query);

  const res = moviesData;
  dispatch({
    type: TYPES.GET_MOVIES,
    payload: res
  });
};

export const fetchMovies = (arr, query) => async dispatch => {

  getData(arr, query);

  const data = [];

  await Promise.all(
    moviesData[arr].map(async url => {
      data.push(await axios.get(url));
    })
  );

  dispatch({
    type: TYPES.FETCH_MOVIES,
    payload: data
  });
};

export const genreSelected = (genreId) => async (dispatch, getState) => {
  console.log(getState())
  dispatch({
    type: TYPES.GENRE_SELECTED,
    payload: genreId
  })
}
