import express from 'express';
import { getAllSoups, getAllDishes, getAllDrinks, deleteFood, updateFood, addFood} from '../controllers/food.controller.js';

const router = express.Router();

router.use(express.json());

router.get('/soups', getAllSoups);

router.get('/dish', getAllDishes);

router.get('/drink', getAllDrinks)

router.delete('/:id', deleteFood);

router.put('/:id', updateFood);

router.post('/addSoup/soup', addFood);

export default router;


