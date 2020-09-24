import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieTextField from '../ui/text-input';
import style from './MovieDetailSearch.module.css';

export default function MovieDetailSearch() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const query = 'search(term: "star"){edges{node{__typename...on MovieResult{title}}}}}';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=45ce11bdfe5c4088e8e575bb1e423f05');
      /*const result = await axios.get(
        `https://api.themoviedb.org/3/graphql?api_key=45ce11bdfe5c4088e8e575bb1e423f05&query={${query}}`,
      );*/
      setMovies(result.data);
    };
    fetchData();
  }, []);

  const search = () => {
    //const movieTitle = searchInput.trim().toLowerCase();
    //const fechData = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=45ce11bdfe5c4088e8e575bb1e423f05');
  };

  return (
    <div className={style.MovieDetailsTop}>
      <h1 className={style.Title}>find your movie</h1>
      <div className={style.InputContainer}>
        <MovieTextField
          value={searchInput}
          setState={setSearchInput}
          label='Title'
          placeholder='Write a title of movie...'
        />
      </div>
      <Button onClick={search} variant='contained' color='secondary'>
        Keresés
      </Button>
    </div>
  );
}
