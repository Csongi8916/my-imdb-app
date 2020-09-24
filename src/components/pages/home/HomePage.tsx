import React from 'react';
import MovieDetailTop from '../../shared/movie-detail-top/MovieDetailTop';
import MovieResult from '../movie-result/MovieResult';
import style from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={style.Root}>
      <MovieDetailTop />
      <MovieResult />
    </div>
    );
}
