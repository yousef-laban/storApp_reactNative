import * as actionType from "../actions/types";

const initialState = {
  // initiate all state and its initial value
  items: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART: {
      const newProduct = action.payload;
      const foundProduct = state.items.find(
        (item) => item.productId === newProduct.productId
      );
      if (foundProduct)
        return {
          ...state,
          items: state.items.map((item) =>
            item === foundProduct ? newProduct : item
          ),
        };
      else
        return {
          ...state,
          items: [...state.items, { ...newProduct }],
        };
    }
    case actionType.REMOVE_FROM_CART: {
      const removedProduct = action.payload;
      console.log(removedProduct);
      return {
        ...state,
        items: state.items.filter(
          (item) => item.productId !== removedProduct.id
        ),
      };
    }

    case actionType.CHECK_OUT: {
      return {
        ...state,
        items: [],
      };
    }

    default:
      return state;
  }
};

export default productReducer;
