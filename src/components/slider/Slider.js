import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
    return (
        <div className="carousel-container spikes">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div>
            <Carousel
                slidesPerPage={3}
                arrows
                infinite
                animationSpeed={200}
                centeredSlides
                offset={50}
                itemwidth={400}
                slides={Slides}
                breakpoints={{
                    960:{
                        slidesPerPage:1,
                        arrows:false,
                        itemwidth:250,
                    },
                }}
                

            />
        
        </div>
    )
}

export default Slider