import React, { Fragment } from 'react';

import { Row, Box, About, Title } from './styles';

const FeaturedBooks = () => (
  <Fragment>
    <Title>Featured Books</Title>
    <Row>
      <Box href="#" firstColor="#b0a5f7" secondColor="#E0DCFF">
        <img src="http://demo.cmssuperheroes.com/themeforest/bookjunky/wp-content/uploads/the_world.jpg" alt="The World od Abstract Art" />
        <About firstColor="#b0a5f7">
          <strong>The World od Abstract Art</strong>
          <small>by Emily Robbins</small>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
          <span>R$29,00</span>
        </About>
      </Box>

      <Box href="#" firstColor="#FBAAB5" secondColor="#FFD0D2">
        <img src="https://truelakeaudio1.files.wordpress.com/2017/06/how-to-book-cover.jpg" alt="The World od Abstract Art" />
        <About firstColor="#FBAAB5">
          <strong>The World od Abstract Art</strong>
          <small>by Emily Robbins</small>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
          <span>R$35,00</span>
        </About>
      </Box>

      <Box href="#" firstColor="#7ac5f4" secondColor="#C4EAFF">
        <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=4073261&qld=90&l=430&a=-1" alt="The World od Abstract Art" />
        <About firstColor="#7ac5f4">
          <strong>The World od Abstract Art</strong>
          <small>by Emily Robbins</small>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
          <span>R$50,00</span>
        </About>
      </Box>
      
    </Row>
  </Fragment>
);

export default FeaturedBooks;