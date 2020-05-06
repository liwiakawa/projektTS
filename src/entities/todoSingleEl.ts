

export interface  Ingredient {
  name: string;
}

export interface ISingleElementList {
  name: string;
  description: string;
  ingredients: Ingredient[];
}
