export const Types = {
  GET_REQUEST: 'total/GET_REQUEST',
  GET_SUCCESS: 'total/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export default function total(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true }
    case Types.GET_SUCCESS:
      return { 
        ...state,
        data: { ...action.payload }
      }
    default:
      return state;
  }
}

export const Creators = {
  getTotalRequest: (quantities, prices) => ({
    type: Types.GET_REQUEST,
    payload: { quantities, prices }
  }),

  getTotalSuccess: (quantity, price, discount, total) => ({
    type: Types.GET_SUCCESS,
    payload: { quantity, price, discount, total }
  }),
};