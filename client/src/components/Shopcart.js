import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/shopcart';
import PropTypes from 'prop-types';

class Shopcart extends Component {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    shopcart: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div>
        <h2>This is the shopcart</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shopcart: state.shopcart,
  loading: state.loading.isLoading
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopcart);
