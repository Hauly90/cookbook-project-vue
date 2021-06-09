import { soupsList, setA } from '../storage/soupsCookbook.js';
import { mainDishesList, setB } from '../storage/mainDishesCookbook.js';
// import Soup from '../models/Soup.js';
import { v4 as uuidv4 } from 'uuid';

// let soupsList = [
//     new Soup(
//         "Ham and Split Pea Soup",
//         [
//             "Place the butter in a large soup pot over medium-low heat. Stir in onion, celery, and sliced garlic. Cook slowly until the onions are translucent but not brown, 5 to 8 minutes.",
//             "Mix in ham, bay leaf, and split peas. Pour in chicken stock and water. Stir to combine, and simmer slowly until the peas are tender and the soup is thick, about 1 hour and 15 minutes. Stir occasionally. Season with salt and black pepper to serve.",
//         ],
//         8,
//         110,
//         [
//             {
//                 quantity: 2,
//                 type: "tablespoons",
//                 nameOfIng: "butter",
//             },
//             {
//                 quantity: 0.5,
//                 type: "piece",
//                 nameOfIng: "onion",
//             },
//             {
//                 quantity: 2,
//                 type: "ribs",
//                 nameOfIng: "celery",
//             },
//             {
//                 quantity: 3,
//                 type: "cloves",
//                 nameOfIng: "garlic",
//             },
//             {
//                 quantity: 1,
//                 type: "pound",
//                 nameOfIng: "ham",
//             },
//             {
//                 quantity: 1,
//                 type: "piece",
//                 nameOfIng: "bay leaf",
//             },
//             {
//                 quantity: 1,
//                 type: "quart",
//                 nameOfIng: "chicken stock",
//             },
//             {
//                 quantity: 2.5,
//                 type: "coups",
//                 nameOfIng: "water",
//             },
//             {
//                 quantity: 0,
//                 type: "to taste",
//                 nameOfIng: "salt and ground black pepper",
//             },
//         ],
//     ),
//     new Soup(
//         "Cream Soup Base",
//         [
//             "Melt butter in a saucepan. Add flour and make a paste. Add milk and bouillon cubes. Cook over low heat until thickened. Add pepper to taste. Add more milk when adding the other soup ingredients, depending on the thickness you desire.",
//             "To this base you may add steamed broccoli and American cheese; or chunks of baked potato (peel and all) with American cheese, bacon pieces, and chives; or pureed, stewed tomatoes for a bisque; or leeks that have been cleaned well, steamed, and chopped; or cooked asparagus cut in pieces (if canned asparagus is used, add some of the liquid as well), topped with grated cheese and bacon pieces.",
//         ],
//         8,
//         15,
//         [
//             {
//                 quantity: 0.5,
//                 type: "cup",
//                 nameOfIng: "butter",
//             },
//             {
//                 quantity: 6,
//                 type: "tablesponn",
//                 nameOfIng: "flour",
//             },
//             {
//                 quantity: 2,
//                 type: "cups",
//                 nameOfIng: "milk",
//             },
//             {
//                 quantity: 2,
//                 type: "cubes",
//                 nameOfIng: "chicken bouillon",
//             },
//             {
//                 quantity: 0,
//                 type: "to taste",
//                 nameOfIng: "ground black pepper",
//             },
//         ],
//     ),
//     new Soup(
//         "Miso Soup",
//         [
//             "In a medium saucepan over medium-high heat, combine dashi granules and water; bring to a boil. Reduce heat to medium, and whisk in the miso paste. Stir in tofu. Separate the layers of the green onions, and add them to the soup. Simmer gently for 2 to 3 minutes before serving.",
//         ],
//         4,
//         20,
//         [
//             {
//                 quantity: 2,
//                 type: "teaspoons",
//                 nameOfIng: "dashi granules",
//             },
//             {
//                 quantity: 0.5,
//                 type: "cup",
//                 nameOfIng: "wap",
//             },
//             {
//                 quantity: 3,
//                 type: "tablespoons",
//                 nameOfIng: "miso paste",
//             },
//             {
//                 quantity: 1,
//                 type: "package",
//                 nameOfIng: "silken tofu",
//             },
//             {
//                 quantity: 2,
//                 type: "pieces",
//                 nameOfIng: "green onions",
//             },
//         ],
//     )
// ]

export const getAllSoups = (req, res) => {
    res.status(200);
    res.send(soupsList);
};

export const getAllDishes = (req, res) => {
    res.status(200);
    res.send(mainDishesList);
};

export const deleteSoup = (req, res) => {
    let { id } = req.params;
    const { type } = req.body;

    if (type === "soup") {
        setA(soupsList.filter((oneSoup) => oneSoup.id !== id));
        res.send(`Soup with the id ${id} deleted from the database.`);
    } else if (type === "dish") {
        setB(mainDishesList.filter((oneDish) => oneDish.id !== id));
        res.send(`Dish with the id ${id} adddded from the database.`);
    }
};

export const updateSoup = (req, res) => {
    const { id } = req.params;
    const { name, description, finalAmount, preparationLength, ingredients, type } = req.body;

    if (type === "soup") {
        const oneSoup = soupsList.find((oneSoup) => oneSoup.id === id);

        if (name) oneSoup.name = name;
        if (description) oneSoup.description = description;
        if (finalAmount) oneSoup.finalAmount = finalAmount;
        if (preparationLength) oneSoup.preparationLength = preparationLength;
        if (ingredients) oneSoup.ingredients = ingredients;
    } else if (type === "dish") {
        const oneDish = mainDishesList.find((oneDish) => oneDish.id === id);

        if (name) oneDish.name = name;
        if (description) oneDish.description = description;
        if (finalAmount) oneDish.finalAmount = finalAmount;
        if (preparationLength) oneDish.preparationLength = preparationLength;
        if (ingredients) oneDish.ingredients = ingredients;
    }


    res.send(`Soup with the id ${id} has been updated.`);
}

export const addSoup = (req, res) => {
    const oneFood = req.body;
    const { type } = req.body;
    

    if (type === "soup") {
        soupsList.push({ ...oneFood, id: uuidv4() });
        res.status(201);
        res.send(`Soup with the name ${oneFood.name} added to the database!`);
    } else if (type === "dish") {
        mainDishesList.push({ ...oneFood, id: uuidv4() });
        res.status(201);
        res.send(`Dish with the name ${oneFood.name} added to the database!`);
    }

    res.send(`Soup with the name ${oneFood.name} added to the database!`);
}

