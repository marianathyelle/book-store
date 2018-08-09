import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksActions } from '../../store/ducks/books';

import Loading from '../../components/Loading';

import { Title, Row, Item } from './styles';

class BooksList extends Component {
  static propTypes = {
    getBookRequest: PropTypes.func.isRequired,
    books: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.title,
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
        <Title>Browse {this.props.books.loading && <Loading/>}</Title>
        <Row>
          {this.props.books.data.map(book => (
            <Item to={`/book/${book.id}`} key={book.id}>
              <img src={book.thumbnail} alt={book.title}/>
              <div>
                <strong>{book.title}</strong>
                <small>by {book.author}</small>
                <span>R${book.price}</span>
              </div>
            </Item>
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

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);