import React from 'react';
import useFetch from 'use-http';
import { Container } from 'react-bootstrap';
import { Route } from "wouter";
import './App.css';
import { TableView } from './views/TableView';
import { ExchangeView } from './views/ExchangeView';

function App() {
  const { loading, error, data = [] } = useFetch('https://api.coingecko.com/api/v3/exchanges', {}, [])
  return (
    <Container className="App">
      <Route path="/">
        {
          !(loading && error) && <TableView exchanges={data} />
        }
      </Route>
      <Route path="/exchange/:name">
        <ExchangeView />
      </Route>
    </Container>
  );
}

export default App;
