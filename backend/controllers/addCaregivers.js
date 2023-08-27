import db from '../db.js';

export const addCaregivers=(req,res)=>{
    const q = "insert into caregivers (`name`,`designation`,`experience`, `rating`,`rateCount`) values(?)";
    console.log(req.body.name);
    const values=[
        req.body.name,
        req.body.designation,
        req.body.experience,
       req.body.rating,
       req.body.rateCount
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        console.log(data);
        return res.status(200).json("Employee has been successfully registered!");
    })
}

