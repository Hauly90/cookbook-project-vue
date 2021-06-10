import { v4 as uuidv4 } from 'uuid';

class Drink {
    constructor(name, description, finalAmount, preparationLength, ingredients) {
        this.name = name;
        this.id = uuidv4();
        this.description = description;
        this.finalAmount = finalAmount;
        this.preparationLength = preparationLength;
        this.ingredients = ingredients;
        this.type = "drink";
    }
}

export default Drink;