import * as actionType from "../actions/types";

const initialState = {
  // initiate all state and its initial value
  items: [
    {
      itemId: 15,
      quantity: 5,
    },
    {
      itemId: 16,
      quantity: 3,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
