import React from 'react';

import { Container, Row, Item, Info, Calculate } from './styles';

const Cart = () => (
  <Container>
    <h1>Your books</h1>
    <Row>
      <Item>
        <img src="https://images.gr-assets.com/books/1348097960l/10660230.jpg" alt="super mario" />
        <Info>
          <strong>Super Mario</strong>
          <small>by Jeff Ryan</small>
          <div>
            <span>Price:</span>
            <span>R$20,00</span>
          </div>
          <div>
            <span>Quantity:</span>
            <span>3</span>
          </div>
          <div>
            <span>Subtotal:</span>
            <span>R$60,00</span>
          </div>
        </Info>
      </Item>
      <Item>
        <img src="https://images.gr-assets.com/books/1348097960l/10660230.jpg" alt="super mario" />
        <Info>
          <strong>Super Mario</strong>
          <small>by Jeff Ryan</small>
          <div>
            <span>Price:</span>
            <span>R$20,00</span>
          </div>
          <div>
            <span>Quantity:</span>
            <span>3</span>
          </div>
          <div>
            <span>Subtotal:</span>
            <span>R$60,00</span>
          </div>
        </Info>
      </Item>
    </Row>
    <Calculate>
      <button>Calculate total</button>
    </Calculate>
  </Container>
);

export default Cart;