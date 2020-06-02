import React, { useState } from "react";
import { View } from "react-native";

import Form from "../../components/RecipeListComponents/Form";
import RecipeList from "../../components/RecipeListComponents/RecipeList";

const RecipeListScreen = ({}) => {
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
