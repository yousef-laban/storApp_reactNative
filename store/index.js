import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root Reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

import { fetchShops } from "./actions/shopsActions";
import { fetchProducts } from "./actions/productActions";
import { checkForToken } from "./actions/authActions";

store.dispatch(fetchShops());
store.dispatch(fetchProducts());
store.dispatch(checkForToken());

export default store;
