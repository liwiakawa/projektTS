import React, { FC, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome, MaterialCommunityIcons } from "react-native-vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { useDispatch, useSelector } from "react-redux";

import { db } from "../../constans/Config";
import { IState } from "../../reducers";
import { IRecipeListReducer } from "../../reducers/recipeListReducer";
import {
  setNewElemRecipeList,
  setNewIngredients,
} from "../../actions/recipeListActions";
import { IRecipe, IIngredient } from "../../entities/recipe";
import Colors from "../../constans/Colors";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  TextInputTitle: {
    borderColor: Colors.primary,
    textAlign: "center",
    marginTop: hp("7%"),
    height: hp("6%"),
    width: wp("90%"),
    left: hp("2.5%"),
    borderBottomWidth: hp("0.25%"),
    fontSize: hp("2.5%"),
    borderRadius: wp("10%"),
  },
  TextInputDescription: {
    marginTop: hp("3%"),
    height: hp("20%"),
    width: wp("90%"),
    left: hp("2.5%"),
    borderColor: Colors.primary,
    borderBottomWidth: hp("0.25%"),
    textAlign: "center",
    fontSize: hp("2.5%"),
    borderRadius: wp("10%"),
  },
  TextInputIngredients: {
    borderColor: Colors.primary,
    textAlign: "center",
    marginTop: hp("3%"),
    height: hp("6%"),
    width: wp("90%"),
    left: hp("2.5%"),
    borderBottomWidth: hp("0.25%"),
    fontSize: hp("2.5%"),
    borderRadius: wp("10%"),
  },
  AddRecipeBtn: {
    backgroundColor: Colors.primary,
    textAlign: "center",
    marginTop: hp("7%"),
    height: hp("6%"),
    width: wp("90%"),
    left: hp("2.5%"),
  },
  TextAddRecipeBtn: {
    fontSize: hp("2.5%"),
    textAlign: "center",
    marginTop: hp("1.5%"),
    color: Colors.white,
  },
  AddIngIcon: {
    fontSize: wp("11%"),
    textAlign: "center",
    marginTop: 0,
    color: Colors.primary,
    left: 0,
  },
  AddIngBox: {
    top: hp("3%"),
    left: wp("80%"),
    width: hp("8%"),
    height: hp("8%"),
    backgroundColor: Colors.white,
    borderRadius: 400 / 2,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: hp("2.5%"),
    textAlign: "center",
    borderBottomWidth: hp("0.25%"),
    marginTop: hp("3%"),
    left: hp("5%"),
    height: hp("6%"),
    width: wp("82%"),
    borderColor: Colors.primary,
  },
  inputAndroid: {
    fontSize: hp("2.5%"),
    textAlign: "center",
    borderBottomWidth: hp("0.25%"),
    marginTop: hp("3%"),
    left: hp("5%"),
    height: hp("6%"),
    width: wp("82%"),
    borderColor: Colors.primary,
  },
});

const placeholder = {
  label: "Rekomendowane dla...",
  value: null,
};

type SetNewElemRecipeList = ReturnType<typeof setNewElemRecipeList>;
type SetNewIngredients = ReturnType<typeof setNewIngredients>;

const Form: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState<string>("");
  const [descInput, setDescInput] = useState<string>("");
  const [ingInput, setIngInput] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");

  const nameValueChange = (txt) => {
    setNameInput(txt.nativeEvent.text);
  };

  const descriptionValueChange = (txt) => {
    setDescInput(txt.nativeEvent.text);
  };

  const ingredientsValueChange = (txt) => {
    setIngInput(txt.nativeEvent.text);
  };

  const saveIng = () => {
    dispatch<SetNewIngredients>(
      setNewIngredients({
        name: ingInput,
      } as IIngredient)
    );
  };

  const ingStan = useSelector<IState, IRecipeListReducer>(
    (state) => state.recipeList
  );

  let date = Date.now();

  const saveDataToDB = () => {
    db.ref("recipes").push({
      id: date,
      name: nameInput,
      ingredients: ingStan.ingredientList,
      description: descInput,
      skinType: selectedValue,
      load: "Entry",
    });
  };

  const saveData = () => {
    dispatch<SetNewElemRecipeList>(
      setNewElemRecipeList({
        id: date,
        name: nameInput,
        ingredients: ingStan.ingredientList.map(
          (elem: IIngredient, index: number) => (
            <Text key={index}>
              <MaterialCommunityIcons name="leaf" />
              {elem.name}
              {"\n"}
            </Text>
          )
        ),
        description: descInput,
        skinType: selectedValue,
        load: "Entry",
      } as IRecipe)
    );
    saveDataToDB();
    props.switchView(false);
  };

  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.TextInputTitle}
        value={nameInput}
        onChange={nameValueChange}
        placeholder="Tytuł"
        placeholderTextColor={Colors.primary}
        maxLength={20}
      ></TextInput>

      <RNPickerSelect
        style={{
          ...pickerSelectStyles,
          placeholder: {
            color: Colors.primary,
            fontSize: hp("2.5%"),
          },
        }}
        placeholder={placeholder}
        value={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
        items={[
          { label: "cery mieszanej", value: "Cera mieszana" },
          { label: "cery tłustej", value: "Cera tłusta" },
          { label: "cery suchej", value: "Cera sucha" },
          { label: "cery naczynkowej", value: "Cera naczynkowa" },
          { label: "cery wrażliwej", value: "Cera wrażliwa" },
          { label: "cery dojrzałej", value: "Cera dojrzała" },
          { label: "cery trądzikowej", value: "Cera trądzikowa" },
          { label: "cery alergicznej", value: "Cera alergiczna" },
          { label: "cery normalnej", value: "Cera normalna" },
          { label: "każdej cery", value: "Każda cera" },
        ]}
      />

      <TextInput
        style={styles.TextInputIngredients}
        value={ingInput}
        onChange={ingredientsValueChange}
        placeholder="Składniki"
        placeholderTextColor={Colors.primary}
      ></TextInput>

      <TouchableOpacity style={styles.AddIngBox} onPress={saveIng}>
        <FontAwesome style={styles.AddIngIcon} name="plus-circle" />
      </TouchableOpacity>

      <TextInput
        style={styles.TextInputDescription}
        value={descInput}
        onChange={descriptionValueChange}
        placeholder="Przygotowanie"
        placeholderTextColor={Colors.primary}
        multiline={true}
        blurOnSubmit={true}
      ></TextInput>

      <TouchableOpacity style={styles.AddRecipeBtn} onPress={saveData}>
        <Text style={styles.TextAddRecipeBtn}>Dodaj nowy przepis!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
