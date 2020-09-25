import React, { useState } from 'react';
import style from './MovieCard.module.css';

export default function MovieCard(props: any) {
  const { movie, genres, selectMovie } = props;

  const getGenres = () => {
    if (genres && genres.length > 0) {
      return genres.filter((genre) => {
        return movie.genre_ids.includes(genre.id);
      });
    }
    return [];
  };

  const handleClickMovieTitle = () => {
    selectMovie(movie);
  };

  return (
    <div className={style.MovieCard}>
      <h3 className={style.Title} onClick={handleClickMovieTitle}>
        {movie.title}
      </h3>
      <div className={style.DataContainer}>
        <span className={style.SubTitle}>Score: {movie.vote_average}</span>
        <span className={style.SubTitle}>Genres:</span>
        {getGenres().map((genre) => {
          return <span key={genre.id}>{genre.name}</span>;
        })}
      </div>
    </div>
  );
}
