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
  Container: {
    flex: 1,
  },
  LeftArrowBox: {
    marginLeft: 0,
    width: wp("8%"),
  },
  RightArrowBox: {
    left: 0,
    width: wp("8%"),
  },
  LeftArrowIcon: {
    color: "#00000060",
    fontSize: hp("5%"),
    top: "40%",
  },
  RightArrowIcon: {
    color: "#00000060",
    fontSize: hp("5%"),
    top: "40%",
  },
  NextChapterTitleBox: {
    backgroundColor: Colors.tertiary,
    height: hp("5%"),
    width: wp("55%"),
    borderTopRightRadius: hp("3%"),
    borderBottomRightRadius: hp("3%"),
    marginTop: hp("4%"),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  NextChapterTitle: {
    color: Colors.white,
    fontSize: hp("4%"),
    left: wp("2%"),
  },
  NextChapterContainer: {
    backgroundColor: "#ffffff30",
    height: hp("39%"),
    width: wp("100%"),
    marginTop: hp("0%"),
  },
  Tip: {
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
  TipTitleTxt: {
    color: Colors.white,
    right: wp("2%"),
    top: hp("1.5%"),
    width: wp("32%"),
    position: "absolute",
    overflow: "hidden",
    textAlign: "justify",
    fontSize: hp("3%"),
  },
  TipTxt: {
    color: Colors.white,
    right: wp("2%"),
    top: hp("9%"),
    width: wp("32%"),
    position: "absolute",
    overflow: "hidden",
    textAlign: "justify",
  },
  TipTimeTxt: {
    color: Colors.white,
    right: wp("2%"),
    top: hp("6%"),
    width: wp("32%"),
    position: "absolute",
    overflow: "hidden",
    textAlign: "justify",
  },
  TipButton: {
    backgroundColor: "#797e78",
    right: wp("2%"),
    bottom: hp("2%"),
    width: wp("32%"),
    height: hp("4%"),
    position: "absolute",
    overflow: "hidden",
    borderRadius: hp("3%"),
  },
  TipButtonTxt: {
    textAlign: "center",
    top: hp("0.25%"),
    fontSize: hp("2.5%"),
    color: Colors.white,
  },
});

interface ITonicProps {}

const Tonic: FC<ITonicProps> = (props) => {
  return (
    <View style={styles.Container}>
      <View style={styles.NextChapterTitleBox}>
        <Text style={styles.NextChapterTitle}>Tonizowanie</Text>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.NextChapterContainer}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.RightArrowBox}></View>
        <View style={styles.Tip}>
          <Image
            style={styles.Img}
            source={require("../../../assets/4.png")}
          ></Image>
          <Text style={styles.TipTitleTxt}>Wstęp</Text>
          <Text style={styles.TipTimeTxt}>3-5 min czytania</Text>
          <Text style={styles.TipTxt}>
            Wcho­dzisz do dro­ge­rii, wi­dzisz pół­ki ugi­na­ją­ce się od mydeł,
            żeli i toników: co wy­brać, czym się kie­ro­wać?
          </Text>
          <TouchableOpacity style={styles.TipButton}>
            <Text style={styles.TipButtonTxt}>Czytaj</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.RightArrowBox}>
          <MaterialIcons
            style={styles.RightArrowIcon}
            name="keyboard-arrow-right"
          ></MaterialIcons>
        </View>
        <View style={styles.LeftArrowBox}>
          <MaterialIcons
            style={styles.LeftArrowIcon}
            name="keyboard-arrow-left"
          ></MaterialIcons>
        </View>

        <View style={styles.Tip}>
          <Image
            style={styles.Img}
            source={require("../../../assets/5.png")}
          ></Image>
          <Text style={styles.TipTitleTxt}>Wstęp</Text>
          <Text style={styles.TipTimeTxt}>3-5 min czytania</Text>
          <Text style={styles.TipTxt}>
            Wcho­dzisz do dro­ge­rii, wi­dzisz pół­ki ugi­na­ją­ce się od mydeł,
            żeli i toników: co wy­brać, czym się kie­ro­wać?
          </Text>
          <TouchableOpacity style={styles.TipButton}>
            <Text style={styles.TipButtonTxt}>Czytaj</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.RightArrowBox}>
          <MaterialIcons
            style={styles.RightArrowIcon}
            name="keyboard-arrow-right"
          ></MaterialIcons>
        </View>
        <View style={styles.LeftArrowBox}>
          <MaterialIcons
            style={styles.LeftArrowIcon}
            name="keyboard-arrow-left"
          ></MaterialIcons>
        </View>

        <View style={styles.Tip}>
          <Image
            style={styles.Img}
            source={require("../../../assets/6.png")}
          ></Image>
          <Text style={styles.TipTitleTxt}>Wstęp</Text>
          <Text style={styles.TipTimeTxt}>3-5 min czytania</Text>
          <Text style={styles.TipTxt}>
            Wcho­dzisz do dro­ge­rii, wi­dzisz pół­ki ugi­na­ją­ce się od mydeł,
            żeli i toników: co wy­brać, czym się kie­ro­wać?
          </Text>
          <TouchableOpacity style={styles.TipButton}>
            <Text style={styles.TipButtonTxt}>Czytaj</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RightArrowBox}></View>
      </ScrollView>
    </View>
  );
};

export default Tonic;
