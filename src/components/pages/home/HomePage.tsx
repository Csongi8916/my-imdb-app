import React from 'react';
import MovieDetailSearch from '../../shared/movie-search/MovieDetailSearch';
import MovieResult from '../movie-result/MovieResult';
import style from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={style.Root}>
      <MovieDetailSearch />
      <MovieResult />
    </div>
  );
}
