import React from 'react';
import "./Slider.css"

// array que contiene la info de los proyectos
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
        deploy:"https://rb.gy/izk1jc"
    },
    {
        src: "https://res.cloudinary.com/georgevalle/image/upload/v1690690417/portfolio/wiki-ideas_nc07n6.jpg",
        alt:"Project 4",
        desc:"Wiki Ideas",
        repo:"https://github.com/GeorgeValle/wiki_ideas_front",
        deploy:"https://rb.gy/55pre"
    },
    {
        src: "https://res.cloudinary.com/georgevalle/image/upload/v1690771772/portfolio/azure-store_bcifhj.jpg",
        alt:"Project 5",
        desc:"Azure Store",
        repo:"https://github.com/GeorgeValle/azur-store",
        deploy:"https://rb.gy/hqtf7"
    },
    {
        src: "https://res.cloudinary.com/georgevalle/image/upload/v1693689463/portfolio/invitation-brithday_lvhjwx.jpg",
        alt:"Project 6",
        desc:"Invitation Birthday",
        repo:"https://github.com/GeorgeValle/birthday-invitation",
        deploy:"https://rb.gy/iacrz"
    },
    {
        src: "https://res.cloudinary.com/georgevalle/image/upload/v1751514617/portfolio/colaneri_e_hijos_h5dr19.png",
        alt:"Project 7",
        desc:"Face Race",
        repo:"https://github.com/GeorgeValle/birthday-invitation",
        deploy:"https://colaneriehijos.netlify.app/"
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
            
            <span>
                <a href={slide.deploy} target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-chrome github"></i>
                    </a>
            </span>
        </div>
    </div>
))

export default slides;