import { useEffect, useRef, useState } from "react";
import { Download as DownloadIcon, FileText, Printer, Check } from "lucide-react";
import "./Download.css";

const downloadOptions = [
  {
    id: "en",
    flag: "🇺🇸",
    title: "English Resume",
    subtitle: "Frontend, full stack, workflow and tools",
    buttonLabel: "Download PDF",
    href: "https://rb.gy/agsxli",
  },
  {
    id: "es",
    flag: "🇦🇷",
    title: "CV en Español",
    subtitle: "Perfil, experiencia, tecnologías y formación",
    buttonLabel: "Descargar PDF",
    href: "https://rb.gy/2h6j8b",
  },
];

const ANIMATION_DURATION = 1700;

const Download = () => {
  const [activeDownload, setActiveDownload] = useState(null);
  const timeoutRef = useRef(null);

  const handleDownload = (option) => {
    if (activeDownload) return;

    setActiveDownload(option.id);

    timeoutRef.current = window.setTimeout(() => {
      window.open(option.href, "_blank", "noopener,noreferrer");
      setActiveDownload(null);
    }, ANIMATION_DURATION);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="download-section" id="download-cv">
      <div className="download-inner">
        <header className="download-header">
          <p className="download-kicker">Resume</p>
          <h2 className="download-title">Download My CV</h2>
          <p className="download-subtitle">
          Choose the version you prefer..
          </p>
        </header>

        <div className="download-grid">
          {downloadOptions.map((option) => {
            const isActive = activeDownload === option.id;
            const isBusy = activeDownload !== null;

            return (
              <article
                key={option.id}
                className={`download-card ${isActive ? "is-printing" : ""}`}
              >
                <div className="download-card-top">
                  <span className="download-flag">{option.flag}</span>
                  <span className="download-chip">
                    <FileText size={15} />
                    PDF
                  </span>
                </div>

                <div className="download-copy">
                  <h3>{option.title}</h3>
                  <p>{option.subtitle}</p>
                </div>

                <div className="download-printer-wrap" aria-hidden="true">
                  <div className="download-paper-stack">
                    <div className="download-paper back-paper" />
                    <div className="download-paper front-paper">
                      <div className="paper-line short" />
                      <div className="paper-line" />
                      <div className="paper-line" />
                    </div>
                  </div>

                  <div className="download-printer">
                    <div className="printer-top">
                      <Printer size={20} />
                    </div>
                    <div className="printer-output">
                      <div className="download-progress-track">
                        <div className="download-progress-bar" />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className={`download-action ${isActive ? "is-active" : ""}`}
                  onClick={() => handleDownload(option)}
                  disabled={isBusy}
                >
                  <span className="download-action-icon">
                  {isActive ? <Check size={18} /> : <DownloadIcon size={18} />}
                  </span>
                  <span className="download-action-text">
                    {isActive ? "Preparing download..." : option.buttonLabel}
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Download;