import { Ingredient } from './ingredient.model';
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string; // stores url to image
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
