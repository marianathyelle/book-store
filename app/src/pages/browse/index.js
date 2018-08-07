import React from 'react';

import FeaturedBooks from '../../components/FeaturedBooks';
import BooksList from '../../components/BooksList';

import { Container } from './styles';

const Browse = () => (
  <Container>
    <FeaturedBooks/>
    <BooksList/>
  </Container>
)

export default Browse;