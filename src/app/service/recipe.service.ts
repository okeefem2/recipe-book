import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingListService } from '../service/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  // since we are returning slices, we need a way to listen for and emit changes
  recipesChanged = new Subject<Recipe[]>();

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {
    this.recipes[index] = updatedRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
