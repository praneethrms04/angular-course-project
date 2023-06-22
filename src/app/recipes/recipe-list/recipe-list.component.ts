import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test name',
      'a test description',
      'https://source.unsplash.com/random/300x300/?1'
    ),
    new Recipe(
      'A test name',
      'a test description',
      'https://source.unsplash.com/random/300x300/?1'
    ),
    new Recipe(
      'A test name',
      'a test description',
      'https://source.unsplash.com/random/300x300/?1'
    ),
  ];
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
