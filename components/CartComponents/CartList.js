import { NavigationContainer } from "@react-navigation/native";
import { ScrollView } from "native-base";
import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkOut } from "../../store/actions/cartActions";
import { SIGN_IN } from "../Navigation/types";

//component
import CartItem from "./CartItem";

const CartList = ({ navigation }) => {
  const items = useSelector((state) => state.items.items);
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  let total = 0;

  const cartItems = items
    .map((item) => ({
      ...products.find((product) => product.id === item.productId),
      quantity: item.quantity,
    }))
    .map((item) => {
      total += item.quantity * item.price;
      return <CartItem item={item} key={item.id} />;
    });

  const handelCheckOut = () => {
    if (user) dispatch(checkOut());
    else
      Alert.alert("SIGN IN", "Sign In Please", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Sign In", onPress: () => navigation.navigate(SIGN_IN) },
      ]);
  };
  return (
    <>
      <ScrollView marginTop="90px">
        <View alignItems="center" flexDirection="column">
          {cartItems}
        </View>
      </ScrollView>
      <View alignItems="center" flexDirection="row">
        <Text flex="1" style={styles.Text1}>
          Total : {total} JOD
        </Text>
        <Text onPress={handelCheckOut} flex="1" style={styles.Text2}>
          Check Out
        </Text>
      </View>
    </>
  );
};

export default CartList;

const styles = StyleSheet.create({
  Text1: {
    color: "#DFEEEA",
    textAlign: "center",
    // width: 175,
    height: 50,
    borderWidth: 3,
    borderColor: "#DFEEEA",
    borderRadius: 10,
    overflow: "hidden",
    width: "44%",
    margin: "3%",
    padding: 10,
    fontSize: 20,
  },
  Text2: {
    color: "#2f5d62",
    backgroundColor: "#DFEEEA",
    textAlign: "center",
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    width: "44%",
    margin: "3%",
    padding: 10,
    fontSize: 20,
  },
});
