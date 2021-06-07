import express from 'express';
import { getAllDishes, deleteDish, updateDish, addDish} from '../controllers/dish.controller.js';

const router = express.Router();

router.use(express.json());

router.get('/', getAllDishes);

router.delete('/:id', deleteDish);

router.put('/:id', updateDish);

router.post('/addDish/dish', addDish);

export default router;


