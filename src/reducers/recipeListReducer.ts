import * as actionTypes from "../actions/types/recipelistTypes";
import { IRecipe, IIngredient } from "../entities/recipe";

export interface IRecipeListReducer {
  ingredientList: IIngredient[];
  recipeList: IRecipe[];
}

const defaultState = (): IRecipeListReducer => ({
  ingredientList: [],
  recipeList: [
    {
      name: "Peeling do ciała",
      description:
        "Odważyć do zlewki wszystkie drobinki złuszczające, następnie dodać sorbitol, kwas hialuronowy i glicerynę i dokładnie wymieszać, następnie dodać glukozyd laurylowy i mieszać aż do powstania jednolitej konsystencji. Opcjonalnie dodać konserwant, a następnie kompozycję zapachową/olejek eteryczny i ponownie wymieszać.",
      fakeIng:
        "60g glukozydu laurylowego \n 25g korundu \n 25g peelingu ze skały wulkanicznej \n 25g peelingu aroniowego \n 20g sorbitolu \n 10g gliceryny \n 10g kwasu hialuronowego 3% ",
      ingredients: [],
      id: 1,
      skinType: "Każda cera",
    },
    {
      name: "Maseczka z kurkumy",
      description:
        "Wymieszać kurkumę, sok z cytryny i miód, aby powstało ciasto. Nałożyć cienką warstwę na twarz i pozostawić do wyschnięcia na 20 minutZmyj pod prysznicem, delikatnie masując. Następnie nałóż kilka kropli oleju słonecznikowego lub z pestek winogron na opuszki palców i delikatnie wmasuj skórę, po czym przetrzyj twarz wacikiem.",
      fakeIng:
        "2 łyżeczki miodu\n szczypta kurkumy\n 1 łyżeczka soku z cytryny \n 1/2 łyżeczki oliwy z oliwek \n 3 łyżki jogurtu",
      ingredients: [],
      id: 2,
      skinType: "Każda cera",
    },
    {
      name: "Maska regenerująca",
      description:
        "Wszystko dokładnie mieszamy do uzyskania gładkiej, kremowej konsystencji. Z rozrabianiem masek z glinką jest jak z ciastem na naleśniki, ważne są równe proporcje składników, wtedy otrzymamy idealną postać maski, nie za rzadką, nie za gęstą.",
      fakeIng:
        "4 miarki białej glinki \n 2 miarki woda różana \n 6 - 8 kropli oleju jojoba \n kropla olejeku z drzewa herbacianego\n 3 krople serum aloesowego",
      ingredients: [],
      id: 3,
      skinType: "Każda cera",
    },
    {
      name: "Maseczka łagodząca",
      description:
        "Wszystko dokładnie mieszamy do uzyskania gładkiej, kremowej konsystencji. Z rozrabianiem masek z glinką jest jak z ciastem na naleśniki, ważne są równe proporcje składników, wtedy otrzymamy idealną postać maski, nie za rzadką, nie za gęstą.",
      fakeIng:
        "4 marki różowej lub czerwonej glinki \n 2 miarki woda różanej \n 6 - 8 kropli oleju różanego ",
      ingredients: [],
      id: 4,
      skinType: "Cera naczynkowa",
    },
    {
      name: "Mgiełka sosnowa",
      description:
        "W pierwszej kolejności należy zmieszać kwas ferulowy z solubilizatorem P-4C, następnie dodajemy do mieszaniny octanu witaminy E i wybrany olejek eteryczny. Pozostałe składniki dodajemy zgodnie z kolejnością w powyższej tabeli. Płyn przelewamy do butelki z atomizerem.",
      fakeIng:
        "93.5% wody demineralizowanej \n 0.25% kwasu ferulowego \n 1% stabilizatora P-4C \n 0,25% octanu witaminy E \n 2% karagenianu \n 2% biofermentu z aceroli \n 1% konserwantu FEOG \n kilka olejku sosnowego",
      ingredients: [],
      id: 5,
      skinType: "Cera sucha",
    },
  ],
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

    case actionTypes.DEL_ELEM:
      return {
        ...state,
        recipeList: [
          ...state.recipeList.filter((elem) => elem.id != action.id),
        ],
      };

    case actionTypes.SET_NEW_ING: {
      return {
        ...state,
        ingredientList: [...state.ingredientList, action.newIng],
      };
    };

    case actionTypes.SEARCH_ELEM:
      return {
        ...state,
        recipeList: [
          ...state.recipeList.filter((elem) => elem.name === action.cokolwiek),
        ],
      };
    

    default: {
      return state;
    }
  }
};
