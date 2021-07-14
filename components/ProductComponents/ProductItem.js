import React from "react";

import { Button, View } from "react-native";
import { Box, Image } from "native-base";
import { CenterdText } from "../../styles";
import NumericInput from "react-native-numeric-input";

const ProductItem = ({ product }) => {
  return (
    <Box
      bg="#DFEEEA"
      shadow={9}
      rounded="lg"
      width="46%"
      margin={2}
      flexDirection="column"
      height="300px"
    >
      <Image
        source={{
          uri: product.url,
        }}
        alt="image base"
        flex="3"
        rounded="lg"
      />

      <View flex="1" padding={5}>
        <CenterdText>{product.name}</CenterdText>
        <CenterdText>{product.price} JOD</CenterdText>
        <CenterdText>
          <NumericInput
            flex="1"
            totalWidth={100}
            totalHeight={25}
            rounded
            minValue={0}
            onChange={(value) => console.log(value)}
          />
          <Button flex="100" margin="auto" title="Add" />
        </CenterdText>
      </View>
    </Box>
  );
};

export default ProductItem;
