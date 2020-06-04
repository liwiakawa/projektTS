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
import CustomNavigation from "../../navigation/CustomNavigation";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  UserImg: {
    height: hp("50%"),
    width: wp("50%"),
    marginTop: hp("7%"),
    left: wp("25%"),
    borderRadius: hp("20%"),
  },
  Title: {
    color: Colors.secondary,
    textAlign: "center",
    marginTop: hp("1%"),
    fontWeight: "bold",
    fontSize: hp("4%"),
  },
  Button: {
    backgroundColor: Colors.white,
    width: wp("50%"),
    height: hp("7%"),
    left: wp("25%"),
    marginTop: hp("10%"),
    borderRadius: wp("25%"),
  },
});

interface IAccountProps {}

const Account: FC<IAccountProps> = (props) => {
  const nav = useNavigation();

  const goToLogIn = () => {
    nav.navigate("LogIn");
  };

  return (
    <View style={styles.Container}>
        <Header></Header>
        <Image
          style={styles.UserImg}
          source={require("../../assets/FirstUser.png")}
        ></Image>
        <TouchableOpacity style={styles.Button} onPress={goToLogIn}>
          <Text style={styles.Title}>LogOut</Text>
        </TouchableOpacity>
      <CustomNavigation />
    </View>
  );
};

export default Account;
