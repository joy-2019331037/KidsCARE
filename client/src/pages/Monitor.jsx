import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import Swal from 'sweetalert2';
import '../css/monitor.css'


const Monitor=()=>{
   

    const {currentUser}=useContext(AuthContext);
    const [inputs, setInputs]=useState({
        childName:"",
        userId:currentUser.id
    })
  
    const [childStatus, setChildStatus ] =useState(false)
    const [childInfo, setChildInfo] = useState({
        id:"",
        firstname:"",
        lastname : "",
        age:"",
        dob:"",
        nationality:"",
        bg:"",
        parentId:"",
        guardian:currentUser.name,
    });
    

    const changeHandler =e=>{
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}));
    }

    
    console.log(childStatus)

    const searchHandler=async e=>{
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:7000/api/get/babies", inputs);
            console.log(res);
            console.log("printing from monitor");
            if(res.data===''){
               
                Swal.fire(
                    'Sorry, No child found',
                    'Please check spelling correctly',
                    'error'
                )
                setChildStatus(false);
            }
            else{
                
                setChildStatus(true);
               
                setChildInfo({
                    id:res.data.id,
                    firstname:res.data.firstname,
                    lastname:res.data.lastname,
                    age:res.data.age,
                    dob:res.data.dob,
                    nationality:res.data.nationality,
                    bg:res.data.bg,
                    parentId:res.data.parentId,
                    guardian:currentUser.username,
                })
            }
            
            // if(res) console.log("baccha hai");
            // else
            // console.log("baccha nahi hain")
        }catch(err){
            console.log(err);
        }
    }
    return (
      <div className='container'>
            <div className='Monitor'>
        <div className='searchContent'>
            <div><label><b>Your Child Name </b></label></div>
            <input type='text' className='childName' name='childName' placeholder='Your Child Name' onChange={changeHandler}></input>

            <div className='buttonDiv'>
            <button onClick={searchHandler}className='searchButton'>Search</button>
            </div>
        </div>
       

        
        {
            childStatus && (
                <Link className="link" to={`/details/${childInfo.id}`}>
                    <div className='infoContent' >
                        <div className='photoDiv'>Photo Div</div>
                        <div><b>Child Name : </b>{childInfo.firstname} {childInfo.lastname}</div>
                        <div><b>Age : </b>{childInfo.age}</div>
                        <div><b>Date of birth : </b>{childInfo.dob}</div>
                        <div><b>Nationality : </b>{childInfo.nationality}</div>
                        <div><b>Blood Group : </b>{childInfo.bg}</div>
                        <div><b>Guardian : {childInfo.guardian}</b></div>

                     </div>
                </Link>
            )
        }
        
      </div>
      </div>
    )
}

export default Monitor;