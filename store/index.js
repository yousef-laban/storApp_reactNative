import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root Reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

import { fetchShops } from "./actions/shopsActions";
store.dispatch(fetchShops());

import { fetchProducts } from "./actions/productActions";
store.dispatch(fetchProducts());

export default store;
