import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from './shoping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
})
export class ShopingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Banana', 10),
  //   new Ingredient('Apples', 10),
  //   new Ingredient('Lemon', 10),
  // ];

  private ChangeSubSciption!: Subscription;

  ingredients!: Ingredient[];
  constructor(private shopingListService: ShopingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shopingListService.getIngredients();
    this.ChangeSubSciption =
      this.shopingListService.ingridientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(): void {
    this.ChangeSubSciption.unsubscribe();
  }
}
