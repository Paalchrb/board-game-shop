import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { HighlightOff} from '@material-ui/icons';
import { removeFromCart } from '../actions/shopcart';


const CartItems = ({
  shopcart: {
    cartItems = []
  },
  removeFromCart
}) => {
  if(!cartItems.length) {
    return (
      <Fragment>
        <Typography variant='body1'>No items in cart!</Typography>
      </Fragment>
    );
  }

  const handleRemoveClick = id => {
    removeFromCart(id);
  }

  const itemMarkup = cartItems.map((item, index) => (
    <div className='shopcart-item' key={index}>
      <Typography variant='h5'>{item.name}</Typography>
      <Typography variant='body1'>{item.price}</Typography>
      <HighlightOff 
        className='remove-from-cart-btn' 
        onClick={() => handleRemoveClick(item.id)}
      />
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
  removeFromCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  shopcart: state.shopcart
});

const mapDispatchToProps = {
  removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
