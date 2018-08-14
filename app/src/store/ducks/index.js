import { combineReducers } from 'redux';

import books from './books';
import bookDetails from './bookDetails';
import bookSubtotal from './bookSubtotal';
import cart from './cart';
import total from './total';

export default combineReducers({
  books,
  bookDetails,
  bookSubtotal,
  cart,
  total,
});