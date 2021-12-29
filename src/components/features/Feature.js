import React from 'react'
import "./Feature.css"
import { BsHexagon } from "react-icons/bs";
import { FaAccessibleIcon, FaGg } from "react-icons/fa"

const Feature = ({icon, heading, text}) => {
    return ( 
        <div className='feature'>
            <div className='feature-icon'>
                <BsHexagon color='orangered' size={55}/>
                <div className='inner-icon'>
                    <FaAccessibleIcon />
                </div>
            </div>
            <div className='feature-text'>
                <h3>{heading}</h3>
                <p className='u-text-small'>{text}</p>
            </div>
            
        </div>
    )       
}

export default Feature
