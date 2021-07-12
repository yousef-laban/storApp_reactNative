import React from "react";

import { View } from "react-native";
import { Box, Image } from "native-base";
import { CenterdText } from "../../styles";

const ProductItem = ({ product }) => {
  return (
    <Box
      bg="#DFEEEA"
      shadow={9}
      rounded="lg"
      width="46%"
      margin={2}
      flexDirection="column"
      height="275px"
    >
      <Image
        source={{
          uri: product.url,
        }}
        alt="image base"
        flex="4"
        rounded="lg"
      />

      <View flex="1" padding={5}>
        <CenterdText>{product.name}</CenterdText>
        <CenterdText>{product.price} JOD</CenterdText>
      </View>
    </Box>
  );
};

export default ProductItem;
