import express from 'express';
const router = express.Router();
import {updateInReq} from '../controllers/updateReq.js'
import {updateOutReq} from '../controllers/updateReq.js'

router.put("/Inreq",updateInReq);
router.put("/Outreq",updateOutReq);

export default router;