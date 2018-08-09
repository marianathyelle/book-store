import { all, takeLatest } from 'redux-saga/effects';

import { Types as BooksTypes } from '../ducks/books';
import { Types as BookDetailsTypes } from '../ducks/bookDetails';

import { getBooks } from './books';
import { getBookDetails } from './bookDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(BooksTypes.GET_REQUEST, getBooks),
    takeLatest(BookDetailsTypes.GET_REQUEST, getBookDetails),
  ]);
}