import { all, takeLatest } from 'redux-saga/effects';

import { Types as BooksTypes } from '../ducks/books';
import { Types as BookDetailsTypes } from '../ducks/bookDetails';
import { Types as CartTypes } from '../ducks/cart';

import { getBooks } from './books';
import { getBookDetails } from './bookDetails';
import { addBookToCart } from './cart';

export default function* rootSaga() {
  yield all([
    takeLatest(BooksTypes.GET_REQUEST, getBooks),
    takeLatest(BookDetailsTypes.GET_REQUEST, getBookDetails),
    takeLatest(CartTypes.GET_REQUEST, addBookToCart),
  ]);
}