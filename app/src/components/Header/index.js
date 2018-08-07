import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Nav } from './styles';

const Header = () => (
  <Container>
    <Logo>BookStore</Logo>
    <Nav>
      <li>
        <Link to="/">Store</Link>
      </li>
      <li>
        <Link to="">Cart</Link>
      </li>
    </Nav>
  </Container>
);

export default Header;