import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { selectMovie } from "../actions/index";

const MovieInfo = ({ match, data, trailer, selectMovie }) => {
  let id = match.params.movieId;

  useEffect(() => {
    selectMovie(id);
  }, []);

  return data ? (
    <div>
      <h3>{data.overview}</h3>
      <p>{data.tagline}</p>
    </div>
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
