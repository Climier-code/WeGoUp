import React from 'react';
import logo from './logo.svg';
import './App.css';
import KrEconomyLoader from './containers/KrEconomyLoader';
import USStockLoader from './components/Stocks/USStockLoader';
import UsBusiness from './containers/UsBusiness';
import Main from './containers/Main';

function App() {
  return (
    <div>
      <Main />
      <UsBusiness />
    </div>
  );
}

export default App;
