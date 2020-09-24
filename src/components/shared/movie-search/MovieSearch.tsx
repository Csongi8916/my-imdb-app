import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MovieTextField from '../ui/text-input';
import style from './MovieSearch.module.css';

export default function MovieSearch() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className={style.MovieDetailsTop}>
      <h1 className={style.Title}>find your movie</h1>
      <div className={style.InputContainer}>
        <MovieTextField value={searchInput} setState={setSearchInput} label='Movie Title' />
      </div>
      <Button variant='contained' color='secondary'>
        Keresés
      </Button>
    </div>
  );
}
