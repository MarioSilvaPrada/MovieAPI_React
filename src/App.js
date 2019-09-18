import React, { useEffect } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getGenres,
  getURL,
  fetchMovies,
  genreSelected,
  getPage,
  selectDiscover,
  selectMovie,
  setLoadingMovieInfo
} from "./actions/index";

import Spinner from "./components/Spinner";

import { TiStar } from "react-icons/ti";
import { white } from "./config/style";

// Components
import Pagination from "./components/Pagination";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #00b4db;
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  background: linear-gradient(to right, #0083b0, #00b4db);
  color: white;
  min-height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  width: 90rem;
  padding: 3rem;
  background: #003459;
  border-radius: 2rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  margin: 2rem auto 8rem;
`;

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 40rem;
  padding-right: 1rem;
  width: 15rem;

  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #005b99;
    border-radius: 2rem;
  }

  p {
    cursor: pointer;
    padding: 0.4em 0.2em;
    text-align: center;
    padding: 0.5rem 2rem;
    border: 2px solid transparent;
    border-radius: 2rem;
    transition: 0.5s;
  }

  p:hover {
    cursor: pointer;
    color: #00b4db;
    border: 2px solid #00b4db;
    border-radius: 2rem;
  }

  .isSelected {
    color: #00b4db;
    border: 2px solid #00b4db;
    border-radius: 2rem;
    transition: 0.5s;
  }
`;

const MovieCard = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 14rem;
  img {
    width: 12rem;
    border-radius: 5px;
  }
  .movie-genre {
    color: ${white(0.4)};
    font-weight: 600;
  }
  p {
    margin: 0;
    text-align: center;
  }
`;

const StyleRating = styled.span`
  width: 2rem;
  position: absolute;
  background: #f7b71d;
  color: black;
  font-size: .8rem;
  padding: 0.3rem 0.4rem;
  border-radius: 0.2rem;
  font-weight: bold;
  top: -0.7rem;
  left: 9rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledMoviesContainer = styled.div`
  background: #005b96;
  margin-left: 2rem;
  border-radius: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const StyledMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const App = ({
  getGenres,
  genres,
  movies,
  fetchMovies,
  genreSelected,
  selectedGenre,
  getURL,
  getPage,
  discover,
  selectDiscover,
  isLoading,
  setLoadingMovieInfo
}) => {
  useEffect(() => {
    setLoadingMovieInfo(true)
    getGenres();
    getPage();
    selectDiscover("popular");
    getURL();
    fetchMovies();
  }, []);
  // Everytime User select a different discover
  useEffect(() => {
    getPage(1);
    getURL();
    fetchMovies();
  }, [discover, selectedGenre]);

  return isLoading ? (
    <Spinner />
  ) : (
    <StyledApp>
      <h1>PRADA MOVIES</h1>
      <StyledContainer>
        <StyledSideBar>
          {console.log(selectedGenre)}
          <div>
            <h3>Discover</h3>
            <p
              className={discover === "popular" ? "isSelected" : ""}
              onClick={() => selectDiscover("popular")}
            >
              Popular
            </p>
            <p
              className={discover === "top_rated" ? "isSelected" : ""}
              onClick={() => selectDiscover("top_rated")}
            >
              Top Rated
            </p>
            <p
              className={discover === "now_playing" ? "isSelected" : ""}
              onClick={() => selectDiscover("now_playing")}
            >
              Now Playing
            </p>
          </div>
          <h3>Genres</h3>
          <p className = {selectedGenre === '' ? 'isSelected' : ''} onClick={() => genreSelected("")}>All genres</p>
          {genres.map((genre, i) => (
            <p className = {selectedGenre === genre.id ? 'isSelected' : ''} key={i} onClick={() => genreSelected(genre.id)}>
              {genre.name}
            </p>
          ))}
        </StyledSideBar>
        <StyledMoviesContainer>
          <StyledMovies>
            {movies["results"]
              // .filter(movie => movie.genre_ids[0] === selectedGenre)
              .map((movie, i) => (
                <MovieCard key={i}>
                  <Link
                    to={`/${movie.id}`}
                    style={{ textDecoration: "none", color: white }}
                  >
                    {movie.poster_path ?
                      <img
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    /> :
                    <img 
                      src={'https://image.flaticon.com/icons/svg/863/863170.svg'}
                    />
                    }
                    
                  </Link>

                  <p>{movie.title}</p>
                  <StyleRating>
                    <TiStar />
                    {movie.vote_average.toFixed(1)}
                  </StyleRating>
                </MovieCard>
              ))}
          </StyledMovies>
          <Pagination />
        </StyledMoviesContainer>
      </StyledContainer>
    </StyledApp>
  );
};

const mapStateToProps = ({ movieReducers, fetchReducer, getPage }) => ({
  genres: movieReducers.genres,
  selectedGenre: movieReducers.genreSelected,
  movies: fetchReducer.movies,
  url: fetchReducer.url,
  discover: fetchReducer.discover,
  page: getPage.page,
  isLoading: fetchReducer.loading
});

export default connect(
  mapStateToProps,
  {
    getGenres,
    getURL,
    fetchMovies,
    genreSelected,
    getPage,
    selectDiscover,
    selectMovie,
    setLoadingMovieInfo
  }
)(App);
