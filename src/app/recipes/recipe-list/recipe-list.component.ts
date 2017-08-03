import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../../model/recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
              private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipies();
  }

  onNewRecipe() {
    // at this point we are on the /recipes path
    // so just add new to the end of the path
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
