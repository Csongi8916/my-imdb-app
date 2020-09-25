import React from 'react';
import style from './MovieCard.module.css';

export default function MovieCard(props: any) {
  const { movie, genres } = props;

  const getGenres = () => {
    if (genres && genres.length > 0) {
      return genres.filter((genre) => {
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
        <span className={style.SubTitle}>Score: {movie.vote_average}</span>
        <span className={style.SubTitle}>Genres:</span>
        {getGenres().map((genre) => {
          return <span>{genre.name}</span>;
        })}
      </div>
    </div>
  );
}
