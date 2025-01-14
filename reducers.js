const initialState = {
  products: [],
  cart: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
