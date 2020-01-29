import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { HighlightOff} from '@material-ui/icons';
var currencyFormatter = require('currency-formatter');


const CartItems = ({
  shopcart: {
    cartItems = []
  }
}) => {
  if(!cartItems.length) {
    return (
      <Fragment>
        <Typography variant='body1'>No items in cart!</Typography>
      </Fragment>
    );
  }
  const itemMarkup = cartItems.map((item, index) => (
    <div className='shopcart-item' key={index}>
      <img src={item.images.thumb} />
      <Typography className="shopcart-name" variant='h5'>{item.name}</Typography>
      <Typography className="shopcart-price" variant='body1'>{currencyFormatter.format((item.price*9.18).toFixed(0), {precision: 0, thousand: '.', code: 'NOK'})}</Typography>
      <HighlightOff className='remove-from-cart-btn btn' />
    </div>
    
  ));

  return (
    <Fragment>
      {itemMarkup}
    </Fragment>
  )
}

CartItems.propTypes = {
  shopcart: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  shopcart: state.shopcart
});

export default connect(mapStateToProps, null)(CartItems);
