import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill'
import swal from 'sweetalert'
import 'react-quill/dist/quill.snow.css';
import { AuthContext } from '../context/authContext';

const Write=()=>{
    const [value,setValue]=useState('');
    console.log(value);
    const {currentUser}=useContext(AuthContext);

    const parent = currentUser.id;
    console.log(parent);

    const [inputs, setInputs]=useState({
        firstname:"",
        lastname:"",
        age:"",
        dob:"",
        nationality:"",
        bg:"",
        parentId:String(parent),
    })

    const [err, setError]=useState(null);
    const navigate=useNavigate();

    const changeHandler =e=>{
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}));
    }

    const submitHandler=async e=>{
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:7000/api/add/addInfo",inputs);
            
            swal({
                title: "Congrats",
                text: "You child has been successfully registered",
                icon: "success",
                button: "Ok",
            })
            console.log(res);
            navigate("/home");
        }catch(err){
            setError(err.response.data);
            console.log(err);
        }
    }


    return (
       <div className='container'>
             <div className='add'>
            <div className='content'> 
                <label> <b>Child Details</b></label>
                <input type="text" placeholder='First Name' name='firstname' onChange={changeHandler}/>
                <input type="text" placeholder='Last Name' name='lastname' onChange={changeHandler}/>
                <input type="text" placeholder='Age' name='age' onChange={changeHandler}/>
                <input type="text" placeholder='Date of Birth' name='dob' onChange={changeHandler}/>
                <input type="text" placeholder='Nationality' name='nationality' onChange={changeHandler}/>
                <input type="text" placeholder='Blood Group' name='bg' onChange={changeHandler}/>
                
                <label><b>Vaccines Provided</b></label>
                <div className='vaccines'>
                    <input type="checkbox" name="BCG" onChange={changeHandler}/>
                    <label>BCG</label>
                    <input type="checkbox" name="HPV" onChange={changeHandler}/>
                    <label>HPV</label>
                    <input type="checkbox" name="MMR" onChange={changeHandler}/>
                    <label>MMR</label>
                    <input type="checkbox" name="COVID" onChange={changeHandler}/>
                    <label>COVID</label>
                </div>
                
                
                
                <label><b>A few words about your kiddo!</b></label>
                <div className="editorContainer">
                    <ReactQuill className='editor' name='desc' theme="snow" value={value} onChange={setValue}/>

                </div>
            </div>
            <div className='menu'>
                <div className='item'>
                    <h2>Child Registration Forum</h2>
                   

                    <input className='imageFileChooser' type="file" name="" id="file"/>
                    <label htmlFor='file'>Upload Image</label>
                    
                    <h3>Gender</h3>

                    <input type='radio' name='cat' value='Male' id='male'></input>
                    <label>Male</label>
                    <input type='radio' name='cat' value='Female' id='female'></input>
                    <label>Female</label>
                </div>
                <button className='childRegButton' onClick={submitHandler}>Submit</button>
            </div>
        </div>
       </div>
    )
}

export default Write;