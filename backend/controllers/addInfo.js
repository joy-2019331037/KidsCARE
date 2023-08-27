
import db from '../db.js';

const addInfo=(req,res)=>{
    const q = "insert into babies (`firstname`,`lastname`,`age`, `dob`,`nationality`,`bg`,`parentId`) values(?)";
    
    const values=[
        req.body.firstname,
        req.body.lastname,
        req.body.age,
        req.body.dob,
        req.body.nationality,
        req.body.bg,
        req.body.parentId,
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);

        return res.status(200).json("Your child has been successfully registered into our system!");
    })
}

export default addInfo;