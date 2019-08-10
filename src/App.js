import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";

import { connect } from "react-redux";
import { getGenres, getMovies, getConfig } from "./actions/index";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
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

function App({ getGenres, genres, getMovies, movies }) {
  useEffect(() => {
    getGenres();
    getMovies("popular");
    getConfig();
  }, []);

  return (
    <div className="App">
      <h1>Movie API</h1>
      <StyledContainer>
        <StyledSideBar>
          <div>
            <h3>Discover</h3>
            <p onClick={() => getMovies("popular")}>Popular</p>
            <p onClick={() => getMovies("top_rated")}>Top Rated</p>
            <p onClick={() => getMovies("now_playing")}>Upcoming</p>
          </div>
          <h3>Genres</h3>
          {genres.map((genre, i) => (
            <p key={i}>{genre.name}</p>
          ))}
        </StyledSideBar>

        <div>
          <StyledMovies>
            {movies.map((movie, i) => (
              <MovieCard key={i}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                />

                <p>{movie.title}</p>
              </MovieCard>
            ))}
          </StyledMovies>
        </div>
      </StyledContainer>
    </div>
  );
}
const mapStateToProps = state => ({
  genres: state.get.genres,
  movies: state.get.movies
});

export default connect(
  mapStateToProps,
  { getGenres, getMovies, getConfig }
)(App);
