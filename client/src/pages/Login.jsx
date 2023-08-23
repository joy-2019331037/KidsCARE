import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import Swal from 'sweetalert2';
import home from '../img/home.png'
import logo from '../img/kidscare.jpeg'
import '../css/login.css'

const Login=()=>{
    const [inputs, setInputs]=useState({
        username:"",
        password:"",
    })

    const [err, setError]=useState(null);

    const navigate=useNavigate();

    const {login}=useContext(AuthContext);
    

    const changeHandler =e=>{
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}));
    }

    const loginHandler= async e=>{
        e.preventDefault();

        try{
           await login(inputs);
           
            navigate("/home");
        }catch(err){
            setError(err.response.data);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid credentials provided',
               
            })
            console.log(err);
        }
    }
    
    return (
        <>
       <div className='container'>
       <div className='shikor'>
            <div>
                <img className='img' src={logo}/>
            </div>
            <div className='Content'>
                <h2 className='title'>Sign In</h2>
                <form className='form'>
                    <input className="input" type="text" placeholder='Your Name' name ='username' onChange={changeHandler}/>
                    <input className="input" type="password" placeholder='Your Password' name='password' onChange={changeHandler}/>
                    {/* {err && <p className='errorMessage'><b>{err}!</b></p>} */}
                    <button className='button' onClick={loginHandler}>
                        Sign In
                    </button>
                    <span className='span'>
                    <Link to="/register">Don't have an account?</Link> 
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

export default Login;