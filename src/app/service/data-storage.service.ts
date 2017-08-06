import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../model/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://receipe-book-727d0.firebaseio.com/recipes.json', this.recipeService.getRecipies());
  }

  getRecipes() {
    return this.http.get('https://receipe-book-727d0.firebaseio.com/recipes.json')
    .map(
      (response: Response)=> {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
