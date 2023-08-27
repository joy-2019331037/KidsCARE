import express from 'express';
const router = express.Router();
import {setRating} from '../controllers/setRating.js'

router.put("/rating",setRating);

export default router;