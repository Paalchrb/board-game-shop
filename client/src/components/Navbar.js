import React, { Component } from 'react';
import Sortlist from './Sortlist';
import Shopcart from './Shopcart';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ShoppingCart, Search }from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setLoader, stopLoader } from '../actions/loading';
import { toggleShopcart } from '../actions/shopcart';
import { toggleSearchField, updateSearchWord } from '../actions/search';
import { getGamesByName } from '../actions/games';



class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: false,
    }
  }

  static propTypes = {
    toggleShopcart: PropTypes.func.isRequired,
    toggleSearchField: PropTypes.func.isRequired,
    updateSearchWord: PropTypes.func.isRequired,
    getGamesByName: PropTypes.func.isRequired,
    showCart: PropTypes.bool.isRequired,
    search: PropTypes.object.isRequired,
    setLoader: PropTypes.func.isRequired,
    stopLoader: PropTypes.func.isRequired,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEnterPress.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEnterPress.bind(this));
  }
 

  toggleFilter = (open) =>  {
    this.setState({left: open})
  }

  handleShopcartClick = () => {
    const { toggleShopcart } = this.props;
    toggleShopcart(); 
  }

  handleSeachIconClick = () => {
    const { toggleSearchField } = this.props;
    toggleSearchField();
  }

  handleSearchFieldChange = event => {
    const searchWord = event.target.value;
    const { updateSearchWord } = this.props;
    updateSearchWord(searchWord);
  }

  async handleEnterPress(event) {
    if (event.keyCode === 13) {
      const { search: { searchText } } = this.props;
      const { getGamesByName, setLoader, stopLoader, history } = this.props;
      setLoader();
      await getGamesByName(searchText);
      history.push('/');
      stopLoader();
    }
  }

  render() {
    const { left } = this.state; 
    const {
      shopcart: { 
        showCart, 
        cartItems
      }, 
      search: { 
        showSearchField, 
        searchText 
      } 
    } = this.props;

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
            {showSearchField && (
              <input 
                type="text" 
                placeholder='Search!' 
                className='search-field' 
                value={searchText}
                onChange={this.handleSearchFieldChange.bind(this)}
              />
            )}
            <Button onClick={this.handleSeachIconClick.bind(this)}>
              <Search className='search-icon'/>  
            </Button>
            <Button color="inherit"
              onClick={this.handleShopcartClick.bind(this)}
            >
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCart />
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
  shopcart: state.shopcart,
  search: state.search,
});

const mapDispatchToProps = {
  toggleShopcart,
  toggleSearchField,
  updateSearchWord,
  getGamesByName,
  setLoader,
  stopLoader
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));