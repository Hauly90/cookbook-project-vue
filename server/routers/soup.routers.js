import express from 'express';
import { getAllSoups, deleteSoup, updateSoup, addSoup, getAllDishes } from '../controllers/soup.controller.js';

const router = express.Router();

router.use(express.json());

router.get('/soups', getAllSoups);

router.get('/dish', getAllDishes);

router.delete('/:id', deleteSoup);

router.put('/:id', updateSoup);

router.post('/addSoup/soup', addSoup);

export default router;


