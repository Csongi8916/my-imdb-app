import { Button } from '@material-ui/core';
import React from 'react';
import MovieTextField from '../ui/text-input';
import style from './MovieDetailTop.module.css';

export default function MovieDetailTop() {
  return (
    <div className={style.MovieDetailsTop}>
      <h1 className={style.Title}>find your movie</h1>
      <div className={style.InputContainer}>
        <MovieTextField label='Title' placeholder='Write a title of movie...' />
      </div>
      <Button variant='contained' color='secondary'>
        Keresés
      </Button>
    </div>
  );
}
