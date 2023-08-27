import express from 'express';
const router = express.Router();
import {getreq} from '../controllers/getreq.js'
import { getSpecificReq } from '../controllers/getreq.js';
import {getAdmittedReq} from '../controllers/getreq.js'
router.get("/req",getreq);
router.post("/specificreq",getSpecificReq);
router.get("/admittedReq", getAdmittedReq);
export default router;