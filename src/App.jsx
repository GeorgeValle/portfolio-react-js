
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import { useState, useEffect } from 'react';
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
//import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import SliderCertificate from "./components/sliderCertificate/SliderCertificate";
import Download from "./components/download/Download";

function App() {
    //const [count, setCount] = useState(0)
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [scrollHeight]);

    return (
        <>

        <div className="App">
            <Navbar isScrolling={scrollHeight} />
            <Cover />
            <About />
            {/* <Slider /> */}
            <SliderCertificate />
            <Info />
            <Download />
            <Footer />
        </div>

            {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}



        </>
    )
}

export default App
