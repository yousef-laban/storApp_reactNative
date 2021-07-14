import { combineReducers } from "redux";
import products from "./productReducer";
import shops from "./shopsReducer";
import authReducer from "./authReducer";
import items from "./cartReducer";

const rootReducer = combineReducers({
  products: products,
  shops: shops,
  user: authReducer,
  items: items,
});

export default rootReducer;
