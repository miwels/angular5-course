import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html'
})

export class ShoppingListEditComponent implements OnInit{

    ingredient: Ingredient;
    @Output() onAddIngredient = new EventEmitter<Ingredient>();
    
    constructor() {
    }

    ngOnInit(): void {
    }
    
    addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
        this.ingredient = new Ingredient(name.value, parseInt(amount.value));
        this.onAddIngredient.emit(this.ingredient);
    }

    
}