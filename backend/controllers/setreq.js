import db from '../db.js';

export const setreq=async (req,res)=>{
    const q = "INSERT INTO requests (`childId`, `firstname`, `lastname`, `age`, `dob`, `bg`, `guardian`, `package`, `approved`, `checkIn`,`checkOut`) VALUES (?)"

    const values=[
        req.body.id,
        req.body.firstname,
        req.body.lastname,
        req.body.age,
        req.body.dob,
        req.body.bg,
        req.body.guardian,
        req.body.package,
        "n",'',''
    ];
    try {
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            
            // if(data.length) //means if there is already a ruquest with that childId
            // return res.status(409).json({msg:"User already exists"});

            return res.status(200).json(data+"");
        })
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "An error occured" });
    }
    
}