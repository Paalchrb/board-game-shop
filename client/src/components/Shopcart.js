import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateCart, removeFromCart, toggleShopcart } from '../actions/shopcart';
import { setLoader, stopLoader } from '../actions/loading';
import PropTypes from 'prop-types';
import { HighlightOff} from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import CartItems from './CartItems';
import CartSum from './CartSum';


class Shopcart extends Component {
  static propTypes = {
    updateCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    shopcart: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    toggleShopcart: PropTypes.func.isRequired,

  }

  async componentDidMount() {
    const { setLoader, stopLoader, updateCart } = this.props;
    setLoader();
    if(this.props.shopcart.cartItems.length === 0) {
      const savedItems = await JSON.parse(localStorage.getItem('cart-items')) || [];
      savedItems.forEach(item => updateCart(item.id));
    }
    stopLoader();
  }

  handleCrossClick = () => {
    const { toggleShopcart } = this.props;
    toggleShopcart();
  }

  render() {
    const { loading, shopcart: { error } } = this.props;

    if (error) {
      return (
        <Fragment>
          <h3>Error</h3>
          <p>Something went wrong</p>
        </Fragment>
      );
    }

    return (
      <Fragment>
        {
          !loading ? (
            <Fragment>
              <HighlightOff 
                  color='primary'
                  className='shopcart-close-btn'
                  onClick={this.handleCrossClick.bind(this)}
              />
              <div className='shopcart-content'>
                <Typography variant='h3' component="h3">Shopping cart:</Typography>
                <CartItems />
                <CartSum />
              </div>
            </Fragment>
          ) : (
             <p>Loading...</p>
          )
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  shopcart: state.shopcart,
  loading: state.loading.isLoading
});

const mapDispatchToProps = {
  updateCart,
  removeFromCart,
  setLoader,
  stopLoader,
  toggleShopcart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopcart);
