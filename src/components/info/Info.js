import "./Info.css";

const Info = () => {
    return (
        <div className="info-container spikes">
            <div className="info">
                <h2> <span className="spany">Videos de Proyectos Universitarios</span> </h2>
                {/* <h3>Traducci&#243;n: Cuando eliges la esperanza, todo es posible</h3> */}
                <div className="youtube-wrapper">
                    <div className="youtube">
                        <iframe
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/bv430ZCVfrE?si=-amTDL1QIuEl0FQQ" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture; 
                            web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>

                <div className="youtube-wrapper">
                    <div className="youtube">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/1dOzcBNHlaY?si=5ekSsCZaGzbFRa5I" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media;
                            gyroscope; 
                            picture-in-picture; 
                            web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Info