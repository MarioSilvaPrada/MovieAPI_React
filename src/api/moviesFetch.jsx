export const API_URL = "https://api.themoviedb.org/3/";
export const API_KEY = process.env.REACT_APP_APIKEY;

export const queries = {
  popular: `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include?&page=`,
  top_rated: `${API_URL}movie/top_rated?api_key=${API_KEY}&page=`,
  theaters: `${API_URL}movie/now_playing?api_key=${API_KEY}&page=`
};

export const moviesData = {
  popular_movies: [],
  top_movies: [],
  theaters_movies: []
};

export function getData(arr, query) {
  for (let i = 1; i < 11; i++) {
    moviesData[arr].push(query + i);
  }
}
