import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as BooksActions } from '../ducks/books';

export function* getBooks() {
  try {
    const response = yield call(api.get, '/books');

    yield put(BooksActions.getBookSuccess(response.data));
    
  } catch(err) {
    console.log('Não foi possível obter as playlists');
  };
}