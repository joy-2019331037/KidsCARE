import db from '../db.js';

export const getreq=async (req,res)=>{
    const q = "select * from requests"

    try {
        db.query(q,(err,data)=>{
            if(err) return res.json(err);
            console.log(data)
            return res.status(200).json(data);
        })
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "An error occured from getreq(controllers)" });
    }
}

export const getSpecificReq=async(req,res)=>{
    const q = "select * from requests where childId=?"
    const {id}=req.body;
    console.log(id);
    try {
        db.query(q,[req.body.id],(err,data)=>{
            if(err) return res.json(err);
            console.log(data)
            return res.status(200).json(data);
        })
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "An error occured from getreq(controllers)" });
    }
}
var count, c_v, c_a;

export const getAdmittedReq=async(req,res)=>{
    const q = "select * from requests where approved='y' and checkOut=''"
    
    try {
        db.query(q,(err,data)=>{
            if(err) return res.json(err);
            console.log(data.length);
            count=data.length;
            const qu="select * from vacancy where id=1";
            db.query(qu,(err,data)=>{
                const v = data[0];
                c_v=v.vacancy;
                c_a=v.admitted;
                
            })
            
            const query="Update vacancy set vacancy=?,admitted=? where id=1";
            const n_v=c_v-count;
            const n_a=c_a+count;
            db.query(query,[n_v,n_a],(err,data)=>{

            })
            return res.status(200).json(data);
        })
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "An error occured from getreq(controllers)" });
    }
}