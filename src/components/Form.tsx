import React, { FC, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  FontAwesome,MaterialIcons
} from "react-native-vector-icons";

import { theme } from "../core/theme";
import { useDispatch } from "react-redux";
import { setNewElemTodoList, setNewIngredients } from "../actions/todoListActions";
import { ISingleElementList} from "../entities/todoSingleEl";



const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.light,
  },
  CustomTextInput: {
    borderColor: theme.colors.primary,
    textAlign: "center",
    marginTop: hp("7%"),
    borderRadius: wp("10%"),
    height: hp("6%"),
    width: wp("90%"),
    left: hp("2.5%"),
    borderWidth: hp("0.25%"),
    fontSize: hp("2.5%"),
  },
  CustomTextInputDescription: {
    marginTop: hp("3%"),
    borderRadius: wp("10%"),
    height: hp("20%"),
    width: wp("90%"),
    left: hp("2.5%"),
    borderColor: theme.colors.primary,
    borderWidth: hp("0.25%"),
    textAlign: "center",
    fontSize: hp("2.5%"),
  },
  CustomTextInputIngredients: {
    borderColor: theme.colors.primary,
    textAlign: "center",
    marginTop: hp("3%"),
    borderRadius: wp("10%"),
    height: hp("6%"),
    width: wp("90%"),
    left: hp("2.5%"),
    borderWidth: hp("0.25%"),
    fontSize: hp("2.5%"),
  },
  AddBtn: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.light,
    textAlign: "center",
    marginTop: hp("7%"),
    borderRadius: wp("10%"),
    height: hp("6%"),
    width: wp("90%"),
    left: hp("2.5%"),
    borderWidth: hp("0.25%"),
  },
  TextAddBtn: {
    fontSize: hp("2.5%"),
    textAlign: "center",
    marginTop: hp("1%"),
    color: theme.colors.light,
  },
  AddIngBtnIcon: {
    fontSize: hp("4%"),
    textAlign: "center",
    marginTop: hp("3%"),
    left: wp("40%"),
    color: theme.colors.primary,
  },
  BackBtnIcon: {
    fontSize: hp("4%"),
    left: wp("3%"),
    bottom: hp('1%'),
    color: theme.colors.primary,
  },
});

type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>;

const Form: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState<string>("");
  const [descInput, setDescInput] = useState<string>("");
  const [ingInput, setIngInput] = useState<string>("");


  const nameValueChange = (txt) => {
    setNameInput(txt.nativeEvent.text);
  };

  const descriptionValueChange = (txt) => {
    setDescInput(txt.nativeEvent.text);
  };

  const ingredientsValueChange = (txt) => {
    setIngInput(txt.nativeEvent.text);
  };

  // let Ingredients = []

  // const saveIng = (jp:string) =>
  // {
  //   Ingredients.push(jp)
  //   console.log(jp)
  // }

  const backBtn = () => {
    props.switchView(false);
  };

  // const saveIng = () => {
  //   dispatch<SetNewIngredients>(
  //     setNewIngredients({
  //       name: ingInput,
  //     } as Ingredient)
  //   );
  // };

  const saveData = () => {
    dispatch<SetNewElemTodoList>(
      setNewElemTodoList({
        name: nameInput,
        description: descInput,
        ingredients: Ingredients
      } as ISingleElementList)
    );
    props.switchView(false);
  };



  return (
    <View style={styles.Container}>
      <ScrollView>
        <TextInput
          style={styles.CustomTextInput}
          value={nameInput}
          onChange={nameValueChange}
          placeholder="Title"
          placeholderTextColor={theme.colors.primary}
        ></TextInput>
        <TextInput
          style={styles.CustomTextInputIngredients}
          value={ingInput}
          // onChange={ingredientsValueChange}
          placeholder="Ingredients"
          placeholderTextColor={theme.colors.primary}
        ></TextInput>
        <TouchableOpacity  onPress={()=>{saveIng(ingInput)}}>
          <FontAwesome style={styles.AddIngBtnIcon} name="plus-circle" />
        </TouchableOpacity>
        <TextInput
          style={styles.CustomTextInputDescription}
          value={descInput}
          onChange={descriptionValueChange}
          placeholder="Description"
          placeholderTextColor={theme.colors.primary}
        ></TextInput>
        <TouchableOpacity style={styles.AddBtn} onPress={saveData}>
          <Text style={styles.TextAddBtn}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity onPress={backBtn}>
          <MaterialIcons style={styles.BackBtnIcon} name="arrow-back" />
        </TouchableOpacity>
    </View>
  );
};


export default Form;
