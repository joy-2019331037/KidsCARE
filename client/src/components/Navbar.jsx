import React, { useContext,useState } from 'react'

import {Link, useSearchParams} from 'react-router-dom'
import { AuthContext } from '../context/authContext';

import Swal from 'sweetalert2';
import Logo from '../img/kidscare.jpeg'
import home from '../img/home.png'

const Navbar=()=>{
    const {currentUser, logout}=useContext(AuthContext);
    const [type,setType]=useState(false);
    
   const [details, setDetails]=useState({
    name:"",
    email:"",
    address:"",
    contact:""
   })
    
    const clickHandler=(e)=>{
        e.preventDefault();
        setDetails({
            name:currentUser.username,
            email:currentUser.email,
            address:currentUser.address,
            contact:currentUser.contact
        })
        var str="Name : "+ details.name+'\n'+ "Email : " + details.email + '\n' + "Address : " + details.address + '\n' + "Contact : " + details.contact  ;
        Swal.fire({
           title:"User Profile",
           icon:'info',
           html: '<pre>' + str + '</pre>',
           customClass: {
             popup: 'format-pre'
           }
        })
        if(currentUser.type=="admin"){
            setType(true)
        }
        else{
            setType(false)
        }
        
    }
    return (
        <div className='container'>
            <div className='navbar'>
            <div className='content'>
                <div className='logo'>
                    <Link to="/home">
                    <img src={Logo} alt="logo"/>
                    </Link>
                    
                </div>
                
                {
                    currentUser.type!='admin' && 
                    (
                        <div className='links'>

                            {/* <Link className='homelink' to="/home">
                                <img  className='img' src={home}/>
                                <h6>HOME</h6>
                            </Link> */}
                            <Link className='link' to="/write">
                                <h6>REGISTER</h6>
                            </Link>
                            <Link className='link' to="/caregivers">
                                <h6>CAREGIVERS</h6>
                            </Link>
                            <Link className='link' to="/home">
                                <h6>BLOGS</h6>
                            </Link>
                            
                            <Link className='link' to="/?cat=about">
                                <h6>ABOUT</h6>
                            </Link>
                            {currentUser && 
                                <Link className='link' to='/monitor'>
                                <h6>Monitor</h6>
                                </Link>
                            }
                            <span onClick={clickHandler}>{currentUser?.username}</span>
                            {currentUser? <span onClick={logout}>Logout</span> : <Link className='link' to='/login'>Login</Link>}
                            {currentUser &&
                            (
                                <span className='write'>
                                <Link to="/req">REQ</Link>
                            </span>
                            )
                            }
                        </div>
                    )
                }


               

                {
                   currentUser.type=='admin'&& 
                    (
                        <div className='links'>
                            <Link className='link' to="/home">
                                <h6>HOME</h6>
                            </Link>
                            
                            <Link className='link' to="/caregivers">
                                <h6>CAREGIVERS</h6>
                            </Link>
                            
                            
                            <Link className='link' to="/?cat=about">
                                <h6>ABOUT</h6>
                            </Link>
                            {/* {currentUser && 
                                <Link className='link' to={`/monitor/${currentUser.id}`}>
                                <h6>Monitor</h6>
                                </Link>
                            } */}
                            <span onClick={clickHandler}>{currentUser?.username}</span>
                            {currentUser? <span onClick={logout}>Logout</span> : <Link className='link' to='/login'>Login</Link>}
                            {currentUser &&
                            (
                                <span className='write'>
                                <Link to="/adminAdmit">Admit</Link>
                            </span>
                            )
                            }
                        </div>
                    )
                }
            </div>
        </div>
        </div>
    )
}

export default Navbar;