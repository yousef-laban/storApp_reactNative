import React from "react";
import { Center, Spinner, View } from "native-base";
import { useSelector } from "react-redux";
import { ListScroll, Title } from "../../styles";
import ProductItem from "./ProductItem";
import { ScrollView } from "react-native";

const ProductList = ({ route }) => {
  // const shop = useSelector((state) => state.shops.shops[0]);
  const shop = route.params.shop;
  const products = useSelector((state) => state.products.products);

  const loading = useSelector((state) => state.products.loading);

  if (loading)
    return (
      <Center flex={1}>
        <Spinner color="blue" />
      </Center>
    );

  const filteredList = products
    .filter((product) => product.shopId === +shop.id)
    .map((product) => <ProductItem key={product.id} product={product} />);

  return (
    <>
      <Title> {shop.name} Products </Title>
      <ScrollView>
        <View alignItems="center" flexDirection="row" flexWrap="wrap">
          {filteredList}
        </View>
      </ScrollView>
    </>
  );
};

export default ProductList;
