import React, { useEffect, useState } from 'react';
import './MovieResultPage.module.css';

import { gql, useQuery } from '@apollo/client';
import axios from 'axios';

const test = 'war';

const getMoviesQuery = gql`
  query GetMovies {
    search(term: ${test}) {
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
`;

export default function MovieResultPage() {
  const [movies, setMovies] = useState<any>([]);
  //const { loading, error, data } = useQuery(getMoviesQuery);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=45ce11bdfe5c4088e8e575bb1e423f05');
      setMovies(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className='MovieResult'>
      {movies ? (
        <>
          <p>{movies.title}</p>
          {/*movies.map((m: any) => {
            return <p>{m.Title}</p>;
          })*/}
        </>
      ) : (
        <>
          <p>óóóóóóóóó</p>
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      )}
    </div>
  );
}
