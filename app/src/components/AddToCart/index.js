import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BookSubtotalActions } from '../../store/ducks/bookSubtotal';
import { Creators as CartActions } from '../../store/ducks/cart';

import { Row, SuccessMessage, ErrorMessage } from './styles';

class AddToCart extends Component {
  static propTypes = {
    initialSubtotal: PropTypes.func.isRequired,
    getBookSubtotalRequest: PropTypes.func.isRequired,
    getBooks: PropTypes.func.isRequired,
    subtotal: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
    cart: PropTypes.shape({
      showMessage: PropTypes.bool,
    }).isRequired,
  }

  state = {
    quantity: null,
    error: false,
  }

  componentDidMount() {
    this.props.initialSubtotal();
  }

  getInputValue = e => {
    this.setState({ 
      quantity: e.target.value,
      error: false
    }, () => {
      this.props.getBookSubtotalRequest(this.state.quantity, this.props.price);
    })
  };

  getBookData = () => {
    if( this.state.quantity > 0 ) {
      this.props.getBooks(this.props.id, this.state.quantity)
    } else {
      this.setState({ error: true })
    }
  };

  render() {
    return (
      <Fragment>
        <strong>R$ {this.props.subtotal ? this.props.subtotal : this.props.price}</strong>
        <Row>
          <input 
            type="number" 
            placeholder="Quantity"
            onChange={this.getInputValue}
          />
          <button onClick={this.getBookData}>Add to cart</button>
          {this.props.cart.showMessage && <SuccessMessage>Book added to cart</SuccessMessage>}
          {this.state.error && <ErrorMessage>Please, add a quantity</ErrorMessage>}
        </Row>
      </Fragment>
    )
  }
};

const mapStateToProps = state => ({
  subtotal: state.bookSubtotal.subtotal,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({ ...BookSubtotalActions, ...CartActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);