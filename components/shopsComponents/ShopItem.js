import React from "react";

import { View } from "react-native";
import { Box, Image } from "native-base";
import { CenterdText } from "../../styles";

const ShopItem = ({ shop }) => {
  return (
    <Box
      bg="#DFEEEA"
      shadow={9}
      rounded="lg"
      maxWidth="95%"
      height="30%"
      flexDirection="row"
    >
      <Image
        source={{
          uri: shop.url,
        }}
        alt="image base"
        flex="1"
      />

      <View flex="1" padding={5}>
        <CenterdText>{shop.name}</CenterdText>
      </View>
    </Box>
  );
};

export default ShopItem;
