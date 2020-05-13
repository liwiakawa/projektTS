import React, { FC, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "react-native-vector-icons";

import { IState } from "../reducers";
import { IRecipeListReducer } from "../reducers/recipeListReducer";
import { IRecipe, IIngredient } from "../entities/recipe";
import { deleteElemRecipeList, searchElemRecipeList } from "../actions/recipeListActions";
import Header from "../components/Header";
import Colors from "../constans/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  SearchIcon: {
    fontSize: hp("4%"),
    color: Colors.primary,
    left: wp("3%"),
    top: hp("0.75%"),
  },
  SearchIconContainer: {
    backgroundColor: "#e7e9e6",
    position: "absolute",
    height: hp("6%"),
    width: wp("13%"),
    left: wp("5%"),
    bottom: hp("1%"),
    textAlign: "center",
    borderRadius: hp("100%"),
  },
  SearchBarContainer: {
    height: hp("8%"),
    width: wp("100%"),
    top: 0,
    backgroundColor: Colors.white,
    borderBottomColor: Colors.tertiary,
    borderBottomWidth: wp("0.25%"),
  },
  SearchBar: {
    textAlign: "center",
    color: Colors.primary,
    backgroundColor: "#e7e9e6",
    height: hp("6%"),
    width: wp("75%"),
    left: wp("20%"),
    top: hp("1%"),
    borderRadius: wp("100%")
  },
  AddBtnBox: {
    right: wp("2%"),
    position: "absolute",
    top: hp("83%"),
    width: wp("15%"),
    height: wp("15%"),
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderRadius: 400 / 2,
    borderWidth: wp("0.25%"),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  AddBtnIcon: {
    top: wp("1%"),
    fontSize: wp("12%"),
    textAlign: "center",
    color: Colors.primary,
  },
  DeleteBtnBox: {
    position: "absolute",
    height: hp("5%"),
    width: wp("9%"),
    borderBottomLeftRadius: wp("5%"),
    backgroundColor: Colors.white,
    right: 0,
  },
  DeleteBtnIcon: {
    fontSize: hp("4%"),
    color: Colors.tertiary,
    textAlign: "right",
    right: "10%",
  },
  SingleElList: {
    height: hp("75%"),
    width: wp("90%"),
    marginTop: hp("3%"),
    left: hp("2.5%"),
    textAlign: "center",
    backgroundColor: "#b1b8b050",
  },
  Titletxt: {
    fontSize: hp("4%"),
    left: wp("3%"),
    color: Colors.white,
    marginTop: hp("0%"),
  },
  Titlebox: {
    backgroundColor: Colors.primary,
    height: hp("5.5%"),
    width: wp("80%"),
    borderTopRightRadius: hp("3%"),
    borderBottomRightRadius: hp("3%"),
    marginTop: hp("5%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 20,
  },
  SkinTypeBox: {
    backgroundColor: Colors.primary,
    height: hp("4%"),
    width: wp("50%"),
    borderTopRightRadius: hp("3%"),
    borderBottomRightRadius: hp("3%"),
    marginTop: hp("2%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 20,
  },
  SkinTypetxt: {
    fontSize: hp("3%"),
    marginTop: hp("0%"),
    left: wp("3%"),
    color: Colors.white,
  },
  IngredientsBox: {
    height: hp("5%"),
    width: wp("70%"),
  },
  Ingredientstxt: {
    fontSize: hp("2.5%"),
    left: wp("5%"),
    color: "#007a77",
  },
  Descriptiontxt: {
    fontSize: hp("2.5%"),
    textAlign: "justify",
    marginTop: hp("2%"),
    marginLeft: wp("5%"),
    width: wp("78%"),
    color: "#007a77",
  },
});

type SearchNewElemRecipeList = ReturnType<typeof searchElemRecipeList>;
type DelNewElemRecipeList = ReturnType<typeof deleteElemRecipeList>;

const RecipeList: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState<string>("");
  const recipeListState = useSelector<IState, IRecipeListReducer>(
    (state) => state.recipeList
  );

  const nameValueChange = (txt) => {
    setNameInput(txt.nativeEvent.text);
  };

  const goToForm = () => {
    props.switchView(true);
  };

  const searchRecipe = (cokolwiek: string) => {
    console.log(nameInput)
    dispatch<SearchNewElemRecipeList>(searchElemRecipeList(cokolwiek));
  };

  const deleteRecipe = (id: number) => {
    dispatch<DelNewElemRecipeList>(deleteElemRecipeList(id));
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.SearchBarContainer}>
      
        <TextInput
          style={styles.SearchBar}
          value={nameInput}
          onChange={nameValueChange}
          placeholder="Znajdź przepis..."
          placeholderTextColor={Colors.primary}
        ></TextInput>
          <TouchableOpacity style={styles.SearchIconContainer} onPress={() => {searchRecipe(nameInput)}}>
          <AntDesign style={styles.SearchIcon} name="search1"></AntDesign>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {recipeListState.recipeList.map((elem: IRecipe, index: number) => (
          <View style={styles.SingleElList} key={index}>
            <View style={styles.Titlebox}>
              <Text style={styles.Titletxt}>{elem.name}</Text>
            </View>
            <View style={styles.SkinTypeBox}>
              <Text style={styles.SkinTypetxt}>{elem.skinType}</Text>
            </View>
            <View style={styles.IngredientsBox}>
              <Text style={styles.Ingredientstxt}>{elem.ingredients}</Text>
            </View>
            <Text style={styles.Ingredientstxt}> {elem.fakeIng}</Text>
            <Text style={styles.Descriptiontxt}>{elem.description}</Text>
            <TouchableOpacity
              style={styles.DeleteBtnBox}
              onPress={() => deleteRecipe(elem.id)}
            >
              <FontAwesome style={styles.DeleteBtnIcon} name="times" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.AddBtnBox}>
        <MaterialCommunityIcons
          name="leaf"
          style={styles.AddBtnIcon}
          onPress={goToForm}
        />
      </View>
    </View>
  );
};

export default RecipeList;
