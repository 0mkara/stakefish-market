import React from 'react';
import useFetch from 'use-http';
import './App.css';
import { TableView } from './views/TableView';
import { IExchange } from './types';

function App() {
  const { loading, error, data = [] } = useFetch('https://api.coingecko.com/api/v3/exchanges', {}, [])
  return (
    <div className="App">
      <header className="App-header">
        List of exchanges
      </header>
      <body>
        <h1>{loading}</h1>
        {
          !(loading && error) && <TableView exchanges={data} />
        }
        <pre>{JSON.stringify(error)}</pre>
      </body>
    </div>
  );
}

export default App;
