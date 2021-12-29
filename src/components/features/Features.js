import React, { useEffect } from 'react'
import { BsFillBookmarkStarFill } from "react-icons/bs"
import "./Features.css"
import Phone from "../../assets/phoney2.png"
import Feature from './Feature'
import { featureList } from "./data.js";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    useEffect(() => {
        AOS.init({
           duration: 1000, 
        }); 
    }, []) 
    return (
        <section id='features'>
            <div className='container features'>
               <div className='u-title' data-aos="fade-down">
                   <BsFillBookmarkStarFill color='orangered' size={30}/>
                   <h2>Core Features</h2>
                   <p className='u-text-small u-text-dark'>
                   All day long people on social media are showing appreciation (likes, comments and shares) for other people’s content. It’s great to receive such attention and recognition, but what if you could receive a financial recognition? On BaiSocialX you get rewarded for publishing your own photos and videos. Your followers can like your posts and add comments, but here’s where it gets really interesting…they can also Superlike your photos and videos!
                   </p>
                </div> 
                <div className='features-content'>
                   <div className='features-left' data-aos="fade-right">
                       <img src={Phone} alt='phone' />
                    </div> 
                   <div className='features-right' data-aos="fade-left">
                       {
                           featureList.map((feature) => (
                            <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text} />
                           ))
                       }
                      
                       
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Features
