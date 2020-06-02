import React, { FC } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, Octicons } from "react-native-vector-icons";

import { IState } from "../reducers";
import { IRecipeListReducer } from "../reducers/recipeListReducer";
import { db } from "../constans/Config";
import { loadingRecipeList } from "../actions/recipeListActions";
import Colors from "../constans/Colors";
import { IIngredient } from "../entities/recipe";

const styles = StyleSheet.create({
  BottomNavigation: {
    position: "absolute",
    top: hp("93%"),
    width: wp("100%"),
    height: wp("13%"),
    backgroundColor: Colors.primary,
  },
  RecipeBtn: {
    left: wp("42.5%"),
    position: "absolute",
    bottom: hp("2%"),
    width: wp("15%"),
    height: wp("15%"),
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderRadius: 400 / 2,
    borderWidth: wp("0.5%"),
  },
  RecipeIcon: {
    top: wp("1%"),
    fontSize: wp("12%"),
    textAlign: "center",
    color: Colors.primary,
  },
  HomeBtn: {
    backgroundColor: Colors.primary,
    width: wp("50%"),
    height: wp("13%"),
    position: "absolute",
  },
  HomeIcon: {
    left: wp("20%"),
    top: wp("3%"),
    fontSize: wp("7%"),
    position: "absolute",
    color: Colors.white,
  },
  AccountBtn: {
    backgroundColor: Colors.primary,
    width: wp("50%"),
    height: wp("13%"),
    position: "absolute",
    right: 0,
  },
  AccountIcon: {
    position: "absolute",
    top: wp("3%"),
    fontSize: wp("7%"),
    right: wp("20%"),
    color: Colors.white,
  },
});

type LoadingRecipeList = ReturnType<typeof loadingRecipeList>;

interface ICustomNavigationProps {}
const CustomNavigation: FC<ICustomNavigationProps> = (props) => {
  const nav = useNavigation();
  const dispatch = useDispatch();

  const recipeListState = useSelector<IState, IRecipeListReducer>(
    (state) => state.recipeList
  );

  const ref = db.ref("recipes");

  const Loading = () => {
    ref
    .once("value", (snapshot) => {
      const recipes = snapshot.val() || [];
      const recipesAmount = snapshot.numChildren();
      const keys = Object.keys(recipes);
      keys.forEach((key) => {
        if (recipeListState.recipeList.length !== recipesAmount) {
          recipeListState.recipeList.push({
            id: recipes[key].id,
            name: recipes[key].name,
            ingredients: recipes[key].ingredients.map((elem: IIngredient, index:number)=>(
            <Text key={index}><MaterialCommunityIcons
            name="leaf"
            />{elem.name}{"\n"}</Text>)
            ),
            description: recipes[key].description,
            skinType: recipes[key].skinType,
            load: "Entry",
          });
        }
        // recipes[key].ingredients.map((abc, index:number)=>{
        //       <Text key={index}>{abc.name}</Text>
        //       })
      });
    })
      .then(Navigatione);
  };

  const Navigatione = () => {
    const entry = "Entry";
    dispatch<LoadingRecipeList>(loadingRecipeList(entry));
    nav.navigate("RecipeListScreen");
  };

  const Connect = () => {
    Loading();
  };

  const goToHome = () => {
    nav.navigate("Home");
  };

  const goToAccount = () => {
    nav.navigate("Account");
  };

  return (
    <View style={styles.BottomNavigation}>
      <TouchableOpacity style={styles.HomeBtn} onPress={goToHome}>
        <Octicons name="light-bulb" style={styles.HomeIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.AccountBtn} onPress={goToAccount}>
        <MaterialCommunityIcons name="account" style={styles.AccountIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.RecipeBtn}>
        <MaterialCommunityIcons
          name="leaf"
          style={styles.RecipeIcon}
          onPress={Connect}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomNavigation;


// db.ref("recipes/"+key+"/ingredients").once("value", (snapshot) => {
//   const recipess = snapshot.val() || [];
//   const recipesAmountt = snapshot.numChildren()
//   const keyss = Object.keys(recipess);
// keyss.map