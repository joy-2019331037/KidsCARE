import express from 'express';
const router = express.Router();
import addInfos from '../controllers/addInfo.js'

router.post("/addInfo",addInfos);

export default router;