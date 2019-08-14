import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";

import { connect } from "react-redux";
import { getGenres, getMovies, fetchMovies, genreSelected } from "./actions/index";

import { queries } from "./api/moviesFetch";

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

const StyledPages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  cursor: pointer;
`;

const MovieCard = styled.div`
  width: 200px;
  margin: 2em;

  img {
    width: 200px;
    border-radius: 5px;
  }
`;

function App({ getGenres, genres, movies, fetchMovies, genreSelected, selectedGenre }) {
  useEffect(() => {
    getGenres();
    fetchMovies("popular_movies", queries.popular);
  }, []);

  return movies[0] ? (
    <div className="App">
      <h1>Movie API</h1>
      <StyledContainer>
        <StyledSideBar>
          <div>
            <h3>Discover</h3>
            <p onClick={() => fetchMovies("popular_movies", queries.popular)}>
              Popular
            </p>
            <p onClick={() => fetchMovies("top_movies", queries.top_rated)}>Top Rated</p>
            <p onClick={() => fetchMovies("theaters_movies", queries.theaters)}>Upcoming</p>
          </div>
          <h3>Genres</h3>
          <p>All genres</p>
          {genres.map((genre, i) => (
            <p key={i} onClick={() => genreSelected(genre.id)}>{genre.name}</p>
          ))}
        </StyledSideBar>
        <div>
          <StyledMovies>
            {/* {console.log(movies.map(movie => movie))} */}
            {movies[0]["data"]["results"]
              .filter(movie => movie.genre_ids[0] === selectedGenre)
              .map((movie, i) => (
              <MovieCard key={i}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                />
                <p>{movie.title}</p>
                <span>{movie.vote_average}</span>
                <p>{movie.genre_ids[0]}</p>
              </MovieCard>
            ))}
            <StyledPages>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </StyledPages>
          </StyledMovies>
        </div>
      </StyledContainer>
    </div>
  ) : (
    "Loading"
  );
}
const mapStateToProps = ({ movieReducers, fetchReducer }) => ({
  genres: movieReducers.genres,
  selectedGenre: movieReducers.genreSelected,
  movies: fetchReducer
});

export default connect(
  mapStateToProps,
  { getGenres, getMovies, fetchMovies, genreSelected }
)(App);
