import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieTextField from '../../shared/ui/text-input';
import style from './HomePage.module.css';

export default function HomePage() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className={style.Root}>
      <div className={style.HomePage}>
        <h1 className={style.Title}>find your movie</h1>
        <div className={style.InputContainer}>
          <MovieTextField value={searchInput} setState={setSearchInput} label='Movie Title' />
        </div>
        <Link className={style.Link} to={{ pathname: '/movies', search: `?title=${searchInput}` }}>
          <Button variant='contained' color='secondary'>
            Keresés
          </Button>
        </Link>
      </div>
    </div>
  );
}
