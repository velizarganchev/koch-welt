import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  providers: [RecipesService],
})
export class RecipesComponent implements OnInit {
  recipeToShow: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeToShow = recipe
      }
    );
  }
}
