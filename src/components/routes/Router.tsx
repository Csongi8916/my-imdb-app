import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import MovieDetailResultPage from '../pages/movie-result/MovieDetailResultPage';

export default function Router() {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/movies' component={MovieDetailResultPage} />
    </Switch>
  );
}
