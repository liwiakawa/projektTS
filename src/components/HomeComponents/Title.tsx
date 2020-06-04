import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Octicons } from "react-native-vector-icons";

import Colors from "../../constans/Colors";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  BulbTitle: {
    color: Colors.white,
    position: "absolute",
    marginTop: hp("30%"),
    fontSize: hp("3%"),
    textAlign: "center",
    width: wp("84%"),
    left: wp("8%"),
    fontWeight: "bold",
  },
  LightBulbBox: {
    backgroundColor: Colors.tertiary,
    borderRadius: hp("100%"),
    position: "absolute",
    width: wp("20%"),
    height: wp("20%"),
    top: hp("15%"),
    left: wp("40%"),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  LightBulbIcon: {
    color: Colors.white,
    fontSize: hp("8%"),
    textAlign: "center",
    top: "20%",
  },
});

const Title: FC = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.LightBulbBox}>
        <Octicons name="light-bulb" style={styles.LightBulbIcon} />
      </View>
      <Text style={styles.BulbTitle}>
        Zostań specjalistą od pielęgnacji domowej. Jak dbać o skórę w tym
        trudnym czasie?
      </Text>
    </View>
  );
};

export default Title;
