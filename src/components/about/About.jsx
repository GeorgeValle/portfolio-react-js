import { useRef, useState } from "react";
import "./About.css";
import AboutStatsDialog from "./AboutStatsDialog";

const content = {
    en: {
      title: "About Me",
      subtitle: "Getting to know me a little better",
      description:
        "I am a Full Stack Developer focused on building responsive and scalable web applications. I enjoy combining clean frontend interfaces with solid backend logic, and I am motivated by continuous learning, teamwork and solving real-world problems.",
      button: "View Highlights",
      imageTag: "Full Stack Developer",
    },
    es: {
      title: "Sobre mí",
      subtitle: "Conociéndome un poco más",
      description:
        "Soy un desarrollador Full Stack enfocado en crear aplicaciones web responsivas y escalables. Disfruto combinar interfaces frontend limpias con una lógica backend sólida, y me motiva el aprendizaje continuo, el trabajo en equipo y la resolución de problemas reales.",
      button: "Ver puntos clave",
      imageTag: "Desarrollador Full Stack",
    },
  };

const About = () => {
  const [language, setLanguage] = useState("en");
  const dialogRef = useRef(null);

  const handleLanguageChange = (nextLanguage) => {
    if (nextLanguage === language) return;
    setLanguage(nextLanguage);
  };

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const currentContent = content[language];

  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-left">
          <div className="language-switcher">
            <button
              type="button"
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => handleLanguageChange("en")}
              aria-pressed={language === "en"}
            >
              <span className="lang-flag" aria-hidden="true">
                🇺🇸
              </span>
              EN
            </button>

            <button
              type="button"
              className={`lang-btn ${language === "es" ? "active" : ""}`}
              onClick={() => handleLanguageChange("es")}
              aria-pressed={language === "es"}
            >
              <span className="lang-flag" aria-hidden="true">
                🇦🇷
              </span>
              ES
            </button>
          </div>

          <div className="about-card-wrapper">
            <div
              className={`about-card ${language === "es" ? "is-flipped" : ""}`}
            >
              <article className="about-card-face about-card-front">
                <p className="about-card-kicker">Profile</p>
                <h2>{content.en.title}</h2>
                <h3>{content.en.subtitle}</h3>
                <p>{content.en.description}</p>

                <button
                  type="button"
                  className="about-stats-btn"
                  onClick={openDialog}
                >
                  ✨ {content.en.button}
                </button>
              </article>

              <article className="about-card-face about-card-back">
                <p className="about-card-kicker">Perfil</p>
                <h2>{content.es.title}</h2>
                <h3>{content.es.subtitle}</h3>
                <p>{content.es.description}</p>

                <button
                  type="button"
                  className="about-stats-btn"
                  onClick={openDialog}
                >
                  ✨ {content.es.button}
                </button>
              </article>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-image-card">
            <span className="about-image-tag">{currentContent.imageTag}</span>
            <img
              src="https://res.cloudinary.com/georgevalle/image/upload/v1658718724/portfolio/about-me-700px_a82pgx.jpg"
              alt="Jorge Valle"
              className="about-image"
            />
          </div>
        </div>
      </div>

      <AboutStatsDialog ref={dialogRef} language={language} />
    </section>
  );
};

export default About;