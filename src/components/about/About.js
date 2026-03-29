import "./About.css";

const About = () => {
    return (
        <div className="about-container ">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>Systems Analyst & Fullstack Developer specializing
in the MERN stack. I combine analytical skills to
solve complex problems with hands-on experience
in developing efficient web applications. I have one
year of experience in collaborative projects (Agile),
standing out for my adaptability and technical
commitment. Additionally, I have experience
training models with PyTorch, focusing on
optimizing business processes through scalable
software and I am improving my new agent programming skills in SDD with opencode.</p>
            </div>
            <div className="about-img">
                <img src="https://res.cloudinary.com/georgevalle/image/upload/v1658718724/portfolio/about-me-700px_a82pgx.jpg" alt="about me"/>
            </div>
        </div>
    )
}

export default About