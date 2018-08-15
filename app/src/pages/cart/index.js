import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';
import { Creators as TotalActions } from '../../store/ducks/total';

import EmptyCart from '../../components/EmptyCart';
import Total from '../../components/Total';

import DeleteIcon from '../../assets/images/close.svg';
import { Container, Row, Item, Info, Calculate, ShowDetails, Delete } from './styles';

class Cart extends Component {

  static propTypes = {
    getTotalRequest: PropTypes.func.isRequired,
    removeBook: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        thumbnail: PropTypes.string,
        title: PropTypes.title,
        price: PropTypes.string,
        qtd: PropTypes.string,
        subtotal: PropTypes.number,
      })).isRequired,
      totalDetails: PropTypes.bool,
    }).isRequired
  }

  getValues = () => {
    const booksQuantity = this.props.cart.data.map(item => (
      Number(item.qtd)
    ));

    const subtotalPrice = this.props.cart.data.map(item => (
      item.subtotal
    ));

    this.props.getTotalRequest(booksQuantity, subtotalPrice);
  }

  getIndexOfBook = id => {
    const index = this.props.cart.data.findIndex(item => (
      item.id === id
    ));
    this.props.removeBook(index)
  }

  render() {
    return (
      <Container>
        <h1>Your books</h1>
        { this.props.cart.data.length === 0 ? (
          <EmptyCart/>
        ) : (
          <Fragment>
            <Row>
              {this.props.cart.data.map(book => (
                <Item key={book.id}>
                  <img src={book.thumbnail} alt={book.title} />
                  <Info>
                    <strong>{book.title}</strong>
                    <Delete onClick={() => this.getIndexOfBook(book.id)}>
                      <img src={DeleteIcon} alt="Delete book"/>
                    </Delete>
                    <div>
                      <span>Price:</span>
                      <span>R$ {parseFloat(book.price).toFixed(2)}</span>
                    </div>
                    <div>
                      <span>Quantity:</span>
                      <span>{book.qtd}</span>
                    </div>
                    <div>
                      <span>Subtotal:</span>
                      <span>R$ {parseFloat(book.subtotal).toFixed(2)}</span>
                    </div>
                  </Info>
                </Item>
              ))}
            </Row>
            { !this.props.totalDetails ? (
              <ShowDetails>Click on calculate button to calculate your purchase</ShowDetails>
            ) : (
              <Total totalDetails={this.props.totalDetails}/>
            )}
            <Calculate>
              <button onClick={this.getValues}>Calculate total</button>
            </Calculate>
          </Fragment>
        ) }
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  cart: state.cart,
  totalDetails: state.total.data,
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({...CartActions, ...TotalActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);