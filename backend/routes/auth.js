import express from 'express'
import {login,register,logout} from '../controllers/auth.js'; 
import addInfos from '../controllers/addInfo.js'
const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout)


export default router;