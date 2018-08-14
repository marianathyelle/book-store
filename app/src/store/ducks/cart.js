export const Types = {
  GET_REQUEST: 'cart/GET_REQUEST',
  GET_SUCCESS: 'cart/GET_SUCCESS',
  REMOVE_ITEM: 'cart/REMOVE_ITEM',
};

const INITIAL_STATE = {
  data: [],
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
      case Types.REMOVE_ITEM: {
        state.data.splice(action.payload.index, 1);

        return { ...state, data: [ ...state.data ] }
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

  removeBook: index => ({
    type: Types.REMOVE_ITEM,
    payload: { index }
  }),
};