import React from 'react'
import {Link} from 'react-router-dom'

import Fatima from '../img/fatima.jpg'
import Lily from '../img/Lily.png'
import July from '../img/July.jpg'
import Rosie from '../img/Rosie.png'
import Ananna from '../img/Ananna.jpg'

const Caregivers=()=>{
    const caregivers=[
        {
            id:1,
            img:Fatima,
            name:"Fatima Jahan",
            designation:"Senior Employee",
            rating:"4.7",
            experience:"7 years"
        },
        {
            id:2,
            img:Lily,
            name:"Lily Islam",
            designation:"Senior Employee",
            rating:"4.3",
            experience:"5 years"
        },
        {
            id:3,
            img:July,
            name:"Margaret July",
            designation:"Junior Employee (Overseas recruitment)",
            rating:"4.1",
            experience:"2 years"
        },
        {
            id:4,
            img:Rosie,
            name:"Rosie Rahman",
            designation:"Junior Employee",
            rating:"3.9",
            experience:"1 years"
        },
        {
            id:5,
            img:Ananna,
            name:"Ananna Abedin",
            designation:"Intern",
            rating:"N/A",
            experience:"6 months"
        }
    ]


  
    return (
        <div className='container'>
            <div className='home'>
        <div className='caregivers'>
            {caregivers.map(caregiver=>(
                <div className='caregiver' key={caregiver.id}>
                    <div className='img'>
                        <img src={caregiver.img} alt="img"/>
                    </div>

                    <div className='content'>
                        
                            <h2>{caregiver.name}</h2>
                            <div className='employeeDiv'>
                            {caregiver.designation}
                            <p></p>
                            Experience <b>{caregiver.experience}</b> 
                            </div>
                            
                             <div className='ratingDiv'>
                                Rating
                                <p className='rating'>
                                    {caregiver.rating} 
                                </p>
                            </div>
                           
                            <button className='seeDetails'>See Details</button>
                            {/* <Link className='link' to={`/caregiver/${caregiver.id}`}>
                            <button className='readMoreButton'>See Details</button>
                            </Link> */}
                       
                    </div>
                </div>
            ))}

        </div>
    </div>
        </div>
    )
}

export default Caregivers;