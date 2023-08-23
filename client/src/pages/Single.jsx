import React from 'react'
import nutritionImage from '../img/nutrition.png';
import playingImage from '../img/playing.jpg';
import vaccineImage from '../img/vaccine.jpg';
import bloggerImage from '../img/blogger.jpg';
import { useParams } from 'react-router-dom';

const Single=()=>{
    const {id} =useParams();
    console.log(id);
    const img=[nutritionImage,playingImage,vaccineImage];

    const title=["Nutritional Requirements And Guidelines For Kids Nutrition Along With Diet Plan","Playing freely in nature may boost complex thinking, social skills in kids","COVID vaccines are essential for kids"];

    const desc=[
        [
            "Good nutrition is the cornerstone of health, and good health is the foundation of a happy life. Nutrition is important at every stage of life - but we need to pay particular attention to kids' nutrition. Children need the right nutrition early on to grow up healthy and strong and to stay healthy and strong.Good nutrition when young will help establish a solid foundation for healthy eating as an adult. Eating good, wholesome meals at home in childhood also empowers your little one with nutritional knowledge they can carry forward later in life.",

            "The nutritional requirements of children vary with age. But in general, these are some guidelines for kids nutrition you should follow: Energy-giving foods: These refer to carbohydrates and fats, which can be obtained from millets, whole-grain cereals, ghee, nuts, oilseeds and good, unrefined sugar. Body-building food: These are proteins, the cell-building foods our body needs. Sources include pulses, poultry, meat, fish, nuts and oilseeds, milk and milk products, beans and more.Protective and immunity-boosting foods: These are the vitamins and minerals that protect our body from infection and disease. They can be found in green leafy vegetables, other kinds of vegetables, fruits, eggs, dairy, spices and herbs, and some other animal-derived foods.",
            
            "Kids nutrition needs vary at different stages of their lives. Toddlers, for example, will consume smaller quantities of food compared to older kids. Infants and newborns survive exclusively on breast milk before they are introduced to semi solids and solid foods. However, there is a basic diet plan that kids should follow in order to maintain a balanced diet, that includes requisite amounts of proteins, carbohydrates, fibre, vitamins and minerals",

            " Kids nutrition must include grains: food like roti, bread, rice, potatoes and other starches. Active children who spend much time outside will need at least 5 servings of carbohydrates per day."
        ],

        [
            "Any activity that gets children thinking and acting spontaneously outdoors without needing adult control can help them develop complex thinking abilities, social skills, and creativity, according to a review of studies which may lead to innovative play spaces in childcare centres and schools.The study, published in the journal PLOS One, assessed the impacts of nature play on the health and development of children between two and 12 years of age, and found that the activities improved children's complex thinking skills, social skills, and creativity.",
            "Nature play is all about playing freely with and in nature. It's about making mud pies, creating stick forts, having an outdoor adventure, and getting dirty, said Kylie Dankiw, study co-author from the University of South Australia (UniSA).In the review, the researchers consolidated 16 studies which involved unstructured, free play in nature (forest, green spaces, outdoors, gardens) and included natural elements (highly vegetated, rocks, mud, sand, gardens, forests, ponds and water).",
            "They determined the impact of nature play on children's health and development. According to the review, these activities improved children's levels of physical activity, health-related fitness, motor skills, learning, and social and emotional development. It also showed that nature play may improve thinking and learning outcomes, such as the children's levels of attention and concentration, punctuality, settling in class, constructive play, social play, as well as imaginative and functional play.",
            "In recent years, nature play has become more popular with schools and childcare centres, with many of them re-developing play spaces to incorporate natural elements, such as trees, plants and rocks, Dankiw said.",
        ],

        [
            "Jeff Gerber, who is heading the clinical trial of the Moderna vaccine in kids under 12 at CHOP, speaks with Penn Today about the trial and why getting children vaccinated is so essential.",
            "More than half a year has passed since the first vaccine for COVID-19 was given emergency authorization, and almost half the United States has protection against the SARS-CoV-2 virus as a result. Yet children under the age of 12, for whom the vaccines haven’t yet been authorized, have been unable to take advantage.",
            "Vaccine makers have been working to make their products available to younger patients, launching clinical trials to evaluate whether the vaccines can safely and effectively protect children as young as 6 months. ",
            "One site for those trials is at Children’s Hospital of Philadelphia (CHOP), where Jeff Gerber, a pediatrician, epidemiologist, and infectious disease specialist, is heading Moderna’s effort at CHOP. To get an update on efforts to evaluate a COVID-19 vaccine for younger children, Penn Today spoke with Gerber about how the vaccines are being adapted for kids, what special considerations go into a pediatric clinical trial, and why giving children access to a COVID-19 vaccine is critical for their health: mentally, emotionally, and physically."
        ]
    ];


    const designation=["Senior Specialist, Food & Nutrition,",
     "Analyst, Social & Economic Collaboration Management",
    "Disease Control Manager, Children Health"
    ];


    return (
        <div className='container'>
<div className='single'>
            <div className='content'>
                <img src={img[id-1]} alt="img"/>
                <div className='user'>
                    <img src={bloggerImage} alt='img'/>
                    <div className='info'>
                        <div className='bloggerName'>Niloy</div>
                        <div className='bloggerDesignation'>{designation[id-1]}</div>
                        <div className='bloggerDaycare'>KidsCARE</div>
                        <div className='bloggerPosted'>Posted 2 days ago</div>
                    </div>
                </div>
                <h1>{title[id-1]}</h1>


                <p>
                {desc[id-1][0]}               
                </p>



                <p>
                {desc[id-1][1]}
                </p>




                <p>
                {desc[id-1][2]}
                </p>




                <p>
                {desc[id-1][3]}
                </p>


            </div>
            <div className='menu'>  </div>
            
        </div>
        </div>
    )
}

export default Single;