import express from 'express';
const router = express.Router();
import {caregivers} from '../controllers/caregivers.js'

router.get("/caregivers",caregivers);

export default router;