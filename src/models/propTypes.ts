import { Genre, Movie } from './entityTypes';
import { SimilarMovie } from './stateTypes';

export interface MovieDetailTopProps {
  movie: Movie;
  needSimilarMovie: SimilarMovie;
  toogleSimilarMovie: React.Dispatch<React.SetStateAction<SimilarMovie>>;
}

export interface MovieProps {
  genres: Array<Genre>;
  selectMovie: React.Dispatch<React.SetStateAction<Movie>>;
}

export interface MovieResultProps extends MovieProps {
  movies: Array<Movie>;
}

export interface MovieCardProps extends MovieProps {
  movie: Movie;
}
