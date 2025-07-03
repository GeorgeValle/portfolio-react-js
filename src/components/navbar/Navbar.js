import "./Navbar.css";
const Navbar = ({isScrolling}) => {

    const toTheTop= ()=>{
        window.scrollTo({top:0, left:0, behavior: "smooth"});
        
    }

    return (
    <nav className={`navbar ${isScrolling> 20 ? "scrolling " : null}`}>
        <div className="navbar-logo" onClick={toTheTop}>
            Jorge Valle <span><i className={`fa-solid fa-arrow-up ${isScrolling>20?"arrow-up-scrolling":"arrow-up"} `}></i></span>
        </div>
        
    </nav>
    )
}

export default Navbar