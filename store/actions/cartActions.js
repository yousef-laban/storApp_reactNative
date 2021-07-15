import * as actionType from "./types";

export const addToCart = (newProduct) => ({
  type: actionType.ADD_TO_CART,
  payload: newProduct,
});

export const removeFromCart = (removedProduct) => ({
  type: actionType.REMOVE_FROM_CART,
  payload: removedProduct,
});

export const checkOut = (removedProduct) => ({
  type: actionType.CHECK_OUT,
});
