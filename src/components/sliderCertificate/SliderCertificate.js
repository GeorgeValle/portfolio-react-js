import React from 'react';
import {useState, useEffect} from "react";
import "./SliderCertificate.css";



const SliderCertificate = () => {

    const images =["https://res.cloudinary.com/georgevalle/image/upload/v1658636376/portfolio/certificates/coderhouse-frontend_dlmbc2.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636369/portfolio/certificates/coderhouse-desarrollo-web_smuu34.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636370/portfolio/certificates/coderhouse-js_uofsye.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636365/portfolio/certificates/coderhouse-react-js_w3mw1y.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636359/portfolio/certificates/udemy-html-css_ipuy0c.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636360/portfolio/certificates/tutellus-js_itjfoa.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636354/portfolio/certificates/udemy-js-beginner_evthj0.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636365/portfolio/certificates/udemy-js-es6_lzbqrv.jpg"];
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
        // const condition= selectedIndex >0;
        // const nextIndex = condition ? selectedIndex - 1 : images.length -1;
        // setSelectedImage(images[nextIndex]);
        // setSelectedIndex(nextIndex)

    };

    const next = () =>{

        selecNewImage(selectedIndex,images)
        // const condition =selectedIndex < images.length;
        // const nextIndex = condition ? selectedIndex +1: 0;
        // setSelectedImage(images[nextIndex]);
        // setSelectedIndex(nextIndex);
    };

    return (
    <div className="certificate-container">
        <img className={loaded?"loaded":"loading"} src={`${selectedImage}`} alt="Certificate" onLoad={()=>setLoaded(true)}/>
        <div className="button-container">
            <button className="button-img" onClick={previous}>{'<'}</button>
            <button className="button-img" onClick={next}>{'>'}</button>
        </div>
    </div>
    )
}

export default SliderCertificate