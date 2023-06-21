import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
