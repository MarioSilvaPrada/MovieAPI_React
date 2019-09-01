import React, { useEffect } from "react";

import styled from "styled-components";

import { connect } from "react-redux";
import {
  getGenres,
  getURL,
  fetchMovies,
  genreSelected,
  getPage
} from "./actions/index";

import { TiStar } from "react-icons/ti";

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
`;

const StyledContainer = styled.div`
  display: flex;
  max-width: 75rem;
  padding: 3rem;
  background: #003459;
  border-radius: 2rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`;

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;

  p {
    cursor: pointer;
  }
`;

const StyledMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieCard = styled.div`
  width: 12rem;
  margin: 2em;
  position: relative;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

const StyleRating = styled.span`
  position: absolute;
  background: #f7b71d;
  color: black;
  font-size: .6rem;
  padding: .3rem .4rem;
  border-radius: .2rem;
  font-weight: bold;
  top: -.5rem;
  left: 9rem;
  border: 1px solid black;
  display:flex;
  align-items: center;
`

const StyledMoviesContainer = styled.div`
  background: #005B96;
  margin-left: 2rem;
  border-radius: 2rem;
`

const App = ({
  getGenres,
  genres,
  movies,
  fetchMovies,
  genreSelected,
  getURL,
  getPage,
  match,
  url,
  page
}) => {
  useEffect(() => {
    getGenres();
    getPage();
    getURL();
    fetchMovies();
  }, []);

  useEffect(() => {
    getPage();
    fetchMovies();
  }, [url]);

  return movies ? (
    <StyledApp>
      {console.log(url)}
      <h1>Movie API</h1>
      <StyledContainer>
        <StyledSideBar>
          <div>
            <h3>Discover</h3>
            <p onClick={() => getURL("popular")}>Popular</p>
            <p onClick={() => getURL("top_rated")}>Top Rated</p>
            <p onClick={() => getURL("theaters")}>Upcoming</p>
          </div>
          <h3>Genres</h3>
          <p>All genres</p>
          {genres.map((genre, i) => (
            <p key={i} onClick={() => genreSelected(genre.id)}>
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
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  />
                  <p>{movie.title}</p>
                  <StyleRating><TiStar />{movie.vote_average.toFixed(1)}</StyleRating>
                  <p>{movie.genre_ids[0]}</p>
                </MovieCard>
              ))}
          </StyledMovies>
          <Pagination pageSelected={match.params.page} />
        </StyledMoviesContainer>
      </StyledContainer>
    </StyledApp>
  ) : (
    "Loading"
  );
};

const mapStateToProps = ({ movieReducers, fetchReducer, getPage }) => ({
  genres: movieReducers.genres,
  selectedGenre: movieReducers.genreSelected,
  movies: fetchReducer.movies,
  url: fetchReducer.url,
  page: getPage.page
});

export default connect(
  mapStateToProps,
  { getGenres, getURL, fetchMovies, genreSelected, getPage }
)(App);
