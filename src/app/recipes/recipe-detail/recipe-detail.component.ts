import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;
  showDropdown: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private activatedRpute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRpute.params.subscribe((parmas: Params) => {
      this.id = +parmas['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  onAddToShopingList() {
    this.recipeService.addIngredientsToShopingList(this.recipe.ingredients);
  }
  gotoEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRpute });
  }
}
