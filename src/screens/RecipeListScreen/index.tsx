import React, { FC, useState } from "react";
import { Button, View, ScrollView, StyleSheet } from "react-native";


import Form from "../../components/Form";
import RecipeList from "../../components/RecipeList";


const RecipeListScreen = ({ navigation }) => {
  const [formView, setFormView] = useState<boolean>(false);
  return (
    <View style={{ flex: 1 }}>
        {formView ? (
          <Form switchView={setFormView} />
        ) : (
          <RecipeList switchView={setFormView} />
        )}

    </View>
  );
};

export default RecipeListScreen;
