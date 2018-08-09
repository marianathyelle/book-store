import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from '../../store/ducks/books';

import Loading from '../../components/Loading';

import { Row, Box, About, Title } from './styles';

class FeaturedBooks extends Component {
  static propTypes = {
    getBookRequest: PropTypes.func.isRequired,
    books: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.title,
        primaryColor: PropTypes.string,
        secondaryColor: PropTypes.string,
        thumbnail: PropTypes.string,
        author: PropTypes.string,
        price: PropTypes.string,
      })),
      loading: PropTypes.bool,
    }).isRequired
  }

  componentDidMount() {
    this.props.getBookRequest();
  }

  render() {
    return (
      <Fragment>
        <Title>Featured Books {this.props.books.loading && <Loading/>}</Title>
        <Row>
          {this.props.books.data.filter(book => book.featured === true).map(book => (
            <Box 
              to={`/book/${book.id}`} 
              key={book.id} 
              primarycolor={book.primaryColor} 
              secondarycolor={book.secondaryColor}>

              <img src={book.thumbnail} alt={book.title} />
              
              <About primarycolor={book.primaryColor}>
                <strong>{book.title}</strong>
                <small>by {book.author}</small>
                <p>{book.description}</p>
                <span>R${book.price}</span>
              </About>
            </Box> 
          ))} 
        </Row>
      </Fragment>
    )
  }
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedBooks);