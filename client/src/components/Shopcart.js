import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, toggleShopcart } from '../actions/shopcart';
import { setLoader, stopLoader } from '../actions/loading';
import PropTypes from 'prop-types';
import { HighlightOff} from '@material-ui/icons';

class Shopcart extends Component {
  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    shopcart: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    toggleShopcart: PropTypes.func.isRequired,

  }

  componentDidMount() {
    const { setLoader, stopLoader } = this.props;
    setLoader();
    //do asyncronous action
    stopLoader();
  }

  handleCrossClick = () => {
    const { toggleShopcart } = this.props;
    toggleShopcart();
  }

  render() {
    const { loading, shopcart: { error, cartItems} } = this.props;

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
            <div className='shopcart-container'>
              <h2>Shopping Cart:</h2>
              <p>test</p>
              <p>test</p>
              <HighlightOff 
                className='shopcart-close-btn' 
                onClick={this.handleCrossClick.bind(this)}
              />
            </div>
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
  addToCart,
  removeFromCart,
  setLoader,
  stopLoader,
  toggleShopcart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopcart);
