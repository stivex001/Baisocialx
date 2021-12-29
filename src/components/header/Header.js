import React, { useEffect } from 'react'
import Button from '../UI/button/Button'
import "./Header.css"
import "../UI/button/Button.css"
import Phonee from "../../assets/phoney.png"
import { BsMouse } from "react-icons/bs";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
           duration: 1000, 
        }); 
    }, []) 
    return (
        <section id="header">
           <div className="container header">
               <div className='header-left' data-aos="fade-right">
                 <h1>
                    <span>THE WORLD'S LEADING</span>
                    <span>CROSS-PLATFORM SECURE</span>
                    <span>MESSAGING SYSTEM</span>
                </h1> 
                <p className='u-text-small u-text-light'>
                BaiSocialX is a community-driven social media platform allowing users to publish photo and video content. It has many similarities to established social media platforms such as Facebook and Instagram, but there is one major difference: SocialX is a decentralised blockchain platform where everyone can earn cryptocurrency SOCX token rewards.
                </p>
                <div className='header-cta'>
                   <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"}/>
                   <Button text={"How It Works"} btnClass={"btn-orange"} href={"#faq"}/>
               </div> 
               </div>
               
                <div className='header-right' data-aos="fade-left">
                <img src={Phonee} alt='phone' />
                </div>
           </div>
           <div className='floating-icon'>
                <a href='#features'>
                   <BsMouse color='#fff' size={25} className='mouse'/> 
                </a>
           </div>
        </section>
    )
}

export default Header
