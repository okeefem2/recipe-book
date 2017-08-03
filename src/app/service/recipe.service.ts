import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingListService } from '../service/shopping-list.service';
@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      "Test recipe",
      "Test",
      "https://static1.squarespace.com/static/5685a06669492ea07bb9b05d/t/5702d1922b8ddeaf55815b1f/1459802521539/Angel+Food-+High+Res-6766.jpg?format=1500w",
      [new Ingredient('Frosting', 1), new Ingredient('Dough', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipies() {
    return this.recipes.slice(); // returns a copy of the area
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
