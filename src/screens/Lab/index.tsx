import React, { FC } from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../../constans/Colors";
import Header from "../../components/Header"

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },    
  Img: {
    position: "absolute",
    bottom: hp("5%"), 
    height: hp("55%"),
    width: wp("100%"),
  },
});

interface ILabProps {}

const Lab: FC<ILabProps> = (props) => {

  return (
    <View style={styles.Container}>
      <Header></Header>
      <Image
        style={styles.Img}
        source={require("../../assets/pot.png")}
      ></Image>
     
    </View>
  );
};

export default Lab;
