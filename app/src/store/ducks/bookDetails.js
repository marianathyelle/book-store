export const Types = {
  GET_REQUEST: 'bookDetails/GET_REQUEST',
  GET_SUCCESS: 'bookDetails/GET_SUCCESS'
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function bookDetails(state = INITIAL_STATE, action) {
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
  getBookDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),

  getBookDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};