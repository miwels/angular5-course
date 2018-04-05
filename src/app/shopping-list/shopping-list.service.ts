import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/forms/src/facade/async";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 2)
    ];

    getIngredients() {
        return this.ingredients.slice(); // returns a copy so that the original can't be edited
    }

    // Because of the fact that we are returning just a copy of the ingredients, if we add
    // a new ingredient we need to update the list. That's why we emit an event in order to show
    // the right list
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); // spread operator
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}