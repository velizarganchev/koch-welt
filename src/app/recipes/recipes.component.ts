import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  recipeToShow: Recipe;

  showRecipe(currRecipe: Recipe){
    this.recipeToShow = currRecipe;
  }
}
