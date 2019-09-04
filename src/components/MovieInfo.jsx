import React from 'react';
import styled from "styled-components";

const MovieInfo = ({match}) => {
    let movieId = match.params.movieId;
    console.log(movieId);
    return(
        <p>Movie Info</p>
    )
}

export default MovieInfo;