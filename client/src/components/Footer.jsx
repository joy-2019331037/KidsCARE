import React from 'react'
import Logo from '../img/kidscare.jpeg'
const Footer=()=>{
    return (
       <div className='container'>
        <div className='footer'>
        <img src={Logo} alt="logo"></img>
        <span>All rights reserved ©KidsCARE 2023</span>
        <span></span>
        </div>
       </div>
    )
}

export default Footer;