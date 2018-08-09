import { combineReducers } from 'redux';

import books from './books';
import bookDetails from './bookDetails';

export default combineReducers({
  books,
  bookDetails,
});