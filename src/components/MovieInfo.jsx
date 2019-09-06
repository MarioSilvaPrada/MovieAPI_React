import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { selectMovie } from "../actions/index";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00b4db;
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  background: linear-gradient(to right, #0083b0, #00b4db);
  color: white;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

const StyledCard = styled.div`
  width: 70%;
  height: 80%;
  background: #005b96;
  border-radius: 3rem;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const MoviePoster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 0.5rem;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);
  }
  i {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;

  .desc {
    margin-bottom: 0;
    font-weight: bold;
    color: #61f2f5;
    font-size: 1.2rem;
  }

  .movie-overview {
    line-height: 1.5rem;
  }

  .movie-genres {
    display: flex;
    margin-top: 0.5rem;
    div{
      margin-right:1.2rem;
    }
  }
`;

const MovieInfo = ({ match, data, trailer, selectMovie }) => {
  let id = match.params.movieId;

  useEffect(() => {
    selectMovie(id);
  }, []);

  return data ? (
    <StyledContainer>
      <StyledCard>
        <MoviePoster>
          <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} />
          {data.tagline ? <i>"{data.tagline}"</i> : ""}
        </MoviePoster>
        <StyledInfo>
          <Title>
            <h1>{data.title}</h1>
            <p>
              {data.spoken_languages[0].name} / {data.runtime} min / {data.release_date.split("-")[0]}
            </p>
          </Title>
          <p className="desc">Genres</p>
          <div className="movie-genres">
            {data.genres.map((genre, i) => (
              <div key={i}>{genre.name}</div>
            ))}
          </div>
          <p className="desc">The Synopsis</p>
          <p className="movie-overview">{data.overview}</p>
        </StyledInfo>
      </StyledCard>
    </StyledContainer>
  ) : (
    "Loading"
  );
};

const mapStateToProps = ({ movieInfo }) => ({
  data: movieInfo.data,
  trailer: movieInfo.trailer
});

export default connect(
  mapStateToProps,
  { selectMovie }
)(MovieInfo);
