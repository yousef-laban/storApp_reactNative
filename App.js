import React from "react";
import { NativeBaseProvider } from "native-base";
import { BackGroundStyling } from "./styles";
import { NavigationContainer } from "@react-navigation/native";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";

//components
import Home from "./components/Home";
import ShopList from "./components/shopsComponents/ShopList";
import ProductList from "./components/ProductComponents/ProductList";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <BackGroundStyling>
          {/* <Home /> */}
          {/* <ShopList /> */}
          <ProductList />
        </BackGroundStyling>
      </NativeBaseProvider>
    </Provider>
  );
}
