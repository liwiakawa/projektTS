import * as actiontypes from "./types/todolistTypes";
import { ISingleElementList } from "../entities/todoSingleEl";
import { Ingredient} from "../entities/ingredients";

export const setNewElemTodoList = (newElem: ISingleElementList) => ({
  type: actiontypes.SET_NEW_ELEM,
  newElem,
});

export const setNewIngredients = (newIng: Ingredient) => ({
  type: actiontypes.SET_NEW_ING,
  newIng,
});

export const deleteElemTodoList = (index) => ({
  type: actiontypes.DEL_ELEM,
  index

})