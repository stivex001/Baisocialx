import React from 'react'
import "./Foooter.css"
import logo from "../../assets/logo.png"
import { SiAnaconda } from 'react-icons/si'


const Footer = () => {
    return (
        <footer id='footer'>
           <div className='container footer'>
                <div className='footer-box'>
                  <h4>Useful Links</h4>
                    <div className='footer-links'>
                        <a href="#">&bull; Support</a>
                        <a href="#">&bull; About</a>
                        <a href="#">&bull; Learn</a>
                        <a href="#">&bull; Hosting</a>
                        <a href="#">&bull; Messenger</a>
                        
                    </div>
                </div>
                <div className='footer-box'>
                <h4>Support</h4>
                    <div className='footer-links'>
                        <a href="#">&bull; Support</a>
                        <a href="#">&bull; About</a>
                        <a href="#">&bull; Learn</a>
                        <a href="#">&bull; Hosting</a>
                        <a href="#">&bull; Messenger</a>
                        
                    </div>
                </div>
                <div className='footer-box'>
                <h4>Contact Us</h4>
                <div className='footer-contact'>
                    <p>
                         Address: F.C.T Abuja, Nigeria.
                    </p>
                    <p>
                         Phone: +2348162174754
                    </p>
                    <p>
                         Fax: +2348162174754.
                    </p>
                    <p>
                         Email: info@baisocialx.com
                    </p>
                    <p>
                         Website: www.baisocialx.com
                    </p>
                </div>
                </div>
                <div className='footer-box'>
                <div className='footer-logo'>
                <SiAnaconda color='#fff' size={33}/>
                <p className='footer-logo-text'>
                    BaiSocial<span>X</span>
                </p>
                <p className='footer-u-small-text'>
                    &copy; Copyright 2021. BaiSocialX.com
                </p>
            </div>
                </div>
            </div> 
        </footer>
    )
}

export default Footer
