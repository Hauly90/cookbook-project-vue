import Dish from '../models/Dish.js';

let mainDishesList = [
    new Dish(
        "Sicilian Roasted Chicken",
        [
            "Preheat oven to 425 degrees F (220 degrees C). Grease a 9x13-inch pan with cooking spray.",
            "Arrange chicken pieces in the baking pan. Sprinkle salt, pepper, paprika, garlic powder, and oregano over both sides.",
            "Roast in the preheated oven until chicken is browned and the juices run clear, about 1 hour. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C).",
        ],
        6,
        75,
        [
            {
                quantity: 1,
                type: "piece",
                nameOfIng: "cooking spray",
            },
            {
                quantity: 1,
                type: "piece",
                nameOfIng: "chicken",
            },
            {
                quantity: 1,
                type: "teaspoon",
                nameOfIng: "salt",
            },
            {
                quantity: 1,
                type: "teaspoon",
                nameOfIng: "ground black pepper",
            },
            {
                quantity: 1,
                type: "teaspoon",
                nameOfIng: "ground paprika",
            },
            {
                quantity: 1,
                type: "teaspoon",
                nameOfIng: "garlic powder",
            },
            {
                quantity: 1,
                type: "teaspoon",
                nameOfIng: "dried oregano",
            },
        ],
    ),
    new Dish(
        "Cardamom Maple Salmon",
        [
            "Stir salt, paprika, cardamom, coriander, and black pepper together in a bowl. Add oil and maple syrup and stir until evenly combined.",
            "Preheat a non-stick frying pan over medium-high heat, about 350 degrees F (175 degrees C).",
            "Dredge salmon pieces through the maple syrup mixture until evenly coated on all sides. Cook salmon in the preheated pan until fish flakes easily with a fork, 5 to 7 minutes per side.",
        ],
        6,
        25,
        [
            {
                quantity: 1.5,
                type: "teaspoons",
                nameOfIng: "salt",
            },
            {
                quantity: 1,
                type: "teaspoon",
                nameOfIng: "paprika",
            },
            {
                quantity: 1,
                type: "teaspoon",
                nameOfIng: "ground cardamom",
            },
            {
                quantity: 1,
                type: "teaspoon",
                nameOfIng: "ground coriander",
            },
            {
                quantity: 0.5,
                type: "teaspoon",
                nameOfIng: "ground black pepper",
            },
            {
                quantity: 0.25,
                type: "cup",
                nameOfIng: "grapeseed oil",
            },
            {
                quantity: 2,
                type: "tablespoons",
                nameOfIng: "maple syrup",
            },
            {
                quantity: 1,
                type: "piece",
                nameOfIng: "salmon fillet",
            },
        ],
    ),
    new Dish(
        "Barbeque Chicken Grilled Pizza",
        [
            "Preheat grill for medium heat and lightly oil the grate. Mix chicken and 2 tablespoons barbeque sauce together in a bowl until evenly coated.",
            "Roll dough onto a work surface and cut in half to form 2 rectangles. Brush the top of each rectangle with olive oil. Place dough, oil-side down, onto the grill; cook until bottom of dough is browned and top is bubbling up, about 5 minutes. Brush the tops of each dough with oil and flip.",
            "Spread the remaining barbeque sauce over each crust; top with chicken, Colby-Monterey Jack cheese, and tomatoes. Close the lid of the grill and cook pizza until cheese is melted, 2 to 3 minutes. Remove pizza from grill and cool before slicing, 2 to 3 minutes."
        ],
        6,
        30,
        [
            {
                quantity: 1,
                type: "cup",
                nameOfIng: "chopped cooked chicken",
            },
            {
                quantity: 0.5,
                type: "cup",
                nameOfIng: "barbeque sauce",
            },
            {
                quantity: 1,
                type: "package",
                nameOfIng: "refrigerated pizza dough",
            },
            {
                quantity: 2,
                type: "tablespoons",
                nameOfIng: "olive oil",
            },
            {
                quantity: 1,
                type: "cup",
                nameOfIng: "shredded cheese",
            },
            {
                quantity: 1,
                type: "cup",
                nameOfIng: "diced tomatoes",
            },
        ],
    )
]

function setB(value) {
    mainDishesList = value;
}

export {mainDishesList, setB};
// export default mainDishesList;