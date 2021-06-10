import { soupsList, setA } from '../storage/soupsCookbook.js';
import { mainDishesList, setB } from '../storage/mainDishesCookbook.js';
import { drinksList, setC } from '../storage/drinksCookbook.js';
import { v4 as uuidv4 } from 'uuid';

export const getAllSoups = (req, res) => {
    res.status(200);
    res.send(soupsList);
};

export const getAllDishes = (req, res) => {
    res.status(200);
    res.send(mainDishesList);
};

export const getAllDrinks = (req, res) => {
    res.status(200);
    res.send(drinksList);
};

export const deleteFood = (req, res) => {
    let { id } = req.params;
    const { type } = req.body;

    if (type === "soup") {
        setA(soupsList.filter((oneSoup) => oneSoup.id !== id));
        res.send(`Soup with the id ${id} deleted from the database.`);
    } else if (type === "dish") {
        setB(mainDishesList.filter((oneDish) => oneDish.id !== id));
        res.send(`Dish with the id ${id} adddded from the database.`);
    } else if (type === "drink") {
        setC(drinksList.filter((oneDrink) => oneDrink.id !== id));
        res.send(`Drink with the id ${id} adddded from the database.`);
    }
};

export const updateFood = (req, res) => {
    const { id } = req.params;
    const { name, description, finalAmount, preparationLength, ingredients, type } = req.body;

    if (type === "soup") {
        const oneSoup = soupsList.find((oneSoup) => oneSoup.id === id);

        if (name) oneSoup.name = name;
        if (description) oneSoup.description = description;
        if (finalAmount) oneSoup.finalAmount = finalAmount;
        if (preparationLength) oneSoup.preparationLength = preparationLength;
        if (ingredients) oneSoup.ingredients = ingredients;

        res.send(`Soup with the id ${id} has been updated.`);
    } else if (type === "dish") {
        const oneDish = mainDishesList.find((oneDish) => oneDish.id === id);

        if (name) oneDish.name = name;
        if (description) oneDish.description = description;
        if (finalAmount) oneDish.finalAmount = finalAmount;
        if (preparationLength) oneDish.preparationLength = preparationLength;
        if (ingredients) oneDish.ingredients = ingredients;

        res.send(`Dish with the id ${id} has been updated.`);
    } else if (type === "drink") {
        const oneDrink = drinksList.find((oneDrink) => oneDrink.id === id);

        if (name) oneDrink.name = name;
        if (description) oneDrink.description = description;
        if (finalAmount) oneDrink.finalAmount = finalAmount;
        if (preparationLength) oneDrink.preparationLength = preparationLength;

        res.send(`Drink with the id ${id} has been updated.`);
    }
}

export const addFood = (req, res) => {
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
    } else if (type === "drink") {
        drinksList.push({ ...oneFood, id: uuidv4() });
        res.status(201);
        res.send(`Drink with the name ${oneFood.name} added to the database!`);
    }
}

