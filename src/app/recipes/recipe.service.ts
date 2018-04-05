import { EventEmitter, Injectable, Inject } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            "Roast beef",
            "Recipe for roast beef", 
            "https://i.imgur.com/WyfCqZe.jpg",
            [
                new Ingredient('beef', 10),
                new Ingredient('tomatoes', 5),
                new Ingredient('potatoes', 10)
            ]),
        new Recipe(
            "Fish & Chips",
            "Recipe for fish & chips",
            "https://i.imgur.com/fWvZ9cG.jpg",
            [
                new Ingredient('fish', 10),
                new Ingredient('chips', 5)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice(); // returns a copy of the array so that we can't change the original
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}