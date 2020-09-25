import { Button, CircularProgress, Switch } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import style from './MovieDetailTop.module.css';

import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import { MovieDetailTopProps } from '../../../models/propTypes';

export default function MovieDetailTop(props: MovieDetailTopProps) {
  const { movie, needSimilarMovie, toogleSimilarMovie } = props;
  const [intro, setIntro] = useState('');

  useEffect(() => {
    setIntro('');
    const fetchData = async () => {
      const result = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${movie.title}`,
      );
      result.data.query ? setIntro(result.data.query.search[0].snippet) : setIntro('No content!');
    };
    fetchData();
  }, [movie]);

  return (
    <div className={style.MovieDetailTop}>
      {movie.title ? (
        <>
          {intro ? (
            <>
              <h2>{movie.title}</h2>
              <div>{ReactHtmlParser(intro)}</div>
              <a
                className={style.WikiBtn}
                target='_blank'
                rel='noopener noreferrer'
                href={`https://en.wikipedia.org/wiki/${movie.title}`}
              >
                <Button variant='contained' color='secondary'>
                  Wiki
                </Button>
              </a>

              <div className={style.SwitchContainer}>
                <span className={style.SwitchText}>Similar movies:</span>
                <Switch
                  checked={needSimilarMovie.need}
                  onChange={() =>
                    toogleSimilarMovie(
                      needSimilarMovie.need ? { need: false, movieId: 0 } : { need: true, movieId: movie.id },
                    )
                  }
                  name='search-state'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </div>
            </>
          ) : (
            <CircularProgress color='secondary' size={25} className={style.Progress} />
          )}
        </>
      ) : (
        <h2>Nincs film kiválasztva</h2>
      )}
    </div>
  );
}
