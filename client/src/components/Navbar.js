import React, { Component } from 'react';
import Sortlist from './Sortlist';
import Shopcart from './Shopcart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleShopcart } from '../actions/shopcart';



class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: false,
    }
  }

  static propTypes = {
    toggleShopcart: PropTypes.func.isRequired,
    showCart: PropTypes.bool.isRequired,
  }
 

  toggleFilter = (open) =>  {
    this.setState({left: open})
  }

  handleShopcartClick = () => {
    const { toggleShopcart } = this.props;
    toggleShopcart(); 
  }

  render() {
    const { left } = this.state; 
    const {shopcart: { showCart, cartItems} } = this.props;
    const sidelist = side => {
      return (
      <div
        className="list"
        role="presentation"
        onClick={this.toggleFilter.bind(this, side, false)}
        onKeyDown={this.toggleFilter.bind(this, side, false)}
      >
        <Sortlist />
      </div>
      );
    }
    return (
      <div className='navbar-container'>
        <AppBar className='navbar-main'>
          <Toolbar>
            <IconButton edge="start" className='navbar-menu-btn' color="inherit" aria-label="menu">
              <MenuIcon onClick={this.toggleFilter.bind(this, true)}/>
              <Drawer anchor="left" open={left} onClose={this.toggleFilter.bind(this, false)}>
                {sidelist('left')}
              </Drawer>  
            </IconButton>
            <Typography variant="h6" className='navbar-title'>
              BoardGames
            </Typography>
            <Button color="inherit"
              onClick={this.handleShopcartClick.bind(this)}
            >
              <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon/>
              </Badge>
              Handlekurv
            </Button>
            <Drawer anchor="right" open={showCart} className='shopcart-container'>
              <Typography variant="h2" className='navbar-title'>
                <Shopcart />  
              </Typography>
          </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shopcart: state.shopcart
});

const mapDispatchToProps = {
  toggleShopcart
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);