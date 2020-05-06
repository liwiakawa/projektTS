import React, { FC } from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { theme } from "../../core/theme";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    color: theme.colors.light,
  },
  Img: {
    height: hp("30%"),
    width: wp("45%"),
    left: wp("3%"),
    top: hp("1.5%"),
    borderTopLeftRadius: hp("3%"),
    borderBottomLeftRadius: hp("3%"),
  },
  Txt: {
    color: theme.colors.light,
    right: wp("2%"),
    top: hp("1.5%"),
    width: wp("38%"),
    position: "absolute",
    overflow: "hidden",
    textAlign: "justify",
  },
  TipView: {
    backgroundColor: theme.colors.primary,
    borderRadius: hp("3%"),
    height: hp("33%"),
    width: wp("90%"),
    marginTop: hp("4%"),
    left: wp("5%"),
  },
});

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.Container}>
      <View style={styles.TipView}>
        <Image
          style={styles.Img}
          source={require("../../assets/spa.png")}
        ></Image>
        <Text style={styles.Txt}>
          Zastanawialiście się kiedyś, co zrobić, by mieć ładną cerę? Albo, w
          jaki sposób skutecznie pozbyć się niedoskonałości? W tej książce
          znajdziecie odpowiedzi na te oraz wiele więcej pytań.
        </Text>
      </View>
      <View style={styles.TipView}>
        <Image
          style={styles.Img}
          source={require("../../assets/scrub.png")}
        ></Image>
        <Text style={styles.Txt}>
          Okazuje się, że każdy może mieć ładną, zdrową i pełną blasku skórę.
          Nie tylko szczęściarze z dobrymi genami. Poza tym nigdy też nie jest
          za późno na zmianę dotychczasowych nawyków pielęgnacyjnych.
        </Text>
      </View>
      <View style={styles.TipView}>
        <Image
          style={styles.Img}
          source={require("../../assets/mask.png")}
        ></Image>
        <Text style={styles.Txt}>
          Dzięki tej książce poznacie potrzeby swojego typu skóry i dobierzecie
          do nich odpowiednią dietę, kosmetyki i zabiegi. Doświadczona doktor
          dermatolog Anjali Mahto stworzyła biblię kompleksowej pielęgnacji
          skóry dla każdego.
        </Text>
      </View>
      <View style={styles.TipView}>
        <Image
          style={styles.Img}
          source={require("../../assets/fruits.png")}
        ></Image>
        <Text style={styles.Txt}>
          Dowiecie się z niej jak skutecznie wyleczyć trądzik w każdym wieku
          oraz co w waszej diecie może go nasilać. Poza tym autorka podpowiada,
          czym kierować się przy wyborze kremu, by uniknąć rozczarowań i nie
          tracić pieniędzy.
        </Text>
      </View>
      <View style={styles.TipView}>
        <Image
          style={styles.Img}
          source={require("../../assets/pills.png")}
        ></Image>
        <Text style={styles.Txt}>
          Mahto zdradza również, co dobrego mogą dać skórze probiotyki zawarte w
          kosmetykach. Ponadto nauczycie się rozpoznawać, czym różni się serum
          od esencji i który z tych produktów jest lepszy dla was.
        </Text>
      </View>
      <View style={styles.TipView}>
        <Image
          style={styles.Img}
          source={require("../../assets/routin.png")}
        ></Image>
        <Text style={styles.Txt}>
          A poza tym dowiecie się także, które produkty spożywcze przyspieszają
          starzenie się skóry i przyczyniają się do jej wysuszania.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;
