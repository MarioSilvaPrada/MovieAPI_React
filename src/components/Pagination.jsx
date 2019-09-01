import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { connect } from "react-redux";

import { getPage, getURL, fetchMovies } from "../actions/index";

const StyledPages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  cursor: pointer;
  width: 100%;
`;

const Pagination = ({ pageSelected, getPage, getURL, fetchMovies }) => {
  useEffect(() => {
    getURL();
    fetchMovies();
  }, [pageSelected]);
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(
      <Link
        key={i}
        to={`/${i}`}
        onClick={() => {
          getPage(i);
        }}
      >
        <span>{i}</span>
      </Link>
    );
  }

  return <StyledPages>{pageNumbers}</StyledPages>;
};

const mapStateToProps = ({ getPage }) => ({
  page: getPage.page
});

export default connect(
  mapStateToProps,
  { getPage, getURL, fetchMovies }
)(Pagination);
