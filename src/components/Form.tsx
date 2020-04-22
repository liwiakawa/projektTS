import React, { FC, useState } from "react";
import styled from "styled-components";
import { TextInput, Button, View, StyleSheet, Image } from "react-native";

import { useDispatch } from "react-redux";
import { setNewElemTodoList } from "../actions/todoListActions";
import { ISingleElementList } from "../entities/todoSingleEl";

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
  CustomTextInput: {
    marginTop: "15%",
    borderRadius: 20,
    width: "90%",
    height: 40,
    left: "5%",
    borderColor: "#B85678",
    borderWidth: 2,
    textAlign: "center",
  },
  CustomTextInputDescription: {
    marginTop: "5%",
    borderRadius: 20,
    width: "90%",
    height: "60%",
    left: "5%",
    borderColor: "#B85678",
    borderWidth: 2,
    textAlign: "center",
  },
  ButtonBox: {
    backgroundColor: "#5ebf9d",
    marginTop: "10%",
    borderRadius: 20,
    width: "90%",
    height: 40,
    left: "5%",
  },
  UploadImg: {},
});

type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>;

const Form: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState<string>("");
  const [descInput, setDescInput] = useState<string>("");

  const nameValueChange = (txt) => {
    setNameInput(txt.nativeEvent.text);
  };

  const descriptionValueChange = (txt) => {
    setDescInput(txt.nativeEvent.text);
  };

  const saveData = () => {
    dispatch<SetNewElemTodoList>(
      setNewElemTodoList({
        name: nameInput,
        description: descInput,
      } as ISingleElementList)
    );
    props.switchView(false);
  };

  return (
    <View style={styles.Container}>
                    <Image
        style={styles.Background}
        source={require("../assets/background_dot.png")}
      ></Image>
      <TextInput
        style={styles.CustomTextInput}
        value={nameInput}
        onChange={nameValueChange}
        placeholder="Title"
        placeholderTextColor="#000"
      ></TextInput>
      <TextInput
        style={styles.CustomTextInputDescription}
        value={descInput}
        onChange={descriptionValueChange}
        placeholder="Description"
        placeholderTextColor="#000"
      ></TextInput>
      <View style={styles.ButtonBox}>
        <Button title="Add new recipe" onPress={saveData} />
      </View>
    </View>
  );
};

export default Form;
