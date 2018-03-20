export class Ingredient {
    private _name: string;
    private _amount: number;

    constructor(name: string, amount: number) {
        this._name = name;
        this._amount = amount;
    }

    get name(): string {
        return this._name;
    }

    get amount(): number {
        return this._amount;
    }

    set name(theName: string) {
        this._name = theName;
    }

    set amount(theAmount: number) {
        this._amount = theAmount;
    }
}