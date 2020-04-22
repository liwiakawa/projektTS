import React, { FC, useState } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image
} from "react-native";
import { useSelector } from "react-redux";

import { IState } from "../reducers";
import { ITodoListReducer } from "../reducers/todoListReducer";
import { ISingleElementList } from "../entities/todoSingleEl";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Background: {
    height: "100%",
    resizeMode: "repeat",
    width: "100%",
    position: "absolute",
  },
  buttonbox: {
    backgroundColor: "#5ebf9d",
    marginTop: "15%",
    borderRadius: 20,
    width: "90%",
    height: 40,
    left: "5%",
  },
  SingleElList: {
    backgroundColor: "#B85678",
    borderRadius: 20,
    width: "90%",
    height: "30%",
    paddingTop: 5,
    marginTop: "7%",
    left: "5%",
  },
  Titletxt: {
    textAlign: "center",
    fontSize: 20,
  },
  Descriptiontxt: {
    textAlign: "center",
  },
});

const TodoList: FC<{ switchView(formView: boolean) }> = (props) => {
  const todoListState = useSelector<IState, ITodoListReducer>(
    (state) => state.todoList
  );
  const goToForm = () => {
    props.switchView(true);
  };
  return (
    <View style={styles.container}>
            <Image
        style={styles.Background}
        source={require("../assets/background_dot.png")}
      ></Image>
      <View style={styles.buttonbox}>
        <Button title="Add new recipe" color="white" onPress={goToForm} />
      </View>
      {todoListState.todoList.map((elem: ISingleElementList, index: number) => (
        <View style={styles.SingleElList} key={index}>
          <Text style={styles.Titletxt}>{elem.name}</Text>
          <Text style={styles.Descriptiontxt}>{elem.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default TodoList;
