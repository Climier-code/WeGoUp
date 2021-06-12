import React from 'react';
import logo from './logo.svg';
import './App.css';
import KrEconomyLoader from './containers/KrBusiness';
import USStockLoader from './components/Stocks/USStockLoader';
import UsBusiness from './containers/UsBusiness';
import Main from './containers/Main';
import Header from './components/Header';
import KrBusiness from './containers/KrBusiness';

function App() {
  return (
    <div>
      <Header />
      {/* <Main /> */}
      <KrBusiness />
      {/* <UsBusiness /> */}
    </div>
  );
}

export default App;
