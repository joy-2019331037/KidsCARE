import express from 'express';
const router = express.Router();
import {Baby} from '../controllers/baby.js'
import {BabyForReq} from '../controllers/baby.js'
import {singleBaby} from '../controllers/baby.js'
router.post("/babies",Baby);
router.post("/baby", BabyForReq);
router.post("/singleBaby", singleBaby)
export default router;