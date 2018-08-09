import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as BookDetailsActions } from '../ducks/bookDetails';

export function* getBookDetails(action) {
  try {
    const response = yield call(api.get, `/books/${action.payload.id}`);

    yield put(BookDetailsActions.getBookDetailsSuccess(response.data));
  } catch(err) {
    console.log('Não foi possível obter os detalhes do livro');
  };
}