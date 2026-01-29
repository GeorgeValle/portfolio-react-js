import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Jorge Valle</h1>
                <p>Cordoba, Argentina</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>Come on, let&#39;s get started</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design by George Valle
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/valle-jorge/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="m.me/jorge.valle.37" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook-messenger messenger"></i>
                    </a>
                    <a href="https://github.com/GeorgeValle" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github github"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer