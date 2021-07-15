import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as types from "./types";

// components
import Home from "../Home";
import ProductList from "../ProductComponents/ProductList";
import ShopList from "../shopsComponents/ShopList";
import CartList from "../CartComponents/CartList";
import CartIcon from "../CartComponents/CartIcon";
import SignIn from "../AuthComponent/SignIn";
import SignUp from "../AuthComponent/SignUp";

const StackNavigator = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={types.HOME}
      screenOptions={{
        headerTransparent: true,
        headerTintColor: " #dfeeea ",
        headerRight: () => <CartIcon />,
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
          // headerRight: () => <CartIcon />,
        })}
      />

      <Screen
        name={types.CART_LIST}
        component={CartList}
        options={{ title: "Cart" }}
      />

      <Screen
        name={types.SIGN_IN}
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Screen
        name={types.SIGN_UP}
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default StackNavigator;
