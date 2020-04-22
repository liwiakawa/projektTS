import React, { FC, useState } from "react";
import { Button, View, ScrollView, StyleSheet } from "react-native";
import styled from "styled-components/native";

import Colors from "../../constans/Colors";

import Form from "../../components/Form";
import TodoList from "../../components/TodoList";

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    resizeMode: "repeat",
    width: "100%",
  },
});

const TodoListScreen = ({ navigation }) => {
  const [formView, setFormView] = useState<boolean>(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#eaf7f2" }}>
      <ScrollView>
        {formView ? (
          <Form switchView={setFormView} />
        ) : (
          <TodoList switchView={setFormView} />
        )}
      </ScrollView>
    </View>
  );
};

export default TodoListScreen;
