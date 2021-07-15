import { combineReducers } from "redux";
import products from "./productReducer";
import shops from "./shopsReducer";
import user from "./authReducer";
import items from "./cartReducer";

const rootReducer = combineReducers({
  products: products,
  shops: shops,
  user: user,
  items: items,
});

export default rootReducer;
