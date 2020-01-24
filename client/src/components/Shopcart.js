import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/shopcart';
import { setLoader, stopLoader } from '../actions/loading';
import PropTypes from 'prop-types';

class Shopcart extends Component {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    shopcart: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    const { setLoader, stopLoader } = this.props;
    setLoader();
    //do asyncronous action
    stopLoader();
  }

  render() {
    const { loading, shopcart } = this.props;
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
  removeFromCart,
  setLoader,
  stopLoader
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopcart);
