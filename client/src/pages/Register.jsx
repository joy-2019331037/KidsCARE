import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import swal from 'sweetalert'
import logo from '../img/kidscare.jpeg'

import home from '../img/home.png'
import '../css/register.css'

const Register=()=>{
    const [inputs, setInputs]=useState({
        username:"",
        email:"",
        password:"",
        type:"u",
        address:"",
        contact:"",
    })

    const [err, setError]=useState(null);

    const navigate=useNavigate();

    const changeHandler =e=>{
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}));
    }

    const submitHandler= async e=>{
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:7000/api/auth/register",inputs);
            swal({
                title: "Congrats",
                text: "You have been successfully registered",
                icon: "success",
                button: "Ok",
            })
            console.log(res);
            navigate("/login");

        }catch(err){
            setError(err.response.data);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User already exists',
               
            })
            console.log(err);
        }
    }
    console.log(inputs);
    return (
        <>
        <div className='container'>
        <div className='regShikor'>
             <div>
                <img className='img' src={logo}/>
            </div>
            <div className='Content'>
                
                <h2 className='title'>Register</h2>
                <form className='form'>
                    <input required className="input" type="text" placeholder='Name' name='username' onChange={changeHandler}/>
                    <input required className="input" type="email" placeholder='Email'name='email' onChange={changeHandler}/>
                    <input required className="input" type="password" placeholder='Password' name='password' onChange={changeHandler}/>
                    <input required className="input" type="text" placeholder='Address' name='address' onChange={changeHandler}/>
                    <input required className="input" type="text" placeholder='Contact' name='contact' onChange={changeHandler}/>
                    
                    <button className='button' onClick={submitHandler}>
                        Sign Up
                    </button>

                    {/* {err && <p className='errorMessage'> <b>{err}!!</b></p>} */}
                    
                    <span className='span'>
                    <Link to="/login">Already a member?</Link> 
                    </span>
                </form> 
            </div>       
        </div>

        <Link to="/">
        <div className='homeRoute'>
            <img className='homeimg'src={home}></img>
            <label className='home'>Home</label>
        </div>
        </Link>
        </div>
        </>
    )
}

export default Register;