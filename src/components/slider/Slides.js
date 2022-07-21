import React from 'react';
import "./Slider.css"

const slidesInfo=[
    
    {
        src:"https://res.cloudinary.com/georgevalle/image/upload/v1658290142/portfolio/pasion-dance_hp7nzs.jpg",
        alt:"Project 1",
        desc:"Pasion Dance",
        repo:"https://github.com/GeorgeValle/pasion-dance",
        deploy:"http://rb.gy/cw1oin"

    },
    {
        src:"https://res.cloudinary.com/georgevalle/image/upload/v1658290134/portfolio/staff-selection_yuuwb8.jpg",
        alt:"Project 2",
        desc:"Staff Selection",
        repo:"https://github.com/GeorgeValle/staff-selection",
        deploy:"https://rb.gy/3kdviq"
    },
    {
        src: "https://res.cloudinary.com/georgevalle/image/upload/v1658290135/portfolio/my-freaky-shop_g7hqkt.jpg",
        alt:"Project 3",
        desc:"My Freaky Shop",
        repo:"https://github.com/GeorgeValle/my-freaky-shop",
        deploy:"https://rb.gy/ojewwj"
    }

]


const slides = slidesInfo.map(slide =>(

    <div className="slide-container">
        <a href={slide.deploy} target="_blank" rel="noreferrer">
            <img src={slide.src} alt={slide.alt}/>
        </a>
        <div className="slide-desc">
            <span>
                {slide.desc}
            </span>

            <span>
                <a href={slide.repo} target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github github"></i>
                    </a>
            </span>
        </div>
    </div>
))

export default slides;