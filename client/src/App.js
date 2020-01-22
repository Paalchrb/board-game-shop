import React from 'react';
import './App.css';
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Overview} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
