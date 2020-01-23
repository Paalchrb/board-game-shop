import React from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Overview from './components/Overview';
import SingleGameView from './components/SingleGameView';
import Navbar from './components/Navbar';
import Container from '@material-ui/core/Container';
import { Provider } from 'react-redux';
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <HashRouter>
          <Container maxWidth="lg" className='content-area' style={{ marginTop: '8vh', height: '92vh'}}>
            <Switch>
              <Route path='/' exact component={Overview} />
              <Route path='/details/:id' component={SingleGameView} />
            </Switch>
          </Container>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
