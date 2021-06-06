import { v4 as uuidv4 } from 'uuid';

class Soup {
    constructor(name, description, finalAmount, preparationLength, ingredients) {
        this.name = name;
        this.description = description;
        this.finalAmount = finalAmount;
        this.preparationLength = preparationLength;
        this.ingredients = ingredients;
        this.id = uuidv4();
    }
}

export default Soup;