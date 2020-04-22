import React, { FC } from "react";
import {
  Button,
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Background: {
    height: "100%",
    resizeMode: "repeat",
    width: "100%",
    position: "absolute",
  },
  Img1: {
    width: "50%",
    height: "100%",
    left: "3%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  Img2: {
    width: "50%",
    height: "100%",
    left: "3%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  Img3: {
    width: "50%",
    height: "96%",
    left: "3%",
    borderTopLeftRadius: 10,
  },
  Txt1: {
    color: "#fff",
    right: "3%",
    width: "40%",
    position: "absolute",
    overflow: "hidden",
    textAlign: "justify",
    top: 15,
  },
  Txt2: {
    color: "#fff",
    right: "3%",
    width: "40%",
    position: "absolute",
    overflow: "hidden",
    textAlign: "justify",
    top: 15,
  },
  Txt3: {
    color: "#fff",
    right: "3%",
    width: "40%",
    position: "absolute",
    overflow: "hidden",
    textAlign: "justify",
    top: 15,
  },

  TipView: {
    backgroundColor: "#B85678",
    borderRadius: 20,
    width: "90%",
    height: "30%",
    paddingTop: 5,
    marginTop: "7%",
    left: "5%",
  },
});

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <Image
        style={styles.Background}
        source={require("../../assets/background_dot.png")}
      ></Image>
      <View style={styles.TipView}>
        <Image
          style={styles.Img1}
          source={require("../../assets/spa.png")}
        ></Image>
        <Text style={styles.Txt1}>
          Obec­nie są to naj­bar­dziej roz­po­wszech­nio­ne na ryn­ku
          ko­sme­tycz­nym pro­duk­ty my­ją­ce w po­sta­ci płyn­nej, o
          neu­tral­nym pH.
        </Text>
      </View>
      <View style={styles.TipView}>
        <Image
          style={styles.Img2}
          source={require("../../assets/scrub.png")}
        ></Image>
        <Text style={styles.Txt2}>
          Je­śli je­steś oso­bą pre­fe­ru­ją­cą taki pro­dukt do my­cia,
          wy­bie­raj syn­de­ty do­stęp­ne w ap­te­kach, któ­re nie za­wie­ra­ją
          zbęd­nych, sztucz­nych sub­stan­cji bar­wią­cych.
        </Text>
      </View>
      <View style={styles.TipView}>
        <Image
          style={styles.Img3}
          source={require("../../assets/mask.png")}
        ></Image>
        <Text style={styles.Txt3}>
          Two­im kry­te­rium wy­bo­ru nie po­wi­nien być za­pach ani ko­lor żelu
          my­ją­ce­go, ale jego skład i dzia­ła­nie. Pre­fe­ruj pre­pa­ra­ty bez
          sztucz­nych barw­ni­ków.
        </Text>
      </View>
    </View>
  );
};

export default Home;
