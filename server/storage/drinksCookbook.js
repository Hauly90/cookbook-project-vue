import Drink from '../models/Drink.js';

let drinksList = [
    new Drink(
        "Champurrado",
        [
            "Bring water, cinnamon stick, clove, and star anise to a boil in a saucepan; remove from heat and allow spices to steep until water is fragrant, about 10 minutes. Strain.",
            "Heat milk, chocolate, and pinole in another saucepan over medium heat, whisking until chocolate is dissolved and liquid is thickened, about 10 minutes. Remove from heat and add piloncillo; let rest until sugar is dissolved, about 5 minutes more. Pour cinnamon water into chocolate mixture and stir to combine.",
        ],
        12,
        35,
        [
            {
                quantity: 1.5,
                type: "cups",
                nameOfIng: "water",
            },
            {
                quantity: 1,
                type: "cinnamon",
                nameOfIng: "stick",
            },
            {
                quantity: 1,
                type: "whole",
                nameOfIng: "clove",
            },
            {
                quantity: 4.5,
                type: "cups",
                nameOfIng: "milk",
            },
            {
                quantity: 2,
                type: "tablets",
                nameOfIng: "Mexican chocolate",
            },
            {
                quantity: 0.75,
                type: "cup",
                nameOfIng: "pinole",
            },
            {
                quantity: 1,
                type: "pinch",
                nameOfIng: "crushed piloncillo",
            },
        ],
    ),
    new Drink(
        "Hot Buttered Rum",
        [
            "Place butter, sugar, cinnamon, nutmeg, allspice, and vanilla extract in the bottom of an Irish coffee glass. Pour in rum and hot water. Stir.",
        ],
        1,
        10,
        [
            {
                quantity: 1,
                type: "teaspoon",
                nameOfIng: "butter",
            },
            {
                quantity: 1,
                type: "teaspoon",
                nameOfIng: "brown sugar",
            },
            {
                quantity: 1,
                type: "pinch",
                nameOfIng: "cinnamon",
            },
            {
                quantity: 1,
                type: "dash",
                nameOfIng: "vanilla extract",
            },
            {
                quantity: 2,
                type: "ounces",
                nameOfIng: "rum",
            },
            {
                quantity: 1,
                type: "cup",
                nameOfIng: "boiling water",
            }
        ],
    ),
    new Drink(
        "Carrot and Orange Juice",
        [
            "Press carrots and oranges through a juicer and into a large glass.",
        ],
        4,
        10,
        [
            {
                quantity: 2,
                type: "pounds",
                nameOfIng: "organic carrots",
            },
            {
                quantity: 8,
                type: "piece",
                nameOfIng: "organic oranges",
            },
        ],
    )
]

function setC(value) {
    drinksList = value;
}

export {drinksList, setC};
