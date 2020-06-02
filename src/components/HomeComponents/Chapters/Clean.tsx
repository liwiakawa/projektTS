import React, { FC } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "react-native-vector-icons";

import Colors from "../../../constans/Colors";

const styles = StyleSheet.create({
  ChapterTitleContainer: {
    backgroundColor: Colors.tertiary,
    position: "absolute",
    height: hp("5%"),
    width: wp("55%"),
    marginTop: hp("45%"),
    borderTopRightRadius: hp("3%"),
    borderBottomRightRadius: hp("3%"),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  ChapterTitle: {
    color: Colors.white,
    fontSize: hp("4%"),
    left: wp("2%"),
  },
  ChapterContainer: {
    backgroundColor: "#ffffff30",
    height: hp("39%"),
    width: wp("100%"),
    marginTop: hp("50%"),
  },
  LeftArrowContainer: {
    marginLeft: 0,
    width: wp("8%"),
  },
  RightArrowContainer: {
    left: 0,
    width: wp("8%"),
  },
  LeftArrow: {
    color: "#00000060",
    fontSize: hp("5%"),
    top: "40%",
  },
  RightArrow: {
    color: "#00000060",
    fontSize: hp("5%"),
    top: "40%",
  },
  Box: {
    backgroundColor: Colors.tertiary,
    borderRadius: hp("3%"),
    height: hp("33%"),
    width: wp("84%"),
    marginLeft: 0,
    top: wp("5%"),
    marginRight: 0,
  },
  Img: {
    height: hp("30%"),
    width: wp("45%"),
    left: wp("3%"),
    top: hp("1.5%"),
    borderTopLeftRadius: hp("3%"),
    borderBottomLeftRadius: hp("3%"),
  },
  BoxTitle: {
    color: Colors.white,
    right: wp("2%"),
    top: hp("1.5%"),
    width: wp("32%"),
    position: "absolute",
    overflow: "hidden",
    textAlign: "justify",
    fontSize: hp("3%"),
  },
  BoxTxt: {
    color: Colors.white,
    right: wp("2%"),
    top: hp("9%"),
    width: wp("32%"),
    position: "absolute",
    overflow: "hidden",
  },
  BoxTimeTxt: {
    color: Colors.white,
    right: wp("2%"),
    top: hp("6%"),
    width: wp("32%"),
    position: "absolute",
    overflow: "hidden",
    textAlign: "justify",
  },
  Button: {
    backgroundColor: "#797e78",
    right: wp("2%"),
    bottom: hp("2%"),
    width: wp("32%"),
    height: hp("4%"),
    position: "absolute",
    overflow: "hidden",
    borderRadius: hp("3%"),
  },
  ButtonTxt: {
    textAlign: "center",
    top: hp("0.25%"),
    fontSize: hp("2.5%"),
    color: Colors.white,
  },
});


const Clean: FC = () => {
  return (
    <View>
      <View style={styles.ChapterTitleContainer}>
        <Text style={styles.ChapterTitle}>Oczyszczanie</Text>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.ChapterContainer}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.RightArrowContainer}></View>
        <View style={styles.Box}>
          <Image
            style={styles.Img}
            source={require("../../../assets/1.png")}
          ></Image>
          <Text style={styles.BoxTitle}>Wstęp</Text>
          <Text style={styles.BoxTimeTxt}>3-5 min czytania</Text>
          <Text style={styles.BoxTxt}>
            Wcho­dzisz do dro­ge­rii, wi­dzisz pół­ki ugi­na­ją­ce się od mydeł,
            żeli, toników. Czym się kierować?
          </Text>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonTxt}>Czytaj</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RightArrowContainer}>
          <MaterialIcons
            style={styles.LeftArrow}
            name="keyboard-arrow-right"
          ></MaterialIcons>
        </View>
        <View style={styles.LeftArrowContainer}>
          <MaterialIcons
            style={styles.LeftArrow}
            name="keyboard-arrow-left"
          ></MaterialIcons>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.Img}
            source={require("../../../assets/2.png")}
          ></Image>
          <Text style={styles.BoxTitle}>Wstęp</Text>
          <Text style={styles.BoxTimeTxt}>3-5 min czytania</Text>
          <Text style={styles.BoxTxt}>
            Wcho­dzisz do dro­ge­rii, wi­dzisz pół­ki ugi­na­ją­ce się od mydeł,
            żeli, toników. Czym się kierować?
          </Text>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonTxt}>Czytaj</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RightArrowContainer}>
          <MaterialIcons
            style={styles.RightArrow}
            name="keyboard-arrow-right"
          ></MaterialIcons>
        </View>
        <View style={styles.LeftArrowContainer}>
          <MaterialIcons
            style={styles.LeftArrow}
            name="keyboard-arrow-left"
          ></MaterialIcons>
        </View>
        <View style={styles.Box}>
          <Image
            style={styles.Img}
            source={require("../../../assets/3.png")}
          ></Image>
          <Text style={styles.BoxTitle}>Wstęp</Text>
          <Text style={styles.BoxTimeTxt}>3-5 min czytania</Text>
          <Text style={styles.BoxTxt}>
            Wcho­dzisz do dro­ge­rii, wi­dzisz pół­ki ugi­na­ją­ce się od mydeł,
            żeli, toników. Czym się kierować?
          </Text>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonTxt}>Czytaj</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RightArrowContainer}></View>
      </ScrollView>
    </View>
  );
};

export default Clean;
