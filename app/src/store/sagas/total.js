import { put } from 'redux-saga/effects';

import { Creators as TotalActions } from '../ducks/total';

export function* getTotal(action) {
  const quantityTotal = action.payload.quantities.reduce((a, b) => a + b, 0);
  const priceTotal = action.payload.prices.reduce((a, b) => a + b, 0);

  var discount;

  switch(quantityTotal) {
    case 1: 
      discount = 0;
      break;
    case 2: 
      discount = priceTotal*5/100;
      break;
    case 3: 
      discount = priceTotal*10/100;
      break;
    case 4:
      discount = priceTotal*20/100;
      break;
    default: 
      discount = priceTotal*25/100; 
  }

  const total = yield priceTotal - discount;
  
  yield put(TotalActions.getTotalSuccess(quantityTotal, priceTotal, discount, total));
}

