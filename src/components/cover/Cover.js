import React from 'react'
import "./Cover.css";
import desktopDarkness from "../../media/desktopDarkness.mp4"

const Cover = () => {


    return (
        <div className= "cover-container" >
            <video className="video" src={desktopDarkness} autoPlay loop muted></video>
            <h1>Name Last Name</h1>
            <p> Frontend Developer || Fullstack Web Developer in Progress || Cunrrently Learning Backend MERN</p>
        </div>
    )
}

export default Cover