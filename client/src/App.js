import React from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Overview from './components/Overview';
import SingleGameView from './components/SingleGameView';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <div className='contentArea'>
          <Switch>
            <Route path='/' exact component={Overview} />
            <Route path='/details/:id' component={SingleGameView} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
