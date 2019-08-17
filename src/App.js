import React, { useEffect } from "react";

import styled from "styled-components";

import { connect } from "react-redux";
import { getGenres, getURL, fetchMovies, genreSelected } from "./actions/index";

// Components
import Pagination from "./components/Pagination";


const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  display: flex;
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
  width: 200px;
  margin: 2em;

  img {
    width: 200px;
    border-radius: 5px;
  }
`;

const App = ({
  getGenres,
  genres,
  movies,
  fetchMovies,
  genreSelected,
  getURL,
  selectedGenre,
  match,
  url,
  page
}) => {
  useEffect(() => {
    getGenres();
    getURL();
    fetchMovies();
  }, [page]);

  return movies ? (
    <StyledApp>
      <h1>Movie API</h1>
      <StyledContainer>
        <StyledSideBar>
          <div>
            <h3>Discover</h3>
            <p onClick={() => fetchMovies()}>Popular</p>
            <p onClick={() => fetchMovies()}>Top Rated</p>
            <p onClick={() => fetchMovies()}>Upcoming</p>
          </div>
          <h3>Genres</h3>
          <p>All genres</p>
          {genres.map((genre, i) => (
            <p key={i} onClick={() => genreSelected(genre.id)}>
              {genre.name}
            </p>
          ))}
        </StyledSideBar>
        <div>
          <StyledMovies>
            {movies["results"]
              // .filter(movie => movie.genre_ids[0] === selectedGenre)
              .map((movie, i) => (
                <MovieCard key={i}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  />
                  <p>{movie.title}</p>
                  <span>{movie.vote_average.toFixed(1)}</span>
                  <p>{movie.genre_ids[0]}</p>
                </MovieCard>
              ))}
          </StyledMovies>
          <Pagination pageSelected={match.params.page} />
        </div>
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
  { getGenres, getURL, fetchMovies, genreSelected }
)(App);
