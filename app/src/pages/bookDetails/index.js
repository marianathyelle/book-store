import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BookDetailsActions } from '../../store/ducks/bookDetails';

import Loading from '../../components/Loading';

import { Container, Book, Details } from './styles';


class BookDetails extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    getBookDetailsRequest: PropTypes.func.isRequired,
    book: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.title,
        author: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.string,
      }),
      loading: PropTypes.bool,
    }).isRequired
  }

  componentDidMount() {
    this.loadBookDetails();
  }

  loadBookDetails = () => {
    const { id } = this.props.match.params;

    this.props.getBookDetailsRequest(id);
  }

  renderDetails = () => {
    const book = this.props.book.data;
    return (
      <Container>
        <Book>
          <img src={book.thumbnail} alt={book.title}/>
          <Details>
            <h1>{book.title}</h1>
            <small>by {book.author}</small>
            <p>{book.description}</p>
            <strong>R$ {book.price}</strong>
            <div>
              <input type="number" placeholder="Quantity"/>
              <button>Add to cart</button>
            </div>
          </Details>
        </Book>
      </Container>
    )
  }

  render() {
    return this.props.book.loading ? (
      <Container loading> 
        <Loading/>
      </Container>
    ) : (
      this.renderDetails()
    );
  }
};

const mapStateToProps = state => ({
  book: state.bookDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(BookDetailsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);