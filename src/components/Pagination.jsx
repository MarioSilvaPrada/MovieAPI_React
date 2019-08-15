import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledPages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  cursor: pointer;
  width: 100%;
`;

const Pagination = () => {
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(
      <Link to={`/${i}`}>
        <span>{i}</span>
      </Link>
    );
  }
  return (
    <StyledPages>
      {pageNumbers}
    </StyledPages>
  );
};

export default Pagination;


