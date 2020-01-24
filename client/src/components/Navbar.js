import React, { Component } from 'react';
import Sortlist from './Sortlist'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Drawer from '@material-ui/core/Drawer';


class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: false,
    }
  }

  toggleDrawer = (open) =>  {
    this.setState({left: open})
  }

  render() {
    const { left } = this.state;
    const sidelist = side => {
      return (
      <div
        className="list"
        role="presentation"
        onClick={this.toggleDrawer.bind(this, side, false)}
        onKeyDown={this.toggleDrawer.bind(this, side, false)}
      >
        <Sortlist />
      </div>
      )
    }
    return (
      <div className='navbar-container'>
        <AppBar className='navbar-main'>
          <Toolbar>
            <IconButton edge="start" className='navbar-menu-btn' color="inherit" aria-label="menu">
              <MenuIcon onClick={this.toggleDrawer.bind(this, true)}/>
              <Drawer anchor="left" open={left} onClose={this.toggleDrawer.bind(this, false)}>
                {sidelist('left')}
              </Drawer>  
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