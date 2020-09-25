import React, { useEffect, useState } from 'react';
import style from './MovieDetailResultPage.module.css';

import { gql, useQuery } from '@apollo/client';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import MovieDetailTop from '../../shared/movie-detail-top';
import MoveResult from '../../shared/movie-result';

//grapql query
/*const param = '';
const getMoviesQuery = gql`
  query GetMovies {
    search(term: ${param}) {
      edges {
        node {
          __typename
          ... on MovieResult {
            title
          }
        }
      }
    }
  }
`;*/

export default function MovieDetailResultPage(props: any) {
  const [movies, setMovies] = useState<Array<any>>();
  const [genres, setGenres] = useState<Array<any>>();
  const [selectedMovie, setSelectedMovie] = useState<Array<any>>();

  const searchParam: string = props.location.search ? props.location.search.split('=')[1] : '';

  useEffect(() => {
    //just for spinner testing
    setTimeout(function () {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=45ce11bdfe5c4088e8e575bb1e423f05&language=en-US&query=${searchParam}`,
        )
        .then((result) => {
          setMovies(result.data.results);
        })
        .then(() => {
          axios
            .get(
              `https://api.themoviedb.org/3/genre/movie/list?api_key=45ce11bdfe5c4088e8e575bb1e423f05&language=en-US`,
            )
            .then((result) => {
              debugger;
              setGenres(result.data.genres);
            });
        });
    }, 2000);
  }, []);

  return (
    <>
      {movies ? (
        <div className={style.MovieResult}>
          <MovieDetailTop movie={selectedMovie} />
          <MoveResult movies={movies} genres={genres} />
        </div>
      ) : (
        <div className={style.ProgressContainer}>
          <div>
            <CircularProgress color='secondary' size={100} className={style.Progress} />
          </div>
        </div>
      )}
    </>
  );
}
