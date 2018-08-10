import { combineReducers } from 'redux';

import books from './books';
import bookDetails from './bookDetails';
import bookSubtotal from './bookSubtotal';
import cart from './cart';

export default combineReducers({
  books,
  bookDetails,
  bookSubtotal,
  cart,
});