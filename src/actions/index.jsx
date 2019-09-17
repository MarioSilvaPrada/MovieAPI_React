import * as TYPES from "./types";
// import tmdb from "../api/tmdb";
import axios from "axios";

import { API_URL, API_KEY } from "../api/moviesFetch";

// Get genres from API
export const getGenres = () => async dispatch => {
  const res = await axios.get(`${API_URL}genre/movie/list?api_key=${API_KEY}`);
  dispatch({
    type: TYPES.GET_GENRES,
    payload: res.data.genres
  });
};

export const getURL = () => async (dispatch, getState) => {
  let url;
  let page = getState().getPage.page;
  let discoverType = getState().fetchReducer.discover;
  let genreSelected = getState().movieReducers.genreSelected;
  switch (discoverType) {
    case "popular":
      url = `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include?&page=${page}&with_genres=${genreSelected}`;

      break;
    case "top_rated":
      url = `${API_URL}movie/top_rated?api_key=${API_KEY}&page=${page}&with_genres=${genreSelected}`;

      break;
    case "now_playing":
      url = `${API_URL}movie/now_playing?api_key=${API_KEY}&page=${page}&with_genres=${genreSelected}`;

      break;
    default:
      url = `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include?&page=1&with_genres=${genreSelected}`;
  }
  dispatch({
    type: TYPES.GET_URL,
    payload: { url }
  });
};

export const fetchMovies = () => async (dispatch, getState) => {
  let url = getState().fetchReducer.url;
  let res = await axios.get(url);

  dispatch({
    type: TYPES.FETCH_MOVIES,
    payload: res.data
  });

  dispatch({
    type: TYPES.IS_LOADING,
    payload: false
  });
};

export const genreSelected = genreId => async dispatch => {
  dispatch({
    type: TYPES.GENRE_SELECTED,
    payload: genreId
  });
};

export const getPage = (page = 1) => async dispatch => {
  dispatch({
    type: TYPES.GET_PAGE,
    payload: page
  });
};

export const selectDiscover = discover => async dispatch => {
  dispatch({
    type: TYPES.SELECT_DISCOVER,
    payload: discover
  });
};

export const selectMovie = movieId => async dispatch => {

  let id = movieId;
  let data = await axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}`);
  let trailer = await axios.get(
    `${API_URL}movie/${id}/videos?api_key=${API_KEY}`
  );

  let credits = await axios.get(
    `${API_URL}movie/${id}/credits?api_key=${API_KEY}`
  );

  await dispatch({
    type: TYPES.SELECT_MOVIE_ID,
    payload: {
      id,
      data: data.data,
      trailer: trailer.data.results[0],
      credits: credits.data
    }
  });

  dispatch({
    type: TYPES.IS_LOADING_MOVIE_INFO,
    payload: false
  });
};

export const isLoading = bool => async dispatch => {
   dispatch({
    type: TYPES.IS_LOADING,
    payload: bool
  });
} 

export const setLoadingMovieInfo = bool => async dispatch => {
  dispatch({
    type: TYPES.IS_LOADING_MOVIE_INFO,
    payload: bool
  });
}
