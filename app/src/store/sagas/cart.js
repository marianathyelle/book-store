import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as CartActions } from '../ducks/cart';

export function* addBookToCart(action) {
  try {
    const { data } = yield call(api.get, `/books/${action.payload.id}`);

    const subtotal = action.payload.qtd * data.price;

    const bookData = {
      id: data.id,
      thumbnail: data.thumbnail,
      title: data.title,
      price: data.price,
      qtd: action.payload.qtd,
      subtotal,
    };
    
    yield put(CartActions.addBook(bookData));

  } catch(err) {
    console.log('Não foi possível obter os dados do livro');
  };
}

