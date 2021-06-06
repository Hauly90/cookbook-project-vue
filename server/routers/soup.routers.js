import express from 'express';
import { getAllSoups, deleteSoup, updateSoup, addSoup} from '../controllers/soup.controller.js';

const router = express.Router();

router.use(express.json());

router.get('/', getAllSoups);

router.delete('/:id', deleteSoup);

router.put('/:id', updateSoup);

router.post('/addSoup/soup', addSoup);

export default router;


