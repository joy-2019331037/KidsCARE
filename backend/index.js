import express from "express"

import authRoutes from "./routes/auth.js";
import addRoutes from "./routes/addInfos.js";
import babyRoutes from './routes/babies.js';

import cookieParser from "cookie-parser";
import session from 'express-session';
import bodyParser from "body-parser";
import cors from 'cors';


const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true,
}))
app.use(bodyParser.urlencoded({urlencoded:true}));
app.use(session({
    key:"userId",
    secret:"secret",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24,
    }
}))



app.use("/api/auth",authRoutes);
app.use("/api/add",addRoutes);
app.use("/api/get",babyRoutes);

app.listen(7000, ()=>{
    console.log("backend listening to port 7000...");
})
