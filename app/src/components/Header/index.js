import React from 'react';

import { Container, Logo, Nav } from './styles';

const Header = () => (
  <Container>
    <Logo>BookStore</Logo>
    <Nav>
      <li>
        <a href="">Store</a>
      </li>
      <li>
        <a href="">Cart</a>
      </li>
    </Nav>
  </Container>
);

export default Header;