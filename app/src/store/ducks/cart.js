export const Types = {
  GET_REQUEST: 'cart/GET_REQUEST',
  GET_SUCCESS: 'cart/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  total: 0,
  showMessage: false,
};

export default function cart(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.GET_REQUEST:
      return { ...state, showMessage: true }
    case Types.GET_SUCCESS:
      return { 
        ...state, 
        data: [ ...state.data, action.payload.data ], 
        showMessage: false,
      }
    default:
      return state;
  }
}

export const Creators = {
  getBooks: (id, qtd) => ({
    type: Types.GET_REQUEST,
    payload: { id, qtd }
  }),

  addBook: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),
};