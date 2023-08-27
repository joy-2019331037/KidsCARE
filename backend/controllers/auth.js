import db from '../db.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register=(req,res)=>{
    //check existing user
    const q = "select * from users where email=? or username=?";

    db.query(q,[req.body.email,req.body.name],(err,data)=>{
        if(err) return res.json(err);

        if(data.length) //means if there is already a user with that email or username
        return res.status(409).json("User already exists");


        //hash the password and create new user

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);

        const q = "insert into users (`username`,`password`, `type`, `email`, `address`, `contact`) values(?)";

        const values=[
            req.body.username,
            hash,//this is our hashed password
            "user",
            req.body.email,
            req.body.address,
            req.body.contact,
        ];

        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);

            return res.status(200).json("You have been successfully registered!");
        })
    });
}


export const login=(req,res)=>{
   
    const q ="select * from users where username=?";

    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.json(err);

        //if no such user exits
        if(data.length===0) return res.status(404).json("User not found hehe!");

        //check if password is correct
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);


        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!");
        

        //token validation
        const token= jwt.sign({id:data[0].id},"jwtkey");
        const {password, ...other}=data[0];

        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(other)

        
        // req.session.user=data[0];
        // console.log(data[0].id);      
    });
}

export const logout=(req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
}).status(200).json("User has been logged out.")

}