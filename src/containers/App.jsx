import React, { useEffect } from "react";
import { connect } from "react-redux";

// styling
import * as S from "./App.styled";

// action Redux
import {
  getGenres,
  getURL,
  fetchMovies,
  getPage,
  selectDiscover,
  setLoadingMovieInfo
} from "../actions/index";

// Components
import Pagination from "../components/Pagination/Pagination";
import Movies from "../components/Movies/Movies";
import Spinner from "../components/Spinner";
import SideBar from "../components/SideBar/SideBar";

const App = ({
  getGenres,
  fetchMovies,
  selectedGenre,
  getURL,
  getPage,
  discover,
  selectDiscover,
  isLoading,
  setLoadingMovieInfo
}) => {
  useEffect(() => {
    setLoadingMovieInfo(true);
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
    <S.StyledApp>
      <h1>PRADA MOVIES</h1>
      <S.StyledContainer>
        <SideBar />
        <S.StyledMoviesContainer>
          <Movies />
          <Pagination />
        </S.StyledMoviesContainer>
      </S.StyledContainer>
    </S.StyledApp>
  );
};

const mapStateToProps = ({ movieReducers, fetchReducer }) => ({
  selectedGenre: movieReducers.genreSelected,
  discover: fetchReducer.discover,
  isLoading: fetchReducer.loading
});

export default connect(
  mapStateToProps,
  {
    getGenres,
    getURL,
    fetchMovies,
    getPage,
    selectDiscover,
    setLoadingMovieInfo
  }
)(App);
