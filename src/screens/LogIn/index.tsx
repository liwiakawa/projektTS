import React, { FC } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../../constans/Colors";
import Header from "../../components/Header";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  UserImg: {
    height: hp("40%"),
    width: wp("40%"),
    resizeMode: "contain",
    left: wp("30%"),
    top: hp("20%"),
  },
  Title: {
    textAlign: "center",
    marginTop: hp("1%"),
    fontWeight: "bold",
    color: Colors.white,
    fontSize: hp("4%"),
  },
  Button: {
    backgroundColor: Colors.primary,
    width: wp("50%"),
    height: hp("7%"),
    left: wp("25%"),
    marginTop: hp("20%"),
    borderRadius: wp("25%"),
  }
});

interface ILogInProps {}

const LogIn: FC<ILogInProps> = (props) => {
  const nav = useNavigation();

  const goToHome = () => {
    nav.navigate("Home");
  };

  return (
    <View style={styles.Container}>
        <Header></Header>
        <Image
          style={styles.UserImg}
          source={require("../../assets/icon.png")}
        ></Image>
        <TouchableOpacity style={styles.Button} onPress={goToHome}>
          <Text style={styles.Title}>LogIn</Text>
        </TouchableOpacity>
    </View>
  );
};

export default LogIn;