import React from "react";
import { Button } from "react-native";
import { justifyContent } from "styled-system";

import { TopStyling, Title, ImageBackground } from "../styles";
import { SHOP_LIST } from "./Navigation/types";

const Home = ({ navigation }) => {
  return (
    <>
      <TopStyling>
        <Title>Cloths Shop</Title>
      </TopStyling>
      <Button
        onPress={() => navigation.navigate(SHOP_LIST)}
        title="Check Our Shops"
        color="#dfeeea"
      />

      <ImageBackground
        source={{
          uri: "https://static.wixstatic.com/media/8dacad_66c823ce2b6c40e1a310af26f3263f5b~mv2.png/v1/fill/w_422,h_414,al_c,lg_1,q_85/logo%20master%20final%20small.webp",
        }}
      />
    </>
  );
};

export default Home;
