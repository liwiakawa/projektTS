import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    height: hp("5%"),
    width: wp("100%"),
  },
});

const Header: FC = () => {
  return <View style={styles.container}></View>;
};

export default Header;
