import { Button, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import style from './MovieDetailTop.module.css';

import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';

export default function MovieDetailTop(props: any) {
  const { movie } = props;
  const [intro, setIntro] = useState('');

  useEffect(() => {
    debugger;
    setIntro('');
    const fetchData = async () => {
      const result = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${movie.title}`,
      );
      setIntro(result.data.query.search[0].snippet);
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
              <a className={style.WikiBtn} target='_blank' href={`https://en.wikipedia.org/wiki/${movie.title}`}>
                <Button variant='contained' color='secondary'>
                  Wiki
                </Button>
              </a>
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
