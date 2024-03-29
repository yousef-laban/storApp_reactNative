import React from "react";

import { TouchableOpacity, View } from "react-native";
import { Box, Image } from "native-base";
import { CenterdText } from "../../styles";
import { SHOP_DETAIL } from "../Navigation/types";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Box
      bg="#DFEEEA"
      shadow={9}
      rounded="lg"
      maxWidth="95%"
      height="30%"
      flexDirection="row"
    >
      {/* <TouchableOpacity onPress={() => navigation.navigate(SHOP_DETAIL)}> */}
      <Image
        source={{
          uri: shop.url,
        }}
        alt="image base"
        flex="1"
      />
      {/* </TouchableOpacity> */}

      <View flex="1" padding={5}>
        <CenterdText onPress={() => navigation.navigate(SHOP_DETAIL, { shop })}>
          {shop.name}
        </CenterdText>
      </View>
    </Box>
  );
};

export default ShopItem;
