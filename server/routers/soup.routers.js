import express from 'express';
import { getAllSoups, deleteSoup, updateSoup} from '../controllers/soup.controller.js';

const router = express.Router();

router.use(express.json());

router.get('/', getAllSoups);

router.delete('/:id', deleteSoup);

router.put('/:id', updateSoup);

export default router;


