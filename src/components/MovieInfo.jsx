import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { selectMovie, isLoading } from "../actions/index";
import Button from "../config/Button";
import Spinner from "../components/Spinner";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  background-size: cover;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

const StyledCard = styled.div`
  width: 80rem;
  height: 60rem;
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

const MoviePoster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 30rem;
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
  width: 35rem;

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
    div {
      margin-right: 1.2rem;
    }
  }
`;

const StyledButtons = styled.div`
  display: flex;
`;

const StyledCredits = styled.div`
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #003459;
    border-radius: 2rem;
    border: 0.2rem solid white;
  }

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const MovieInfo = ({ history, match, data, trailer, selectMovie, credits, LoadingStatus, isLoading }) => {
  let id = match.params.movieId;

  useEffect(() => {
    isLoading(true)
    selectMovie(id);
  }, [id]);

  return LoadingStatus ? (
    <Spinner />
  ) : (
    <StyledContainer image={data.backdrop_path}>
      <StyledCard>
        <MoviePoster>
          <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} />
          {data.tagline ? <i>"{data.tagline}"</i> : ""}
        </MoviePoster>
        <StyledInfo>
          <Title>
            <h1>{data.title}</h1>
            <p>
              {data.spoken_languages[0].name} / {data.runtime} min /{" "}
              {data.release_date.split("-")[0]}
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
          <StyledButtons>
            <Button href={data.homepage} title="Home Page" />
            <Button
              href={"https://www.imdb.com/title/" + data.imdb_id}
              title="IMDB"
            />
            <Button
              href={"https://www.youtube.com/watch?v=" + trailer.key}
              title="Trailer"
            />
          </StyledButtons>
          <StyledCredits>
            {credits.cast.map(actor =>
              actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                />
              ) : (
                <img src="https://image.flaticon.com/icons/svg/145/145867.svg" />
              )
            )}
          </StyledCredits>
        </StyledInfo>
      </StyledCard>
    </StyledContainer>
  );
};

const mapStateToProps = ({ movieInfo, fetchReducer }) => ({
  data: movieInfo.data,
  trailer: movieInfo.trailer,
  credits: movieInfo.credits,
  LoadingStatus: fetchReducer.loading
});

export default connect(
  mapStateToProps,
  { selectMovie, isLoading }
)(MovieInfo);
