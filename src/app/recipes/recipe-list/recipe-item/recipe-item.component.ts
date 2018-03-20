import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
    selector: 'recipe-item',
    templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit{ 
    @Input() recipe: Recipe;
    @Output() recipeSelected = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
    }

    onSelected() {
        this.recipeSelected.emit();
    }
}