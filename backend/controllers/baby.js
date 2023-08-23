import { useContext } from 'react';
import db from '../db.js';


export const Baby=(req,res)=>{
   
    const q = "select b.* from babies b JOIN users u ON u.id=b.parentId where b.firstname=?  and u.id=?";

    
    db.query(q,[req.body.childName, req.body.userId],(err,data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data[0]);
    })
}

export const BabyForReq=(req,res)=>{
    const q = "select b.* from babies b JOIN users u ON u.id=b.parentId where u.id=?";

    
    db.query(q, [req.body.userId], (err, data) => {
        if (err) return res.json(err);
        console.log("Response Data:", data);
        res.set("Content-Type", "application/json");
        return res.status(200).json(data);
      });
      
}

export const singleBaby=(req,res)=>{
    const q = "select * from babies where id=?";

    
    db.query(q, [req.body.id], (err, data) => {
        if (err) return res.json(err);
        console.log("Response Data:", data);
        res.set("Content-Type", "application/json");
        return res.status(200).json(data);
      });
}

// export default {Baby, BabyForReq};