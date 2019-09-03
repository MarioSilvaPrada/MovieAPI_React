import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { connect } from "react-redux";

import { getPage, getURL, fetchMovies } from "../actions/index";

const StyledNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  color: ${props => props.color};
  border: ${props => (props.color ? "2px solid #003459" : "")};
  padding: ${props => (props.color ? ".5rem" : "")};
  font-weight: ${props => (props.color ? "bold" : "")};
  border-radius: ${props => (props.color ? "200%" : "")};
`;

const StyledPages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3rem;
  max-width: 40rem;
  margin: 3rem auto;
`;

const Pagination = ({ page, getPage, getURL, fetchMovies }) => {
  useEffect(() => {
    getURL();
    fetchMovies();
  }, [page]);
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(
      <StyledNumber
        key={i}
        color={i === page ? "#003459" : ""}
        onClick={() => {
          getPage(i);
        }}
      >
        {i}
      </StyledNumber>
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
