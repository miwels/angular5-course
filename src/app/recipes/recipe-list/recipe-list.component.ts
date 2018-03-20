import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit{ 

    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe("Roast beef", "Recipe for roast beef", "https://i.imgur.com/WyfCqZe.jpg"),
        new Recipe("Fish & Chips", "Recipe for fish & chips", "https://i.imgur.com/fWvZ9cG.jpg")
    ];

    constructor() {

    }

    ngOnInit() {
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }

}