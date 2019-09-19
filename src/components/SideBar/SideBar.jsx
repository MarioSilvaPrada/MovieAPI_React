import React from "react";
import { connect } from "react-redux";

import * as S from "./SideBar.styled";

import { genreSelected, selectDiscover } from "../../actions";

const SideBar = ({ genres, selectDiscover, discover, selectedGenre, genreSelected }) => {
  return (
    <S.StyledSideBar>
      <S.StyledDiscover>
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
      </S.StyledDiscover>
      <h3>Genres</h3>
      <S.StyledGenres>
          <p
            className={selectedGenre === "" ? "isSelected" : ""}
            onClick={() => genreSelected("")}
          >
            All genres
          </p>
          {genres.map((genre, i) => (
            <p
              className={selectedGenre === genre.id ? "isSelected" : ""}
              key={i}
              onClick={() => genreSelected(genre.id)}
            >
              {genre.name}
            </p>
          ))}
      </S.StyledGenres>
    </S.StyledSideBar>
  );
};

const mapStateToProps = ({ movieReducers, fetchReducer }) => ({
  genres: movieReducers.genres,
  selectedGenre: movieReducers.genreSelected,
  discover: fetchReducer.discover
});

export default connect(
  mapStateToProps,
  {
    selectDiscover,
    genreSelected
  }
)(SideBar);
