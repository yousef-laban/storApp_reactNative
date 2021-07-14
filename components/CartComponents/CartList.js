import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

//component
import CartItem from "./CartItem";

const CartList = () => {
  const items = useSelector((state) => state.items.items);
  const products = useSelector((state) => state.products.products);
  let total = 0;

  const cartItems = items
    .map((item) => ({
      ...products.find((product) => product.id === item.itemId),
      quantity: item.quantity,
    }))
    .map((item) => {
      total += item.quantity * item.price;
      return <CartItem item={item} key={item.id} />;
    });

  return (
    <>
      <View marginTop={100}>{cartItems}</View>
      <Text>Total : {total}</Text>
    </>
  );
};

export default CartList;
