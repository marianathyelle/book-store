import React from 'react';

import { Container } from './styles';

const EmptyCart = () => (
  <Container>
    <h2>Your cart is empty</h2>
    <a href="/">Back to store</a>
  </Container>
);

export default EmptyCart;