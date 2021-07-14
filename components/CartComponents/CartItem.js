import React from "react";

import { View } from "react-native";
import { Box, Image } from "native-base";
import { CenterdText } from "../../styles";
import { SHOP_DETAIL } from "../Navigation/types";

const CartItem = ({ item }) => {
  return (
    <Box
      bg="#DFEEEA"
      shadow={9}
      rounded="lg"
      maxWidth="95%"
      height="30%"
      flexDirection="row"
      margin={1}
    >
      <Image
        source={{
          uri: item.url,
        }}
        alt="image base"
        flex="1"
      />

      <View flex="2" padding={5}>
        <CenterdText>Item : {item.name}</CenterdText>
        <CenterdText>Price : {item.price} JOD</CenterdText>
        <CenterdText>Quantity : {item.quantity}</CenterdText>
        <CenterdText>Total : {item.quantity * item.price} JOD</CenterdText>
      </View>
    </Box>
  );
};

export default CartItem;
