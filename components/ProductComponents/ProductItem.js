import React, { useState } from "react";

import { Button, View } from "react-native";
import { Box, Image } from "native-base";
import { CenterdText } from "../../styles";
import NumericInput from "react-native-numeric-input";
import NumaricAdd from "./NumaricAdd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handelAdd = () => {
    const newProduct = { quantity, productId: product.id };
    dispatch(addToCart(newProduct));
  };

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
        <NumaricAdd
          setQuantity={setQuantity}
          quantity={quantity}
          handelAdd={handelAdd}
        />
      </View>
    </Box>
  );
};

export default ProductItem;
