import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { white } from '../../config/style';

import { TiStar } from 'react-icons/ti';

import * as S from './Movies.styled';

const Movies = ({ movies }) => {
  return (
    <S.StyledMovies>
      {movies['results']
        // .filter(movie => movie.genre_ids[0] === selectedGenre)
        .map((movie, i) => (
          <S.MovieCard key={i}>
            <Link to={`/${movie.id}`} style={{ textDecoration: 'none', color: white }}>
              {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
              ) : (
                <img src={'https://image.flaticon.com/icons/svg/863/863170.svg'} />
              )}
            </Link>

            <p>{movie.title}</p>
            <S.StyleRating>
              <TiStar />
              {movie.vote_average.toFixed(1)}
            </S.StyleRating>
          </S.MovieCard>
        ))}
    </S.StyledMovies>
  );
};

const mapStateToProps = ({ fetchReducer }) => ({
  movies: fetchReducer.movies,
});

export default connect(mapStateToProps, {})(Movies);
