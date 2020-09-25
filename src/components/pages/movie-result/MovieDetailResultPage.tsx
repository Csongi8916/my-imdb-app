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

const PARAM = 1;

interface SimilarMovie {
  need: boolean;
  movieId: number;
}

export default function MovieDetailResultPage(props: any) {
  const [movies, setMovies] = useState<Array<any>>([]);
  const [genres, setGenres] = useState<Array<any>>([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [needSimilarMovie, setNeedSimilarMovie] = useState<SimilarMovie>({ need: false, movieId: 0 });

  useEffect(() => {
    //setTimeout -> just gor spinner test
    //setTimeout(() => {
    const searchParam: string = props.location.search ? props.location.search.split('=')[PARAM] : '';
    const fetchData = async () => {
      const genreResult = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=45ce11bdfe5c4088e8e575bb1e423f05&language=en-US`,
      );
      setGenres(genreResult.data.genres);

      if (!needSimilarMovie.need) {
        const moviesResult = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=45ce11bdfe5c4088e8e575bb1e423f05&language=en-US&query=${searchParam}`,
        );
        setMovies(moviesResult.data.results);
      } else {
        const moviesResult = await axios.get(
          `https://api.themoviedb.org/3/movie/337401/similar?api_key=45ce11bdfe5c4088e8e575bb1e423f05&language=en-US`,
        );
        setMovies(moviesResult.data.results);
      }
    };
    fetchData();
    //}, 2000);
  }, [needSimilarMovie]);

  return (
    <>
      {movies && movies.length > 0 ? (
        <div className={style.MovieResult}>
          <MovieDetailTop
            movie={selectedMovie}
            needSimilarMovie={needSimilarMovie}
            toogleSimilarMovie={setNeedSimilarMovie}
          />
          <MoveResult movies={movies} genres={genres} selectMovie={setSelectedMovie} />
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
