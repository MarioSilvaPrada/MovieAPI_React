import React, { useEffect } from "react";
import * as S from "./Pagination.styled";
import { connect } from "react-redux";

import { getPage, getURL, fetchMovies } from "../../actions/index";

const Pagination = ({ page, getPage, getURL, fetchMovies }) => {
  useEffect(() => {
    getURL();
    fetchMovies();
  }, [page]);
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(
      <S.StyledNumber
        key={i}
        color={i === page ? "#003459" : ""}
        onClick={() => {
          getPage(i);
        }}
      >
        {i}
      </S.StyledNumber>
    );
  }
  return <S.StyledPages>{pageNumbers}</S.StyledPages>;
};

const mapStateToProps = ({ getPage }) => ({
  page: getPage.page
});

export default connect(
  mapStateToProps,
  { getPage, getURL, fetchMovies }
)(Pagination);
