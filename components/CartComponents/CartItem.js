import React from "react";

import { View } from "react-native";
import { Box, Icon, Image } from "native-base";
import { CenterdText } from "../../styles";
import { SHOP_DETAIL } from "../Navigation/types";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/actions/cartActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handelRemove = () => {
    dispatch(removeFromCart(item));
  };
  return (
    <Box
      bg="#DFEEEA"
      shadow={9}
      rounded="lg"
      maxWidth="95%"
      height="120px"
      flexDirection="row"
      margin={2}
    >
      <Image
        source={{
          uri: item.url,
        }}
        alt="image base"
        flex="3"
      />

      <View flex="4" padding={5}>
        <CenterdText>Item : {item.name}</CenterdText>
        <CenterdText>Price : {item.price} JOD</CenterdText>
        <CenterdText>Quantity : {item.quantity}</CenterdText>
        <CenterdText>Total : {item.quantity * item.price} JOD</CenterdText>
      </View>

      <Icon
        flex="1"
        as={MaterialIcons}
        name="remove-circle"
        size={35}
        color="red"
        margin="auto"
        onPress={handelRemove}
      />
    </Box>
  );
};

export default CartItem;
