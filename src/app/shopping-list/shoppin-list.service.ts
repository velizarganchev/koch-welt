// import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppinListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('Salz', 5),
    new Ingredient('Appfel', 2),
    new Ingredient('Tomaten', 1),
  ];

  getAllIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
