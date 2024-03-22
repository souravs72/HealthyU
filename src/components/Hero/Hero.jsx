import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import '../../App.css';
import Heart from '../../assets/heart.png';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";



const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the country</span>
                </div>


                {/* Hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>At our facility, we are dedicated to assisting individuals in shaping and developing their ideas, enabling them to fulfill their potential and lead a fulfilling life to the fullest extent.</span>
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+140 </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978 </span>
                        <span>members</span>
                    </div>
                    <div>
                        <span>+50 </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>

            </div>



            <div className="right-h">
                <button className="btn">Join Now</button>
                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate </span>
                    <span>116 BPM</span>
                </div>

                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back'/>

                {/* Calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Hero;