import React from 'react';
import useFetch from 'use-http';
import './App.css';
import { TableView } from './views/TableView';

function App() {
  const { loading, error, data = [] } = useFetch('https://api.coingecko.com/api/v3/exchanges', {}, [])
  return (
    <div className="App">
      {
        !(loading && error) && <TableView exchanges={data} />
      }
    </div>
  );
}

export default App;
