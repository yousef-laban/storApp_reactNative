import React from "react";
import { Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CART_LIST } from "../Navigation/types";

const CartIcon = () => {
  const navigation = useNavigation();

  return (
    <Icon
      as={Ionicons}
      name="cart"
      size={44}
      color="black"
      onPress={() => navigation.navigate(CART_LIST)}
      margin={2}
    />
  );
};

export default CartIcon;
