export interface  IIngredient {
  name: string;
  id: number;
}

export interface IRecipe {
  id: number;
  name: string;
  skinType: string;
  description: string;
  ingredients: IIngredient[];
  fakeIng:string;
}
