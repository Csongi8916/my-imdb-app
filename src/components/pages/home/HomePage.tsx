import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MovieTextField from '../../shared/ui/text-input';
import style from './HomePage.module.css';

const ENTER_KEY = 'Enter';

export default function HomePage() {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === ENTER_KEY) {
      history.push(`/movies?title=${searchInput}`);
    }
  };

  return (
    <div className={style.Root} onKeyPress={(e) => handleKeyPress(e)}>
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
