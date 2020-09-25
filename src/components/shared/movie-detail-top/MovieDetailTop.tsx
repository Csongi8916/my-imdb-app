import { Button } from '@material-ui/core';
import React from 'react';
import MovieTextField from '../ui/text-input';
import style from './MovieDetailTop.module.css';

export default function MovieDetailTop(props: any) {
  const { movie } = props;

  return <div className={style.MovieDetailTop}>{movie && <p>{movie.title}</p>};</div>;
}
