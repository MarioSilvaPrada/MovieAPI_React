import React, { unstable_Profiler as Profiler } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { white } from '../../config/style';

import { TiStar } from 'react-icons/ti';

import * as S from './Movies.styled';

const Movies = ({ movies }) => {
  const callback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    console.log(`%c${id}'s ${phase} phase:`, 'background: black; color: #94fc13; padding: .3rem 1rem');
    console.log(`Actual time: ${actualTime}`);
    console.log(`Base time: ${baseTime}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
}
  return (
    <S.StyledMovies>
      {movies['results']
        // .filter(movie => movie.genre_ids[0] === selectedGenre)
        .map((movie, i) => (
          <Profiler id={movie.title} onRender={callback}>
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
          </Profiler>
        ))}
    </S.StyledMovies>
  );
};

const mapStateToProps = ({ fetchReducer }) => ({
  movies: fetchReducer.movies,
});

export default connect(mapStateToProps, {})(Movies);
