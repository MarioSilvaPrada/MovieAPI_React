import styled from "styled-components";
import { white } from "../../config/style";

export const StyledMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const MovieCard = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 14rem;
  img {
    width: 12rem;
    border-radius: 5px;
  }
  .movie-genre {
    color: ${white(0.4)};
    font-weight: 600;
  }
  p {
    margin: 0;
    text-align: center;
  }
`;

export const StyleRating = styled.span`
  width: 2rem;
  position: absolute;
  background: #f7b71d;
  color: black;
  font-size: 0.8rem;
  padding: 0.3rem 0.4rem;
  border-radius: 0.2rem;
  font-weight: bold;
  top: -0.7rem;
  left: 9rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
