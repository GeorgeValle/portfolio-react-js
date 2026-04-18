import { forwardRef } from "react";
import "./AboutStatsDialog.css";

const statsContent = {
    en: {
        kicker: "Quick Snapshot",
        title: "Key Points",
        closeLabel: "Close dialog",
        items: [
            "1+ year in collaborative projects",
            "MERN Stack",
            "Agile methodologies",
            "Systems Analyst",
        ],
    },
    es: {
        kicker: "Vista Rápida",
        title: "Puntos clave",
        closeLabel: "Cerrar ventana",
        items: [
            "1+ año en proyectos colaborativos",
            "Stack MERN",
            "Metodologías Ágiles",
            "Analista de Sistemas",
        ],
    },
};

const AboutStatsDialog = forwardRef(({ language = "en" }, ref) => {
    const currentStats = statsContent[language];

    return (
        <dialog ref={ref} className="about-dialog">
            <form method="dialog" className="about-dialog-close-form">
                <button
                    type="submit"
                    className="about-dialog-close"
                    aria-label={currentStats.closeLabel}
                >
                    ✕
                </button>
            </form>

            <div className="about-dialog-content">
                <p className="about-dialog-kicker">{currentStats.kicker}</p>
                <h3>{currentStats.title}</h3>

                <ul className="about-dialog-list">
                    {currentStats.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </dialog>
    );
});

AboutStatsDialog.displayName = "AboutStatsDialog";

export default AboutStatsDialog;