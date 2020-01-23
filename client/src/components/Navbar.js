import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <AppBar className='navbar-main'>
          <Toolbar>
            <IconButton edge="start" className='navbar-menu-btn' color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className='navbar-title'>
              BoardGames
            </Typography>
            <Button color="inherit">
              <ShoppingCartIcon/> 
              Handlekurv
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;