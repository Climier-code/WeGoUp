import React from 'react';
import './App.css';
import UsBusiness from './containers/UsBusiness';
import Main from './containers/Main';
import Header from './containers/Header';
import KrBusiness from './containers/KrBusiness';
import About from './containers/About';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" component={Main} exact/>
      <Route path="/about" component={About} />
      <Route path="/krbusiness" component={KrBusiness} />
      <Route path="/usbusiness" component={UsBusiness} />
      {/* <Route path="/bitcoin" component={Bitcoin} /> */}
    </div>
  );
}

export default App;
