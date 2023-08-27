import { useState } from "react";
import { useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import '../css/services.css'


const Services=()=>{
    const navigate=useNavigate();
    const { currentUser } = useContext(AuthContext);
    const {id}= useParams();
    console.log(id);
    const [input,setInput]=useState({
        id:id
    })
    const [child, setChild]=useState([
        
    ]);
    const[values, setValues]=useState({
        
    })
    
    const loader=async ()=>{
        try{
            const res = await axios.post("http://localhost:7000/api/get/singleBaby", input);
            //console.log(res);
            const map = new Map(Object.entries(JSON.parse(JSON.stringify(res.data))));
            const childrenData = Array.from(map.values());
            setChild(childrenData.map((childData) => ({
                id:childData.id,
                firstname: childData.firstname ,
                lastname:childData.lastname,
                age: childData.age,
                dob:childData.dob,
                bg:childData.bg,
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
    //console.log(child)

    const setReq = async (s) => {
        
        if (child.length === 0) {
            console.log("Child data not available yet");
            return;
        }
    
        const selectedChild = child[0]; // Assuming you have only one child, adjust the index accordingly
        console.log(selectedChild);
        const updatedValues = {
            id: selectedChild.id,
            firstname: selectedChild.firstname,
            lastname: selectedChild.lastname,
            age: selectedChild.age,
            dob: selectedChild.dob,
            bg: selectedChild.bg,
            guardian: currentUser.username,
            package: s
        };
    
        setValues(updatedValues);
    
        // Now 'values' should have been updated, you can log it here
        console.log("Updated values:", updatedValues);
    
        try {
            const res = await axios.post("http://localhost:7000/api/set/req", updatedValues);
            console.log(res)
        } catch (err) {
            console.log(err);
        }

        navigate("/monitor");
    };
    

    const premiumHandler=(e)=>{
        e.preventDefault();
        Swal.fire({
            title: 'Premium Package',
            showDenyButton: true,
            text:"৳ 1000",
            confirmButtonText: 'Confirm',
            denyButtonText: `Cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Your have successfully applied for Premium Package!', '' ,'success')
              setReq('Premium');
            } 
          })
    }

    const specialHandler=(e)=>{
        e.preventDefault();
        Swal.fire({
            title: 'KidsCARE Special Package',
            showDenyButton: true,
            text:"৳ 750",
            confirmButtonText: 'Confirm',
            denyButtonText: `Cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Your have successfully applied for KidsCARE Special Package!', '' ,'success');
              setReq('KidsCARE Special');
            } 
          })
    }

    const regularHandler=(e)=>{
        e.preventDefault();
        Swal.fire({
            title: 'Regular Package',
            showDenyButton: true,
            text:"৳ 500",
            confirmButtonText: 'Confirm',
            denyButtonText: `Cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Your have successfully applied for Regular Package!', '' ,'success');
              setReq('Regular');
            } 
          })
    }




   



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
            <div className="class" onClick={premiumHandler}>
                <h4 className="pacTitle">PREMIUM</h4>
                <div className="pacDetails">Regular health checkup by our expert doctors </div>
                <div className="pacDetails">STEM (Science, Technology, Engineering, Math) Activities</div>
                <div className="pacDetails">Special Event Celebrations </div>
                <div className="charge">
                <b>৳ 1000</b>
                </div>
            </div>
            <div className="class" onClick={specialHandler}>
                <h4 className="pacTitle">  KidsCARE Special</h4>
                <div className="pacDetails">Specialized Classes for Cultural and Diversity Awareness</div>
                <div className="pacDetails">Necessary Recreational Activities for your kids</div>
                <div className="pacDetails">Nutritionally Balanced Meals</div>
                <div className="charge">
                <b>৳ 750</b>
                </div>
            </div>
            <div className="class" onClick={regularHandler}>
                <h4 className="pacTitle">REGULAR</h4>
                <div className="pacDetails">Homework Assistance (for older kids)</div>
                <div className="pacDetails">24/7 monitoring</div>
                <div className="charge">
                <b>৳ 500</b>
                </div>
            </div>
            
        </div>
        </>
    );
}
export default Services;