import React, { FC } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import Header from "../../components/Header"
import Clean from "./Chapters/Clean";
import Tonic from "./Chapters/Tonic";
import Care from "./Chapters/Care";
import Materials from "./Chapters/Materials";
import Routin from "./Chapters/Routin";
import Mits from "./Chapters/Mits";
import Title from "./Title"

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Background: {
    resizeMode: "cover",
    position: "absolute",
  },
});

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  return (
    <ScrollView style={styles.Container}>
      <Header></Header>
      <Image
        style={styles.Background}
        source={require("../../assets/forest.png")}
      ></Image>
      <Title></Title>
      <Clean></Clean>
      <Tonic></Tonic>
      <Care></Care>
      <Materials></Materials>
      <Routin></Routin>
      <Mits></Mits>
    </ScrollView>
  );
};

export default Home;
