import { combineReducers } from "redux";

import recipeList, { IRecipeListReducer } from "./recipeListReducer";

export default combineReducers({
  recipeList,
});

export interface IState {
  recipeList: IRecipeListReducer;
}
