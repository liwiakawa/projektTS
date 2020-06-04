import React, { FC } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import Header from "../../components/Header";
import Clean from "../../components/HomeComponents/Chapters/Clean";
import Tonic from "../../components/HomeComponents/Chapters/Tonic";
import Care from "../../components/HomeComponents/Chapters/Care";
import Materials from "../../components/HomeComponents/Chapters/Materials";
import Routin from "../../components/HomeComponents/Chapters/Routin";
import Mits from "../../components/HomeComponents/Chapters/Mits";
import Title from "../../components/HomeComponents/Title";
import CustomNavigation from "../../navigation/CustomNavigation";

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
    <View style={styles.Container}>
      <ScrollView>
        <Header></Header>
        <Image
          style={styles.Background}
          source={require("../../assets/forest.png")}
        ></Image>
        <Title />
        <Clean />
        <Tonic />
        <Care />
        <Materials />
        <Routin />
        <Mits />
      </ScrollView>
      <CustomNavigation />
    </View>
  );
};

export default Home;
