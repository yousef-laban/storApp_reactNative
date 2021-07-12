import { combineReducers } from "redux";
import products from "./productReducer";
import shops from "./shopsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  products: products,
  shops: shops,
  user: authReducer,
});

export default rootReducer;
