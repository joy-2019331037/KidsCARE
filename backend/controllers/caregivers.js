import db from '../db.js';

export const caregivers=async (req,res)=>{
    const q = "select * from caregivers"

    try {
        db.query(q,(err,data)=>{
            if(err) return res.json(err);
            console.log(data)
            return res.status(200).json(data);
        })
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "An error occured from getcaregivers(controllers)" });
    }
}