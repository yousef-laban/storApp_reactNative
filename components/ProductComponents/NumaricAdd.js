import NumericInput from "react-native-numeric-input";
import React from "react";
import { NumaricBox, AddButton } from "../../styles";
import { StyleSheet, Text, View } from "react-native";

const NumaricAdd = ({ handelAdd, quantity, setQuantity }) => {
  return (
    <NumaricBox style={styles.NumaricBox}>
      <NumericInput
        padding={100}
        totalWidth={100}
        totalHeight={25}
        rounded
        minValue={0}
        value={quantity}
        onChange={setQuantity}
      />
      <Text
        onPress={quantity === 0 ? console.log("") : handelAdd}
        style={styles.Text}
      >
        add
      </Text>
    </NumaricBox>
  );
};

export default NumaricAdd;

const styles = StyleSheet.create({
  NumaricBox: {
    marginTop: 2,
  },
  Text: {
    backgroundColor: "#2F5D62",
    color: "#DFEEEA",
    textAlign: "center",
    width: 50,
    marginLeft: 10,
    padding: 5,
    borderRadius: 5,
    height: 25,
    overflow: "hidden",
  },
});
