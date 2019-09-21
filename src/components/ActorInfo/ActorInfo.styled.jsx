import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #00b4db;
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  background: linear-gradient(to right, #0083b0, #00b4db);
  color: white;
`;

export const StyledCard = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #005b96;
  opacity: 0.9;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: none;

  @media (min-width: 830px) {
    width: 95rem;
    height: 100%;
    border: 2px solid white;
    border-radius: 3rem;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ActorImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35rem;
  img {
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);
  }
`;

export const ActorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  h1 {
    font-size: 3rem;
  }
  span {
    font-size: 1.2rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 830px) {
    height: 80%;
    width: 46rem;
    padding: 0;
  }
`;
