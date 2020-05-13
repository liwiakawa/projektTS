import React, { FC } from "react";
import { Image, Text, StyleSheet, ScrollView } from "react-native";
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
  UserImg: {
    height: hp("50%"),
    width: wp("50%"),
    marginTop: hp("7%"),
    left: wp("25%"),
    borderRadius: hp("20%"),
  },
  UserName: {
    textAlign: "center",
    marginTop: hp("4%"),
    fontWeight: "bold",
    color: Colors.white,
    fontSize: hp("4%"),
  },
  UserDescription: {
    textAlign: "justify",
    width: "80%",
    marginTop: hp("2%"),
    left: wp("10%"),
    fontSize: hp("2.5%"),
    marginBottom: hp("2%"),
  },
});

interface IAccountProps {}

const Account: FC<IAccountProps> = (props) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.Container}>
      <Header></Header>
      <Image
        style={styles.UserImg}
        source={require("../../assets/FirstUser.png")}
      ></Image>
      <Text style={styles.UserName}>Barbara Kwiatkowska</Text>
      <Text style={styles.UserDescription}>
        Barbara Kwiatkowska - biotechnolog, ekspertka w dziedzinie pielęgnacji
        skóry (UMCS w Lublinie, praktyki w University of Miami Cosmetic Center).
        Konsultant w firmach kosmetycznych (Biochemia Urody) oraz
        farmaceutycznych (GloxoSmithKline). Od lat doradza milionom Polek na
        forach internetowych (wizaz.pl i gazeta.pl) oraz w prasie kobiecej
        ("Uroda" i "Wysokie Obcasy").
      </Text>
      <Image
        style={styles.UserImg}
        source={require("../../assets/SecondUser.png")}
      ></Image>
      <Text style={styles.UserName}>Gillbro Johanna</Text>
      <Text style={styles.UserDescription}>
        Johanna Gillbro, doświadczona dermatolożka, podpowiada, jak skutecznie
        dobrać produkty do pielęgnacji twojej skóry, aby osiągnąć najlepsze
        efekty – nie dając się nabrać na reklamowe slogany i nie wydając majątku
        na kolejne maści, kremy i toniki.
      </Text>
      <Image
        style={styles.UserImg}
        source={require("../../assets/ThirdUser.png")}
      ></Image>
      <Text style={styles.UserName}>Grigore Adina</Text>
      <Text style={styles.UserDescription}>
        Adina Grigore – uczy jak dbać o swoją skórę, na jakie produkty
        żywieniowe należy uważać, żeby dłużej cieszyć się piękną skórą i jak
        rozwiązać problemy dermatologiczne nierozwiązywalne dla wielu lekarzy.
        Podczas codziennej pielęgnacji stosujemy średnio ok. 12 produktów
        kosmetycznych. Wierzymy, że w ten sposób zapewnimy skórze zdrowie i
        naturalny wygląd – autorka uczy jak zastąpić szkodliwe produkty
        promowane przez przemysł kosmetyczny naturalnymi (EKO) oraz cieszyć się
        z bycia „saute”. Szczęśliwa skóra to prosty i w 100% naturalny program,
        który oczyszcza, uspokaja i uszczęśliwia skórę.
      </Text>
    </ScrollView>
  );
};

export default Account;
