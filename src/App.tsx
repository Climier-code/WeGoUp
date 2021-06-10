import React from 'react';
import logo from './logo.svg';
import './App.css';
import KrEconomyLoader from './containers/KrEconomyLoader';
import USStockLoader from './components/Stocks/USStockLoader';

function App() {
  return (
    <div>
      <KrEconomyLoader />
      <USStockLoader />
    </div>
  );
}

export default App;
