import express from 'express';
const router = express.Router();
import {setreq} from '../controllers/setreq.js'

router.post("/req",setreq);

export default router;