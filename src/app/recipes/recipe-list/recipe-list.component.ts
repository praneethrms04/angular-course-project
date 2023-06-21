import { Component } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipes[] = [
    new Recipes(
      'A test name',
      'a test description',
      'https://source.unsplash.com/random/300x300/?1'
    ),
    new Recipes(
      'A test name',
      'a test description',
      'https://source.unsplash.com/random/300x300/?1'
    ),
    new Recipes(
      'A test name',
      'a test description',
      'https://source.unsplash.com/random/300x300/?1'
    ),
  ];
}
