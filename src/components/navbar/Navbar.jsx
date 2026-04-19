import "./Navbar.css";
import { ArrowUp } from "lucide-react";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrolled = isScrolling > 40;

  return (
    <nav className={`navbar ${scrolled ? "scrolling" : "floating"}`}>
      <div className="navbar-inner">
        <button type="button" className="navbar-logo" onClick={toTheTop}>
          Jorge Valle
        </button>

        <button
          type="button"
          className={`navbar-top-btn ${scrolled ? "visible" : ""}`}
          onClick={toTheTop}
          aria-label="Back to top"
        >
          <ArrowUp size={18} strokeWidth={2.3} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;