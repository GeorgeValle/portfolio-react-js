import { useState } from "react";
import {
  BrainCircuit,
  Bug,
  GitBranch,
  LayoutPanelLeft,
} from "lucide-react";
import "./info.css";

const content = {
  en: {
    kicker: "Professional Value",
    title: "What I Can Bring to Your Team",
    subtitle:
      "A combination of technical skills, adaptability and continuous learning focused on building useful software.",
    languageLabel: "Language",
    cards: [
      {
        icon: LayoutPanelLeft,
        title: "Clean Frontend",
        description:
          "Responsive interfaces, reusable components and attention to visual detail.",
      },
      {
        icon: Bug,
        title: "Problem Solving",
        description:
          "Practical mindset to analyze requirements, debug issues and build maintainable solutions.",
      },
      {
        icon: GitBranch,
        title: "Workflow & Collaboration",
        description:
          "Git-based workflow, iterative improvement, debugging and adaptability in collaborative environments.",
      },
      {
        icon: BrainCircuit,
        title: "Continuous Learning",
        description:
          "React, Angular, SDD pattern and AI-assisted development with models such as GPT-5.4, Opus 5.6 and Ollama.",
      },
    ],
  },
  es: {
    kicker: "Valor profesional",
    title: "Lo que puedo aportar a tu equipo",
    subtitle:
      "Una combinación de habilidades técnicas, adaptabilidad y aprendizaje continuo enfocada en construir software útil.",
    languageLabel: "Idioma",
    cards: [
      {
        icon: LayoutPanelLeft,
        title: "Frontend cuidado",
        description:
          "Interfaces responsivas, componentes reutilizables y atención al detalle visual.",
      },
      {
        icon: Bug,
        title: "Resolución de problemas",
        description:
          "Mentalidad práctica para analizar requerimientos, depurar errores y construir soluciones mantenibles.",
      },
      {
        icon: GitBranch,
        title: "Flujo de trabajo y colaboración",
        description:
          "Trabajo con Git, mejora iterativa, debugging y adaptabilidad en entornos colaborativos.",
      },
      {
        icon: BrainCircuit,
        title: "Aprendizaje continuo",
        description:
          "React, Angular, patrón SDD y desarrollo asistido con IA usando modelos como GPT-5.4, Opus 5.6 y Ollama.",
      },
    ],
  },
};

const Info = () => {
  const [language, setLanguage] = useState("en");
  const currentContent = content[language];

  return (
    <section className="info-section" id="value">
      <div className="info-inner">
        <div className="info-header">
          <div className="info-copy">
            <p className="info-kicker">{currentContent.kicker}</p>
            <h2 className="info-title">{currentContent.title}</h2>
            <p className="info-subtitle">{currentContent.subtitle}</p>
          </div>

          <div className="info-language-box">
            <span className="info-language-label">
              {currentContent.languageLabel}
            </span>

            <div className="info-language-switcher">
              <button
                type="button"
                className={`info-lang-btn ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
              >
                🇺🇸 EN
              </button>

              <button
                type="button"
                className={`info-lang-btn ${language === "es" ? "active" : ""}`}
                onClick={() => setLanguage("es")}
                aria-pressed={language === "es"}
              >
                🇦🇷 ES
              </button>
            </div>
          </div>
        </div>

        <div className="info-grid">
          {currentContent.cards.map((card) => {
            const Icon = card.icon;

            return (
              <article className="info-card" key={card.title}>
                <div className="info-icon-wrap">
                  <Icon size={22} strokeWidth={2.1} />
                </div>

                <h3 className="info-card-title">{card.title}</h3>
                <p className="info-card-description">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Info;