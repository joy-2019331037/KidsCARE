import React from 'react'
import '../css/index.css'
import img from '../img/child.jpg'
import KIDSCARE from '../img/kidscare.jpeg'
import { Link } from 'react-router-dom'

import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/img4.jpg'
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
        <>
            <div className='root' >   
                <div className='header' style={myStyle}>
                    <div className='titleDiv'>
                        <img className='kidscare'src={KIDSCARE}/>
                            <div className='titleForKidscare'>KidsCARE</div>
                    </div>
                    <Link to="/login"> <button className='getStarted'>Get Started</button></Link>  
                </div>
            </div>
            

            <hr></hr>

            {/* <div className='middleDiv'>
            <div className=''>
                    <label className='middletitle'><b>Delight for your kids</b></label>
                    <hr className='hr'></hr>
                    <div className='info'>
                    KidsCARE offer delightful events and practices for your kids
                    </div>
                </div>
                <img classname='img4' src={img4}/>

            </div> */}

            <div className='div2'>
                <img classname='img' src={img2}/>
                <div className='2content'>
                    <label className='div2title'><b>We Have the Best Teachers</b></label>
                    <hr className='hr'></hr>
                    <div className='info'>
                    As we Dream Big and set our standards high, we recognize that the pursuit of excellence is best achieved through ongoing review, meaningful communication, and teamwork. Our teachers are highly trained with the compassion and dedication to inspire your child to look beyond the sky and help them reach their fullest potential.
                    </div>
                </div>
            </div>

           
            <div className='div3'>
                <div className='3content'>
                    <label className='div3title'><b>About Us</b></label>
                    <hr className='hr'></hr>
                    <div className='info'>
                    KidsCARE is a community-based not for profit organisation that has been operating five years in Bangladesh. Offering early education for children aged 6 weeks-5½ years. The centre uses the Early Years Learning Framework. KidsCARE also offers a fully approved kindergarten program.  
                    KidsCARE is operated by the dedicated staff and the Parent Committee.
                    </div>
                </div>
                <img classname='img3' src={img3}/>
                
            </div>


            <div className='dabba'>
                
                    <div className='Lekha'>Contact Us 
                    </div>
                    <div className='no'>
                        +880-1311338931, +880-1521771459
                    </div>
                    <div className='mail'>
                        KidsCARE_official@gmail.com
                    </div>
            </div>

           
</>
    );
}

export default Index;