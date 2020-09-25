import React from 'react';
import MovieCard from '../movies-card';
import style from './MoveResult.module.css';

export default function MoveResult(props: any) {
  const { movies, genres } = props;

  return (
    <div className={style.MovieResult}>
      {movies.map((movie: any) => {
        return <MovieCard key={movie.id} movie={movie} genres={genres} />;
      })}
    </div>
  );
}
