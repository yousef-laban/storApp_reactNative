import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

// components
import Home from "../Home";
import ProductList from "../ProductComponents/ProductList";
import ShopList from "../shopsComponents/ShopList";

import * as types from "./types";
import CartList from "../CartComponents/CartList";
import CartIcon from "../CartComponents/CartIcon";

const StackNavigator = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={types.HOME}
      screenOptions={{
        headerTransparent: true,
        headerTintColor: " #dfeeea ",
        cardStyle: {
          backgroundColor: "#2f5d62",
        },
      }}
    >
      <Screen
        name={types.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name={types.SHOP_LIST}
        component={ShopList}
        options={{ title: "" }}
      />
      <Screen
        name={types.SHOP_DETAIL}
        component={ProductList}
        options={({ route }) => ({
          // title: route.params.shop.name,
          title: "",
          headerRight: () => <CartIcon />,
        })}
      />

      <Screen
        name={types.CART_LIST}
        component={CartList}
        options={{ title: "Cart" }}
      />
    </Navigator>
  );
};

export default StackNavigator;
