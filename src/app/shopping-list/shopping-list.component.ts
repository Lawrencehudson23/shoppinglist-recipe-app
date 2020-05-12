import { Ingredient } from '../shared/ingredient.model';
import { Component } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];
}
