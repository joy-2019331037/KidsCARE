import { useState } from "react";
import { useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";



import '../css/services.css'



const Services=()=>{
    
    const { currentUser } = useContext(AuthContext);
    const {id}= useParams();
    console.log(id);
    const [input,setInput]=useState({
        id:id
    })
    const [child, setChild]=useState([
        
    ]);
    
    const loader=async ()=>{
        try{
            const res = await axios.post("/get/singleBaby", input);
            //console.log(res);
            const map = new Map(Object.entries(JSON.parse(JSON.stringify(res.data))));
            const childrenData = Array.from(map.values());
            setChild(childrenData.map((childData) => ({
                id:childData.id,
                firstname: childData.firstname ,
                lastname:childData.lastname,
                age: childData.age,
                guardian:currentUser.username,
              })));
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        if(child.length===0)
        loader();
    },[])
    console.log(child)
    return (
        <>
        <div className="childInfo">
        {
                child.map((c)=>(
                    <div>
                        <h3>{c.firstname} {` `} {c.lastname}</h3>
                        <h5 className="h5">{c.age} years old</h5>

                    </div>
                ))
        }

        
        </div>
        <h1>{child.age}</h1>
        
        <div className="mainServices">
        <div className="choosePac"><h4>Choose Package</h4></div>
            <div className="class">
                <h4 className="pacTitle">PREMIUM</h4>
                <div className="pacDetails">welkfbwkerb</div>
            </div>
            <div className="class">
                <h4 className="pacTitle">  KidsCARE Special</h4>
                <div className="pacDetails">efwef</div>
            </div>
            <div className="class">
            <h4 className="pacTitle">REGULAR</h4>
            <div className="pacDetails">fwefwqe</div>
            </div>
        </div>
        </>
    );
}
export default Services;