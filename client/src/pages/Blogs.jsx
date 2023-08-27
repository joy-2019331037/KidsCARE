import React from 'react'
import {Link} from 'react-router-dom'
import nutritionImage from '../img/nutrition.png';
import playingImage from '../img/playing.jpg';
import vaccineImage from '../img/vaccine.jpg';

const Blogs=()=>{
    const posts=[
        {
            id:1,
            title:"Nutrition is the key for your kids",
            desc:"Good nutrition is the cornerstone of health, and good health is the foundation of a happy life. Nutrition is important at every stage of life - but we need to pay particular attention to kids' nutrition...",
            img:nutritionImage,
        },

        {
            id:2,
            title:"Playing freely in nature boosts complex thinking and social skills in kids",
            desc:"Any activity that gets children thinking and acting spontaneously outdoors without needing adult control can help them develop complex thinking abilities, social skills, and creativity, according to a review of studies which may lead to...",
            img:playingImage,
        },

        {
            id:3,
            title:"Covid vaccine for kids",
            desc:"Jeff Gerber, who is heading the clinical trial of the Moderna vaccine in kids under 12 at CHOP, speaks with Penn Today about the trial and why getting children vaccinated is so essential...",
            img:vaccineImage,
        },
    ]

    return (
        <div className='container'>

<div className='home'>
            <div className='posts'>
                {posts.map(post=>(
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt="img"/>
                        </div>

                        <div className='content'>
                            
                                <h2>{post.title}</h2>
                                
                                <p>{post.desc}</p>
                                <Link className='link' to={`/post/${post.id}`}>
                                <button className='readMoreButton'>Read More</button>
                                </Link>
                           
                        </div>
                    </div>
                ))}

            </div>
        </div>
        </div>
    )
}

export default Blogs;