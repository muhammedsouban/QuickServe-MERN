import './hero.css'

import React from 'react'
import BASE_URL from '../../../config/config'
function Hero() {
    return (
        <>
            <div className='hero'>
                <img src={`${BASE_URL}/public/images/Banner.JPG`}
                    alt="" />
                    
                <div className="hero-text text-start">
                    <h1 >Bringing skilled Professionals To You</h1>
                    <input type="text" placeholder='Search For Service' />
                </div>
            </div>
        </>
    )
}

export default Hero