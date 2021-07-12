import React from "react";
import { Center, Spinner, View } from "native-base";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
import { Title } from "../../styles";

const ShopList = () => {
  const shops = useSelector((state) => state.shops.shops);
  const loading = useSelector((state) => state.shops.loading);

  console.log(shops);

  if (loading)
    return (
      <Center flex={1}>
        <Spinner color="blue" />
      </Center>
    );

  const filteredList = shops.map((shop) => (
    <ShopItem key={shop.id} shop={shop} />
  ));

  return (
    <>
      <Title> Shops </Title>

      <View alignItems="center" justifyContent="space-around">
        {filteredList}
      </View>
    </>
  );
};

export default ShopList;
