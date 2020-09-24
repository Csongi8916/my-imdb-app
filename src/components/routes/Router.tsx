import React from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import HomePage from '../pages/home';

export default function Router() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </>
  );
}
