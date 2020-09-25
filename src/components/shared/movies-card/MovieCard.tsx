import React from 'react';
import style from './MovieCard.module.css';

export default function MovieCard(props: any) {
  const { movie, genres } = props;

  const getGenres = () => {
    if (genres && genres.length > 0) {
      genres.map((genre) => {
        return movie.genre_ids.includes(genre.id);
      });
    }

    return [];
  };

  return (
    <div className={style.MovieCard}>
      {/*<img src={image} width='300' height='410' />*/}
      <h3 className={style.Title}>{movie.title}</h3>
      <div className={style.DataContainer}>
        <span>Genres:</span>
        {getGenres().map((genre) => {
          return <span>{genre.name}</span>;
        })}
        <span>Score: {movie.vote_average}</span>
      </div>
    </div>
  );
}
