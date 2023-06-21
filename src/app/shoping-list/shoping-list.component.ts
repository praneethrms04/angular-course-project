import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('item1', 10),
    new Ingredient('item1', 10),
    new Ingredient('item1', 10),
  ];
}
