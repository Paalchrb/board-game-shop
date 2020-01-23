import React from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Overview from './components/Overview';
import Details from './components/Details';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <div className='content-area'>
          <Switch>
            <Route path='/' exact component={Overview} />
            <Route path='/details/:id' component={Details} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
