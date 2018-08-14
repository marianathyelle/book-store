import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { Container, Logo, Nav } from './styles';

const Header = ({ cart }) => (
  <Container>
    <Logo>BookStore</Logo>
    <Nav>
      <li>
        <Link to="/">Store</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
        {cart.length > 0 && <span>{cart.length}</span>}
      </li>
    </Nav>
  </Container>
);

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()),
};

const mapStateToProps = state => ({
  cart: state.cart.data,
});

export default connect(mapStateToProps)(Header);