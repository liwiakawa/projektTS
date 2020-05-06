import React, { FC, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  FontAwesome,
} from "react-native-vector-icons";

import { theme } from "../core/theme";
import { IState } from "../reducers";
import { ITodoListReducer } from "../reducers/todoListReducer";
import { ISingleElementList } from "../entities/todoSingleEl";
import { deleteElemTodoList } from "../actions/todoListActions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
  },
  AddBtnBox: {
    position: "absolute",
    bottom: hp("5%"),
    right: wp("2%"),
  },
  AddBtnIcon: {
    fontSize: hp("6%"),
    textAlign: "center",
    color: theme.colors.primary,
  },
  DeleteBtnBox: {
    position: "absolute",
    height: "14%",
    width: "12%",
    borderBottomLeftRadius: hp("20%"),
    backgroundColor: theme.colors.secondary,
    right: 0,
  },
  DeleteBtnIcon: {
    fontSize: hp("4%"),
    color: theme.colors.light,
    textAlign: "right",
    right: "10%",
  },
  SingleElList: {
    borderColor: theme.colors.primary,
    height: hp("40%"),
    width: wp("90%"),
    marginTop: hp("5%"),
    marginBottom: hp("0%"),
    left: hp("2.5%"),
    textAlign: "center",
    borderWidth: hp("0.5%"),
    borderTopLeftRadius: hp("5%"),
    borderBottomLeftRadius: hp("5%"),
    borderBottomRightRadius: hp("5%"),
  },
  Titletxt: {
    fontSize: hp("4%"),
    textAlign: "center",
    marginTop: hp("4%"),
  },
  Ingredientstxt: {
    fontSize: hp("2.5%"),
    textAlign: "center",
    marginTop: hp("2%"),
  },
  Descriptiontxt: {
    fontSize: hp("2.5%"),
    textAlign: "justify",
    marginTop: hp("2%"),
    marginLeft: wp("5%"),
    width: wp("78%"),
  },
});

type DelNewElemTodoList = ReturnType<typeof deleteElemTodoList>;

const TodoList: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const todoListState = useSelector<IState, ITodoListReducer>(
    (state) => state.todoList
  );
  const goToForm = () => {
    props.switchView(true);
    console.log(todoListState.todoList)

  };
  const deleteToDo = (index: number) => {
    dispatch<DelNewElemTodoList>(deleteElemTodoList(index));
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {todoListState.todoList.map(
          (elem: ISingleElementList, index: number) => (
            <View style={styles.SingleElList} key={index}>
              <Text style={styles.Titletxt}>{elem.name}</Text>
              <Text style={styles.Ingredientstxt}>{elem.ingredients}</Text>
              <Text style={styles.Descriptiontxt}>{elem.description}</Text>
              <TouchableOpacity
                style={styles.DeleteBtnBox}
                onPress={() => deleteToDo(index)}
              >
                <FontAwesome style={styles.DeleteBtnIcon} name="times" />
              </TouchableOpacity>
            </View>
          )
        )}
      </ScrollView>

      <TouchableOpacity style={styles.AddBtnBox} onPress={goToForm}>
        <FontAwesome style={styles.AddBtnIcon} name="plus-circle" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;
