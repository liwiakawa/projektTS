import * as actionTypes from "../actions/types/recipelistTypes";
import { IRecipe, IIngredient } from "../entities/recipe";

export interface IRecipeListReducer {
  ingredientList: IIngredient[];
  recipeList: IRecipe[];
}

const defaultState = (): IRecipeListReducer => ({
  ingredientList: [],
  recipeList: [ ],
});

export default (state = defaultState(), action: any): IRecipeListReducer => {
  switch (action.type) {
    case actionTypes.SET_NEW_ELEM: {
      return {
        ...state,
        recipeList: [...state.recipeList, action.newElem],
        ingredientList: [],
      };
    }

    case actionTypes.DEL_ELEM: {
      return {
        ...state,
        recipeList: [
          ...state.recipeList.filter((elem) => elem.id != action.id),
        ],
      };
    }
  

    case actionTypes.SET_NEW_ING: {
      return {
        ...state,
        ingredientList: [...state.ingredientList, action.newIng],
      };
    };

    case actionTypes.SEARCH_ELEM: {
      return {
        ...state,
        recipeList: [
          ...state.recipeList.filter((elem) => elem.name === action.searchElem),
        ],
      };
    }
     

      case actionTypes.LOADING_DB: {
        return {
          ...state,
          recipeList: [
            ...state.recipeList.filter((elem) => elem.load === action.loadRecipes )
          ]
      }
      }
      

      case actionTypes.CLEAN_ARRAY: {
        return {
          ...state,
          recipeList: [
            ...state.recipeList.filter((elem) => elem.load !== action.cleaner)
          ]

        }
      }
    

    default: {
      return state;
    }
  }
};
