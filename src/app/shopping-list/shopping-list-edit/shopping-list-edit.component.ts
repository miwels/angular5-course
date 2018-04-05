import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html'
})

export class ShoppingListEditComponent implements OnInit{

    ingredient: Ingredient;
    
    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit(): void {
    }
    
    addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
        this.ingredient = new Ingredient(name.value, parseInt(amount.value));
        this.shoppingListService.addIngredient(this.ingredient);
    }

}