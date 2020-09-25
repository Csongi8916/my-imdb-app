import React from 'react';
import { Movie } from '../../../models/entityTypes';
import { MovieResultProps } from '../../../models/propTypes';
import MovieCard from '../movies-card';
import style from './MoveResult.module.css';

export default function MoveResult(props: MovieResultProps) {
  const { movies, genres, selectMovie } = props;

  return (
    <div className={style.MovieResult}>
      {movies.map((movie: Movie) => {
        return <MovieCard key={movie.id} movie={movie} genres={genres} selectMovie={selectMovie} />;
      })}
    </div>
  );
}
