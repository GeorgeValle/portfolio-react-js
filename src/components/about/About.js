import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>I have knowledge in web development using different CSS frameworks. I have learned severals JavaScript courses to improve my dexterity in this programing language. I consider myself a person motivated to learn the severals technologies in the route to being fullstack developer MERN. A characteristic that I value is being in a good teamwork environment. I currently study backend programing in Coderhouse Academy.</p>
            </div>
            <div className="about-img">
                <img src="https://cdn.pixabay.com/photo/2015/12/04/14/49/hand-1076597_960_720.jpg" alt="about me"/>
            </div>
        </div>
    )
}

export default About