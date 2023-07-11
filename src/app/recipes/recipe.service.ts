import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test name',
      'a test description',
      'https://source.unsplash.com/random/300x300/?1',
      [new Ingredient('Baname', 1), new Ingredient('Mango', 3)]
    ),
    new Recipe(
      'server',
      'a test description',
      'https://source.unsplash.com/random/300x300/?1',
      [new Ingredient('Baname', 1), new Ingredient('apple', 3)]
    ),
  ];

  constructor(private shopingListservice: ShopingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShopingList(ingredients: Ingredient[]) {
    this.shopingListservice.addIngredients(ingredients);
  }
}
