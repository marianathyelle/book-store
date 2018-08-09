export const Types = {
  GET_REQUEST: 'books/GET_REQUEST',
  GET_SUCCESS: 'books/GET_SUCCESS'
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function books(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.GET_REQUEST: 
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getBookRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getBookSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};