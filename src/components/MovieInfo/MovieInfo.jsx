import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectMovie, setLoadingActorInfo } from "../../actions/index";
import Button from "../../config/Button";
import Spinner from "../../components/Spinner";
import * as S from "./MovieInfo.styled";

const MovieInfo = ({
  match,
  data,
  trailer,
  selectMovie,
  credits,
  LoadingStatus,
  setLoadingActorInfo
}) => {
  let id = match.params.movieId;

  useEffect(() => {
    setLoadingActorInfo(true);
    selectMovie(id);
  }, [id]);

  return LoadingStatus ? (
    <Spinner />
  ) : (
    <S.StyledContainer image={data.backdrop_path}>
      <S.StyledCard>
        <S.MoviePoster>
          <img src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} />
          {data.tagline ? <i>"{data.tagline}"</i> : ""}
        </S.MoviePoster>
        <S.StyledInfo>
          <S.Title>
            <h1>{data.title}</h1>
            <p>
              {data.spoken_languages[0] && data.spoken_languages[0].name + "/"}{" "}
              {data.runtime && data.runtime + "min / "}
              {data.release_date && data.release_date.split("-")[0]}
            </p>
          </S.Title>
          <p className="desc">Genres</p>
          <div className="movie-genres">
            {data.genres.map((genre, i) => (
              <div key={i}>{genre.name}</div>
            ))}
          </div>
          <p className="desc">The Synopsis</p>
          <p className="movie-overview">{data.overview}</p>

          <S.StyledCredits>
            {credits.cast.map(actor => (
              <Link
                to={`/person/${actor.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <S.StyledActor>
                  {actor.profile_path ? (
                    <img
                      alt="actor"
                      src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    />
                  ) : (
                    <img
                      alt="actor"
                      src="https://image.flaticon.com/icons/svg/145/145867.svg"
                    />
                  )}
                  <p>{actor.name}</p>
                </S.StyledActor>
              </Link>
            ))}
          </S.StyledCredits>
          <S.StyledButtons>
            {data.homepage && <Button href={data.homepage} title="Home Page" />}
            {data.imdb_id && (
              <Button
                href={"https://www.imdb.com/title/" + data.imdb_id}
                title="IMDB"
              />
            )}
            {trailer && (
              <Button
                href={"https://www.youtube.com/watch?v=" + trailer.key}
                title="Trailer"
              />
            )}
          </S.StyledButtons>
        </S.StyledInfo>
      </S.StyledCard>
    </S.StyledContainer>
  );
};

const mapStateToProps = ({ movieInfo }) => ({
  data: movieInfo.data,
  trailer: movieInfo.trailer,
  credits: movieInfo.credits,
  LoadingStatus: movieInfo.loading
});

export default connect(
  mapStateToProps,
  { selectMovie, setLoadingActorInfo }
)(MovieInfo);
