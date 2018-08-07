import React from 'react';

import { Container, Book, Details } from './styles';

const BookDetails = () => (
  <Container>
    <Book>
      <img src="https://images.gr-assets.com/books/1348097960l/10660230.jpg" alt="Super Mario"/>
      <Details>
        <h1>Super Mario</h1>
        <small>by Jeff Ryan</small>
        <p>Super Mario tells the story behind the Nintendo games millions of us grew up with, explaining how a Japanese trading card company rose to dominate the fiercely competitive video-game industry.</p>
        <div>
          <input type="number" placeholder="Quantity"/>
          <button>Add to cart</button>
        </div>
      </Details>
    </Book>
  </Container>
);

export default BookDetails;