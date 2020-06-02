import * as actiontypes from "./types/recipelistTypes";
import { IRecipe, IIngredient } from "../entities/recipe";

export const setNewElemRecipeList = (newElem: IRecipe) => ({
  type: actiontypes.SET_NEW_ELEM,
  newElem,
});

export const setNewIngredients = (newIng: IIngredient) => ({
  type: actiontypes.SET_NEW_ING,
  newIng,
});

export const deleteElemRecipeList = (id) => ({
  type: actiontypes.DEL_ELEM,
  id

})

export const searchElemRecipeList = (searchElem) => ({
  type: actiontypes.SEARCH_ELEM,
  searchElem

})

export const loadingRecipeList = (loadRecipes: string) => ({
  type: actiontypes.LOADING_DB,
  loadRecipes
})



