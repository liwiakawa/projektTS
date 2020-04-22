import React, { FC } from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    resizeMode: "repeat",
    width: "100%",
  },
});

interface IAccountProps {}

const Account: FC<IAccountProps> = (props) => {
  const navigation = useNavigation();

  return (
    <Image
      style={styles.Background}
      source={require("../../assets/background_dot.png")}
    ></Image>
  );
};

export default Account;
