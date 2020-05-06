import React, { FC, useState } from "react";
import { Button, View, ScrollView, StyleSheet } from "react-native";


import Form from "../../components/Form";
import TodoList from "../../components/TodoList";


const TodoListScreen = ({ navigation }) => {
  const [formView, setFormView] = useState<boolean>(false);
  return (
    <View style={{ flex: 1 }}>
        {formView ? (
          <Form switchView={setFormView} />
        ) : (
          <TodoList switchView={setFormView} />
        )}

    </View>
  );
};

export default TodoListScreen;
