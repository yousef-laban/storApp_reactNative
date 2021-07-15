import React from "react";
import { Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CART_LIST } from "../Navigation/types";
import { useSelector } from "react-redux";
import { Text, StyleSheet } from "react-native";

const CartIcon = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.items.items);
  let count = 0;
  items.forEach((item) => {
    count += item.quantity;
  });
  return (
    <>
      <Icon
        as={Ionicons}
        name="cart"
        size={44}
        color="black"
        onPress={() => navigation.navigate(CART_LIST)}
        margin={3}
        marginTop={12}
      />
      <Text style={styles.Text}>{count}</Text>
    </>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  Text: {
    backgroundColor: "red",
    color: "#DFEEEA",
    textAlign: "center",
    width: 20,
    padding: 2,
    borderRadius: 10,
    height: 20,
    overflow: "hidden",
    position: "absolute",
    right: 12,
  },
});
