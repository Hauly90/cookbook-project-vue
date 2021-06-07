import mainDishesList from '../storage/mainDishesCookbook.js';
// import Soup from '../models/Soup.js';
import { v4 as uuidv4 } from 'uuid';


export const getAllDishes = (req, res) => {
    res.status(200);
    res.send(mainDishesList);
};

export const deleteDish = (req, res) => {
    let { id } = req.params;

    mainDishesList = mainDishesList.filter((oneDish) => oneDish.id !== id);

    res.send(`Soup with the id ${id} deleted from the database.`);
};

export const updateDish = (req, res) => {
    const { id } = req.params;
    const { name, description, finalAmount, preparationLength, ingredients } = req.body;

    const oneDish = mainDishesList.find((oneDish) => oneDish.id === id);

    if (name) oneDish.name = name;
    if (description) oneDish.description = description;
    if (finalAmount) oneDish.finalAmount = finalAmount;
    if (preparationLength) oneDish.preparationLength = preparationLength;
    if (ingredients) oneDish.ingredients = ingredients;

    res.send(`Soup with the id ${id} has been updated.`);
}

export const addDish = (req, res) => {
    const oneDish = req.body;

    mainDishesList.push({ ...oneDish, id: uuidv4() });
    res.status(201);

    res.send(`Soup with the name ${oneDish.name} added to the database!`);
}

