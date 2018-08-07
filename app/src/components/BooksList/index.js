import React, { Fragment } from 'react';

import { Title, Row, Item } from './styles';

const BooksList = () => (
  <Fragment>
    <Title>Browse</Title>
    <Row>
      <Item to="/book/1">
        <img src="https://images.gr-assets.com/books/1348097960l/10660230.jpg" alt="Super Mario"/>
        <div>
          <strong>Super Mario</strong>
          <small>Jeff Ryan</small>
          <span>R$20,00</span>
        </div>
      </Item>
      <Item to="#">
        <img src="https://images.gr-assets.com/books/1348097960l/10660230.jpg" alt="Super Mario"/>
        <div>
          <strong>Super Mario</strong>
          <small>Jeff Ryan</small>
          <span>R$20,00</span>
        </div>
      </Item>
      <Item to="#">
        <img src="https://images.gr-assets.com/books/1348097960l/10660230.jpg" alt="Super Mario"/>
        <div>
          <strong>Super Mario</strong>
          <small>Jeff Ryan</small>
          <span>R$20,00</span>
        </div>
      </Item>
      <Item to="#">
        <img src="https://images.gr-assets.com/books/1348097960l/10660230.jpg" alt="Super Mario"/>
        <div>
          <strong>Super Mario</strong>
          <small>Jeff Ryan</small>
          <span>R$20,00</span>
        </div>
      </Item>
    </Row>
  </Fragment>  
)

export default BooksList;