export interface  IIngredient {
  name: string;
}

export interface IRecipe {
  id: number;
  name: string;
  skinType: string;
  description: string;
  ingredients: IIngredient[];
  load:string;
}
