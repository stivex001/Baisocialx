import React, { useEffect } from 'react'
import "./Faq.css"
import { MdOutlineLibraryBooks } from 'react-icons/md'
import Question from './Question'
import { questions } from "./data.js"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
    useEffect(() => {
        AOS.init({
           duration: 1000, 
        }); 
    }, []) 
    return (
        <section id='faq'>
            <div className='container faq'>
            <div className='u-title' data-aos="fade-down">
                   <MdOutlineLibraryBooks color='orangered' size={30}/>
                   <h2>FAQS</h2>
                   <p className='u-text-small u-text-dark'>
                   BaiSocialX is a community-driven social media platform allowing users to publish photo and video content. It has many similarities to established social media platforms such as Facebook and Instagram, but there is one major difference: BaiSocialX is a decentralised blockchain platform where everyone can earn cryptocurrency SOCX token rewards.
                   </p>
                </div> 
                <div className='questions' data-aos="fade-up">
                    {
                        questions.map((question) => (
                            <Question title={question.title} answer={question.answer} />
                        ))
                    }
                    
                </div>
            </div>
            
        </section>
    )
}

export default Faq
