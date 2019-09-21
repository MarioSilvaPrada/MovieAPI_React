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
  min-height: 100vh;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  background: #003459;
  margin-top: 8rem;
  @media (min-width: 900px) {
    width: 90rem;
    padding: 3rem;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
    margin: 2rem auto 8rem;
    border-radius: 2rem;
  }
`;

export const StyledMoviesContainer = styled.div`
  background: #005b96;
  margin-left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;

  @media (min-width: 900px) {
    margin-left: 2rem;
    height: auto;
    border-radius: 2rem;
    
  }
`;
