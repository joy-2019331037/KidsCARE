import React from 'react'
import '../css/index.css'
import img from '../img/child.jpg'
import KIDSCARE from '../img/kidscare.jpeg'
import { Link } from 'react-router-dom'
const Index=()=>{
    const myStyle={
        backgroundImage: `url(${img})` ,
        height:'92vh',
        marginTop:'0px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity:'95%',
        transparency:"100",
        gap:'350px',
        
    };
    return(
            <div className='root' >
                
                <div className='header' style={myStyle}>
                    <div className='titleDiv'>
                        <img className='kidscare'src={KIDSCARE}/>
                            <div className='titleForKidscare'>KidsCARE</div>
                    </div>
                    
                
                    <Link to="/login"> <button className='getStarted'>Get Started</button></Link>
                   
                </div>
                
            </div>
    );
}

export default Index;