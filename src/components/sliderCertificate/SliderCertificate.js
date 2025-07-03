import React from 'react';
import {useState, useEffect} from "react";
import "./SliderCertificate.css";



const SliderCertificate = () => {

    const images =[
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636376/portfolio/certificates/coderhouse-frontend_dlmbc2.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636369/portfolio/certificates/coderhouse-desarrollo-web_smuu34.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636370/portfolio/certificates/coderhouse-js_uofsye.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636365/portfolio/certificates/coderhouse-react-js_w3mw1y.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1679457857/portfolio/certificates/certificado-backend-coder_zj0cua.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1679458129/portfolio/certificates/certificado-fullstack-coder_eq2sgl.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636359/portfolio/certificates/udemy-html-css_ipuy0c.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636360/portfolio/certificates/tutellus-js_itjfoa.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636354/portfolio/certificates/udemy-js-beginner_evthj0.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636365/portfolio/certificates/udemy-js-es6_lzbqrv.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1751517966/portfolio/certificates/certificado-de-patrones-y-disenios_j31khf.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1751517991/portfolio/certificates/figma-certificate-img_krmdhm.png"
    ];
    const [selectedIndex, setSelectedIndex] =useState(0);
    const [selectedImage, setSelectedImage] =useState(images[0]);
    const [loaded, setLoaded] =useState(false)

    useEffect(() =>{
        const interval = setInterval(()=>{
            selecNewImage(selectedIndex, images)
        },2500);
    return() => clearInterval(interval);
});



    const selecNewImage = (selectedIndex, images, next=true) => {
        setLoaded(false);
        setTimeout(()=>{
        const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
        const nextIndex =  
        next ? (condition  ? selectedIndex + 1 : 0) : condition ? selectedIndex -1 : images.length -1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
        },500);
    };

    const previous= () => {
        selecNewImage(selectedIndex,images,false)
        

    };

    const next = () =>{

        selecNewImage(selectedIndex,images)
        
    };

    return (
    <div className="certificate-container">
            <div className="certificate-img_container">
            <img className={loaded?"loaded":"loading"} src={`${selectedImage}`} alt="Certificate" onLoad={()=>setLoaded(true)}/>
            </div>
            <div className="button-container">
        
            <button className="button-img" onClick={previous}>{'<'}</button>
            <button className="button-img" onClick={next}>{'>'}</button>
        </div>
    </div>
    )
}

export default SliderCertificate