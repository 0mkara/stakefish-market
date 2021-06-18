import React from 'react';
import useFetch from 'use-http';
import { Container } from 'react-bootstrap';
import './App.css';
import { TableView } from './views/TableView';

function App() {
  const { loading, error, data = [] } = useFetch('https://api.coingecko.com/api/v3/exchanges', {}, [])
  return (
    <Container className="App">
      {
        !(loading && error) && <TableView exchanges={data} />
      }
    </Container>
  );
}

export default App;
