import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #00b4db;
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  background: linear-gradient(to right, #0083b0, #00b4db);
  color: white;
  height: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  background: #003459;
  border-radius: 2rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  margin: 2rem auto 8rem;

  @media(min-width: 1200px) {
    width: 90rem;
    padding: 3rem;
  }

`;

export const StyledMoviesContainer = styled.div`
  background: #005b96;
  margin-left: 2rem;
  border-radius: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;