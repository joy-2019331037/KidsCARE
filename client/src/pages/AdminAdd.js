import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import '../css/adminAdd.css';
import { Link, useNavigate } from 'react-router-dom';

const AdminAdd=()=>{
    const navigate=useNavigate();
    const [caregiver, setCaregiver]=useState({
        name:"",
        designation:"",
        experience:"",
        rating:0,
        rateCount:0
    })

    const changeHandler =e=>{
        setCaregiver(prev=>({...prev, [e.target.name]:e.target.value}));
    }



    const addHandler= async e=>{
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:7000/api/add/addCaregivers",caregiver);
            console.log(res);
            Swal.fire({
                title: "Hey Admin",
                text: "Employee successfully registered",
                icon: "success",
                button: "Ok",
            })
            console.log(res);
            navigate("/home");

        }catch(err){
            console.log(err);
            
        }
    }
    console.log(caregiver);
          



       
      

    return(
        <>
        
        <div className="Mul">   
        <label><b>New Caregiver</b></label>
        <div className="data">
            <form className="formm">
                    
                    <input className="input" placeholder="Caregiver Name" name='name' onChange={changeHandler}></input>
                    <input className="input" placeholder="Designation" name='designation' onChange={changeHandler}></input>
                    <input className="input" placeholder="Experience" name='experience' onChange={changeHandler}></input>
                    
                    <button className="addButton" onClick={addHandler}><b>Add</b></button>
            </form>
        </div>

        </div>
        </>
       
      
    );
}
export default AdminAdd;