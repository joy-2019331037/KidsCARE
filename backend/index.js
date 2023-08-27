import express from "express"

import authRoutes from "./routes/auth.js";
import addRoutes from "./routes/addInfos.js";
import babyRoutes from './routes/babies.js';
import setreq from './routes/setreq.js'
import getreq from './routes/getreq.js'
import updateReq from './routes/updateReq.js'
import setRating from './routes/setRating.js'
import caregivers from './routes/caregivers.js'
import addCaregivers from './routes/addCaregivers.js'


import cookieParser from "cookie-parser";
import session from 'express-session';
import bodyParser from "body-parser";
import cors from 'cors';


const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.use(bodyParser.urlencoded({urlencoded:true}));




app.use("/api/auth",authRoutes);
app.use("/api/add",addRoutes);
app.use("/api/get",babyRoutes);
app.use("/api/set",setreq);
app.use("/api/get",getreq);
app.use("/api/update", updateReq);
app.use("/api/set", setRating);
app.use("/api/get",caregivers);
app.use("/api/add",addCaregivers);
 


app.post("/api/chat", (req,res)=>{
    console.log(req.body.id);
    res.redirect("http://localhost:3300/")
})

app.listen(7000, ()=>{
    console.log("backend listening to port 7000...");
})
