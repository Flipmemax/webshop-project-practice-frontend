const initialState = {
  loading: false,
  products: [],
};

export default function productSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "products/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "products/productsFetched": {
      return {
        ...state,
        loading: false,
        products: [...state.products, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
