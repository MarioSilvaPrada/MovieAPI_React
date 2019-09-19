import React, { useState } from "react";
import { connect } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import { HamburgerMenu } from "react-hamburger-menu";

import * as S from "./SideBar.styled";

import { genreSelected, selectDiscover } from "../../actions";

var styles = {
  bmBurgerButton: {
    display: "none"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    marginRight: "1rem"
  },
  bmCross: {
    background: "#fafafa"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: 0,
    left: 0
  },
  bmMenu: {
    background: "#263238",
    overflowY: "scroll",
    padding: "2.5em 1.5em"
  },
  bmItemList: {
    color: "#fafafa",
    padding: "0.8rem"
  },
  bmItem: {
    outline: "none"
  },
  bmOverlay: {
    top: 0,
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const SideBar = ({
  genres,
  selectDiscover,
  discover,
  selectedGenre,
  genreSelected
}) => {
  const [isOpened, setisOpened] = useState(false);

  const isMenuOpen = ({ isOpened }) => {
    setisOpened(isOpened);
  };

  return (
    <S.StyledSideBar>
      <S.HeaderNavBar>
        <S.Hamburguer onClick = {() => setisOpened(true)}>
          <S.Bar />
          <S.Bar />
          <S.Bar />
        </S.Hamburguer>
      </S.HeaderNavBar>
      <Menu isOpen={isOpened} onStateChange={isMenuOpen} styles={styles}>
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
      </Menu>
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
