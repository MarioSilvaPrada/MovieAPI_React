import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getActorInfo } from "../../actions/index";
import Spinner from "../../components/Spinner";
import Button from "../../config/Button";

import * as S from "./ActorInfo.styled";

const ActorInfo = ({ match, getActorInfo, data, isLoading }) => {
  const personId = match.params.personId;

  useEffect(() => {
    getActorInfo(personId);
  }, []);
  return isLoading ? (
    <Spinner />
  ) : (
    <S.StyledContainer>
      <S.StyledCard>
        <S.ActorImage>
          {data.profile_path ? (
            <img
              alt="image-actor"
              src={`https://image.tmdb.org/t/p/w780${data.profile_path}`}
            />
          ) : (
            <img
              alt="image-actor"
              src="https://image.flaticon.com/icons/svg/145/145867.svg"
            />
          )}
        </S.ActorImage>
        <S.ActorInfo>
          <h1>{data.name}</h1>
          <span>{data.birthday}</span>
          <p>{data.biography}</p>
          <Button
            href={`https://www.imdb.com/name/${data.imdb_id}`}
            title="IMDB"
          />
        </S.ActorInfo>
      </S.StyledCard>
    </S.StyledContainer>
  );
};

const mapStateToProps = ({ actorInfoReducer }) => ({
  data: actorInfoReducer.data,
  isLoading: actorInfoReducer.loading
});

export default connect(
  mapStateToProps,
  { getActorInfo }
)(ActorInfo);
