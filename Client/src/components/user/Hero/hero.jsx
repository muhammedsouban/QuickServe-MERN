import './hero.css'

import React from 'react'

function Hero() {
    return (
        <>
            <div className='hero'>
                <img src="http://localhost:8080/public/images/1681886137730-Me.JPG"
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