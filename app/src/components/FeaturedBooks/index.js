import React, { Fragment } from 'react';

import { Container, Box, About, Title } from './styles';

const FeaturedBooks = () => (
  <Fragment>
    <Title>Featured Books</Title>
    <Container>
      <Box href="#" firstColor="#BCB0FE" secondColor="#E0DCFF">
        <img src="http://demo.cmssuperheroes.com/themeforest/bookjunky/wp-content/uploads/the_world.jpg" alt="The World od Abstract Art" />
        <About>
          <strong>The World od Abstract Art</strong>
          <small>by Emily Robbins</small>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
          <span>R$29,00</span>
        </About>
      </Box>

      <Box href="#" firstColor="#FBAAB5" secondColor="#FFD0D2">
        <img src="https://truelakeaudio1.files.wordpress.com/2017/06/how-to-book-cover.jpg" alt="The World od Abstract Art" />
        <About>
          <strong>The World od Abstract Art</strong>
          <small>by Emily Robbins</small>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
          <span>R$35,00</span>
        </About>
      </Box>

      <Box href="#" firstColor="#96D6FF" secondColor="#C4EAFF">
        <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=4073261&qld=90&l=430&a=-1" alt="The World od Abstract Art" />
        <About>
          <strong>The World od Abstract Art</strong>
          <small>by Emily Robbins</small>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
          <span>R$50,00</span>
        </About>
      </Box>
      
    </Container>
  </Fragment>
);

export default FeaturedBooks;