import React from 'react';
import './App.css';
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Overview from './components/Overview';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();  
  return (
    <div className="App">
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BoardGames
          </Typography>
          <Button color="inherit"><ShoppingCartIcon/> Handlekurv</Button>
        </Toolbar>
      </AppBar>
    </div>
      <HashRouter>
      
        <Switch>
          <Route path='/' exact component={Overview} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
