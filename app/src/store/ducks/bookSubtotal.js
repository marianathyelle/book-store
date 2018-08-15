export const Types = {
  INITIAL_SUBTOTAL: 'bookSubtotal/INITIAL_SUBTOTAL',
  GET_REQUEST: 'bookSubtotal/GET_REQUEST',
};

const INITIAL_STATE = {
  subtotal: null,
};

export default function bookSubtotal(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.INITIAL_SUBTOTAL: 
      return { subtotal: null }
    case Types.GET_REQUEST: {
      const value = action.payload.price;
      const currentValue = value * action.payload.qtd;
      console.log(value)

      if(action.payload.qtd > 0) {
       return {
         subtotal: parseFloat(currentValue).toFixed(2),
       }
      }
      
      return state;
    }
    default:
      return state;
  }
}

export const Creators = {
  initialSubtotal: () => ({
    type: Types.INITIAL_SUBTOTAL,
  }),

  getBookSubtotalRequest: (qtd, price) => ({
    type: Types.GET_REQUEST,
    payload: { qtd, price },
  }),
};