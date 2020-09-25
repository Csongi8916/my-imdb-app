import { ApolloProvider, createHttpLink } from '@apollo/client';
import React from 'react';
import './App.css';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import Router from '../routes/Router';

const link = createHttpLink({
  uri: 'https://api.themoviedb.org/3/graphql',
  //uri: 'https://tmdb.apps.quintero.io/',
  credentials: 'same-origin',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <Router />
      </div>
    </ApolloProvider>
  );
}

export default App;
