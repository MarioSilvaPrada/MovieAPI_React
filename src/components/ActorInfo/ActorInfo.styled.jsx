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
  padding: 3rem 0 5rem;
`;

export const StyledCard = styled.div`
  width: 95rem;
  min-height: 60rem;
  background: #005b96;
  opacity: 0.9;
  border-radius: 3rem;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  filter: none;
  border: 2px solid white;
`;

export const ActorImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40rem;
  img {
    width: auto;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);
  }
`;

export const ActorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 46rem;
  height: 80%;

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
`;
