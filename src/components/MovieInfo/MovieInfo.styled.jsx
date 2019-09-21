import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${props => `url(https://image.tmdb.org/t/p/w1280${props.image})`};
  background-size: cover;

  @media (min-width: 980px) {
    height: 100vh;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

export const StyledCard = styled.div`
  width: 100%;
  hieght: 100%;
  background: #005b96;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  filter: none;

  @media (min-width: 740px) {
    height: 90%;
    width: auto;
    margin: 3rem 4rem;
    border: 2px solid white;
    border-radius: 3rem;
    padding: 3rem;
  }

  @media (min-width: 980px) {
    flex-direction: row;
    width: 95rem;
    height: 60rem;
  }
`;

export const MoviePoster = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  img {
    width: auto;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);
    margin-top: 2rem;
  }
  i {
    margin-top: 1rem;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 980px) {
    height: 85%;

    img {
      margin-top: 0;
    }
    i {
      margin-bottom: 0;
    }
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 80%;

  h1 {
    margin-top: 0;
    font-size: 2.5rem;
  }
  .desc {
    margin-bottom: 0;
    font-weight: bold;
    color: #61f2f5;
    font-size: 1.8rem;
  }

  .movie-overview {
    line-height: 1.5rem;
  }

  .movie-genres {
    display: flex;
    margin-top: 0.5rem;
    font-weight: bold;
    font-size: 1.2rem;
    div {
      margin-right: 1.2rem;
    }
  }
  @media (min-width: 740px) {
    width: 46rem;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  @media (min-width: 740px) {
    width: 46rem;
    margin-bottom: 0;
  }

  @media (min-width: 980px) {
    justify-content: flex-start;
  }
`;

export const StyledCredits = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  height: 30rem;

  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 2rem;
  }
`;

export const StyledActor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.8rem;
  width: 7rem;
  cursor: pointer;

  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 100%;
  }
  p {
    text-align: center;
    margin: 0.3rem 0 0;
    width: 100%;
  }
`;
