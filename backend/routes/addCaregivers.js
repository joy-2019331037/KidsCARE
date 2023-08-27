import express from 'express';
const router = express.Router();
import {addCaregivers} from '../controllers/addCaregivers.js'

router.post("/addCaregivers",addCaregivers);

export default router;