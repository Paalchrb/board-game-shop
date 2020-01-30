import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
var currencyFormatter = require('currency-formatter');

const CartSum = ({
  shopcart: {
    cartItems
  }
}) => {
  return (
    <Fragment>
      {cartItems.length ? (
        <div className='sum-container'>
          <Typography variant='h5'>Sum:</Typography>
          <Typography className="shopcart-price" variant='body1'>{currencyFormatter.format((cartItems.reduce((acc, item) => {
            return acc + +item.price;
          }, 0) * 9.18).toFixed(0), {precision: 0, thousand: '.', code: 'NOK'})}</Typography>
        </div>
      ): (
        <Fragment></Fragment>
      )}
    </Fragment>
  )
}

CartSum.propTypes = {
  shopcart: PropTypes.object.isRequired,
}

const mapStateToProps  = state => ({
  shopcart: state.shopcart
})

export default connect(mapStateToProps, null)(CartSum);
