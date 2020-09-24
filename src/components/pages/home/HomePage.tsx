import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Router from '../../routes/Router';
import MovieDetailSearch from '../../shared/movie-search/MovieSearch';
import MovieTextField from '../../shared/ui/text-input';
import MovieResult from '../movie-result/MovieResultPage';
import style from './HomePage.module.css';

export default function HomePage() {
  const [searchInput, setSearchInput] = useState('');

  const search = () => {
    const movieTitle = searchInput.trim().toLowerCase();
    //const fechData = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=45ce11bdfe5c4088e8e575bb1e423f05');
  };

  return (
    <div className={style.Root}>
      <div className={style.HomePage}>
        <h1 className={style.Title}>find your movie</h1>
        <div className={style.InputContainer}>
          <MovieTextField value={searchInput} setState={setSearchInput} label='Movie Title' />
        </div>
        <Link className={style.Link} to={{ pathname: '/movies', search: `?sort=${searchInput}` }}>
          <Button variant='contained' color='secondary'>
            Keresés
          </Button>
        </Link>
      </div>
    </div>
  );
}
