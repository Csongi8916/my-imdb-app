import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import MovieResult from '../pages/movie-result/MovieResultPage';
import MovieCard from '../shared/movies-card';

export default function Router() {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/movies' component={MovieResult} />
    </Switch>
  );
}
