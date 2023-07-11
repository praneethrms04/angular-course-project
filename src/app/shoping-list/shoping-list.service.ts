import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShopingListService {
  ingridientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Banana', 10),
    new Ingredient('Apples', 10),
    new Ingredient('Lemon', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingridientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient)
    // }

    this.ingredients.push(...ingredients);
    this.ingridientsChanged.next(this.ingredients.slice());
  }

  constructor() {}
}
