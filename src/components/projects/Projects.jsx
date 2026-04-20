import { useEffect, useMemo, useRef, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    FolderGit2,
    Languages,
    PlayCircle,
    RotateCcw,
} from "lucide-react";
import "./Projects.css";
import projectsData from "./projectsData";

const getSlidesPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1080) return 2;
    return 3;
};

const formatLabel = (value, language = "es") => {
    const labels = {
        es: {
            all: "Todas",
            html: "HTML",
            css: "CSS",
            javascript: "JavaScript",
            typescript: "TypeScript",
            react: "React",
            angular: "Angular",
            node: "Node",
            express: "Express",
            mongodb: "MongoDB",
            mysql: "MySQL",
            sql: "SQL",
            java: "Java",
            spring: "Spring",
            python: "Python",
            git: "Git",
            github: "GitHub",
            api: "API",
            responsive: "Responsivo",
            figma: "Figma",
            firebase: "Firebase",
            bootstrap: "Bootstrap",
            tailwind: "Tailwind",
            agile: "Ágil",
            dashboard: "Dashboard",
            game: "Game",
            sdd: "SDD",
            web: "Web",
        },
        en: {
            all: "All",
            html: "HTML",
            css: "CSS",
            javascript: "JavaScript",
            typescript: "TypeScript",
            react: "React",
            angular: "Angular",
            node: "Node",
            express: "Express",
            mongodb: "MongoDB",
            mysql: "MySQL",
            sql: "SQL",
            java: "Java",
            spring: "Spring",
            python: "Python",
            git: "Git",
            github: "GitHub",
            api: "API",
            responsive: "Responsive",
            figma: "Figma",
            firebase: "Firebase",
            bootstrap: "Bootstrap",
            tailwind: "Tailwind",
            agile: "Agile",
            dashboard: "Dashboard",
            game: "Game",
            sdd: "SDD",
            web: "Web",
        },
    };

    return (
        labels[language]?.[value] ??
        value.charAt(0).toUpperCase() + value.slice(1)
    );
};

const sectionText = {
    es: {
        kicker: "Portfolio",
        title: "Proyectos",
        subtitle:
            "Explorá una selección de proyectos filtrados por tecnologías. Cada tarjeta puede girarse para ver más detalles, repositorio, demo y video si está disponible.",
        counter: "proyectos",
        filter: "Filtrar por tech:",
        langButton: "EN",
        prev: "Proyecto anterior",
        next: "Proyecto siguiente",
        details: "Ver detalles",
        back: "Volver",
        featured: "Destacado",
        repo: "Repo",
        demo: "Demo",
        video: "Video",
        empty: "No hay proyectos para la tecnología seleccionada.",
        page: "Ir a la página",
    },
    en: {
        kicker: "Portfolio",
        title: "Projects",
        subtitle:
            "Explore a selection of projects filtered by technologies. Each card can flip to reveal more details, repository, live demo and video when available.",
        counter: "projects",
        filter: "Filter by tech:",
        langButton: "ES",
        prev: "Previous project",
        next: "Next project",
        details: "View details",
        back: "Back",
        featured: "Featured",
        repo: "Repo",
        demo: "Demo",
        video: "Video",
        empty: "There are no projects for the selected technology.",
        page: "Go to page",
    },
};

const Projects = () => {
    const [selectedTech, setSelectedTech] = useState("all");
    const [language, setLanguage] = useState("es");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
    const [flippedCards, setFlippedCards] = useState({});
    const [translateX, setTranslateX] = useState(0);

    
    const trackRef = useRef(null);
  const techScrollRef = useRef(null);

  const scrollTechFilters = (direction) => {
    if (!techScrollRef.current) return;

    techScrollRef.current.scrollBy({
      left: direction === "left" ? -180 : 180,
      behavior: "smooth",
    });
  };

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const ui = sectionText[language];

    const techOptions = useMemo(() => {
        const techSet = new Set();

        projectsData.forEach((project) => {
            project.tech.forEach((item) => techSet.add(item));
        });

        return ["all", ...Array.from(techSet).sort()];
    }, []);

    const filteredProjects = useMemo(() => {
        if (selectedTech === "all") return projectsData;

        return projectsData.filter((project) =>
            project.tech.includes(selectedTech)
        );
    }, [selectedTech]);

    useEffect(() => {
        setCurrentIndex(0);
        setFlippedCards({});
    }, [selectedTech, slidesPerView, language]);

    const totalProjects = filteredProjects.length;
    const maxIndex = Math.max(0, totalProjects - slidesPerView);
    const safeIndex = Math.min(currentIndex, maxIndex);
    const totalPages = Math.max(1, maxIndex + 1);

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [currentIndex, maxIndex]);

    useEffect(() => {
        if (!trackRef.current) return;

        const firstSlide = trackRef.current.querySelector(".project-slide");
        if (!firstSlide) {
            setTranslateX(0);
            return;
        }

        

        const styles = window.getComputedStyle(trackRef.current);
        const gap = parseFloat(styles.columnGap || styles.gap || "0");
        const slideWidth = firstSlide.getBoundingClientRect().width;

        setTranslateX(safeIndex * (slideWidth + gap));
    }, [safeIndex, filteredProjects, slidesPerView]);

    const goPrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const goNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const goToPage = (index) => {
        setCurrentIndex(index);
    };

    const toggleFlip = (projectId) => {
        setFlippedCards((prev) => ({
            ...prev,
            [projectId]: !prev[projectId],
        }));
    };

    const handleFrontCardClick = (projectId) => {
        if (typeof window !== "undefined" && window.innerWidth <= 768) {
          toggleFlip(projectId);
        }
      };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "es" ? "en" : "es"));
    };

    return (
        <section className="projects-section" id="projects">
            <div className="projects-inner">
                <header className="projects-header">
                    <div className="projects-title-wrap">
                        <p className="projects-kicker">{ui.kicker}</p>
                        <h2 className="projects-title">{ui.title}</h2>
                        <p className="projects-subtitle">{ui.subtitle}</p>
                    </div>

                    <div className="projects-header-actions">
                        <button
                            type="button"
                            className="projects-lang-toggle"
                            onClick={toggleLanguage}
                            aria-label={`Switch language to ${ui.langButton}`}
                        >
                            <Languages size={16} />
                            {ui.langButton}
                        </button>

                        <div className="projects-counter">
                            {totalProjects} {ui.counter}
                        </div>
                    </div>
                </header>

                <div className="projects-filter-row">
                    <span className="projects-filter-label">{ui.filter}</span>

                    <div className="projects-filter-controls">
                        <button
                            type="button"
                            className="projects-filter-arrow mobile-only"
                            onClick={() => scrollTechFilters("left")}
                            aria-label="Scroll filters left"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div ref={techScrollRef} className="projects-filter-scroll">
                            {techOptions.map((tech) => (
                                <button
                                    key={tech}
                                    type="button"
                                    className={`projects-chip ${selectedTech === tech ? "active" : ""}`}
                                    onClick={() => setSelectedTech(tech)}
                                >
                                    {formatLabel(tech, language)}
                                </button>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="projects-filter-arrow mobile-only"
                            onClick={() => scrollTechFilters("right")}
                            aria-label="Scroll filters right"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {filteredProjects.length === 0 ? (
                    <div className="projects-empty">{ui.empty}</div>
                ) : (
                    <div className="projects-carousel">
                        <div className="projects-carousel-top">
                            <button
                                type="button"
                                className="projects-arrow"
                                onClick={goPrev}
                                disabled={safeIndex === 0}
                                aria-label={ui.prev}
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <button
                                type="button"
                                className="projects-arrow"
                                onClick={goNext}
                                disabled={safeIndex === maxIndex}
                                aria-label={ui.next}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="projects-viewport">
                            <div
                                ref={trackRef}
                                className="projects-track"
                                style={{
                                    transform: `translateX(-${translateX}px)`,
                                }}
                            >
                                {filteredProjects.map((project) => {
                                    const isFlipped = !!flippedCards[project.id];
                                    const projectDescription =
                                        project.description?.[language] ?? "";
                                    const hasYoutube = Boolean(project.youtube);

                                    return (
                                        <div className="project-slide" key={project.id}>
                                            <article
                                                className={`project-card ${isFlipped ? "is-flipped" : ""}`}
                                            >
                                                <div className="project-card-inner">
                                                    <div className="project-card-face project-card-front" onClick={() => handleFrontCardClick(project.id)} >
                                                        <div className="project-media">
                                                            <img
                                                                className="project-image"
                                                                src={project.image}
                                                                alt={project.alt}
                                                            />

                                                            <div className="project-front-content">
                                                                <div className="project-front-top">
                                                                    <h3 className="project-title project-title-contrast">
                                                                        {project.title}
                                                                    </h3>

                                                                    <span className="project-category">
                                                                        {formatLabel(project.category)}
                                                                    </span>
                                                                </div>

                                                                <div className="project-tech-preview">
                                                                    {project.tech.slice(0, 4).map((tech) => (
                                                                        <span
                                                                            className="project-tech-badge"
                                                                            key={`${project.id}-${tech}`}
                                                                        >
                                                                            {formatLabel(tech)}
                                                                        </span>
                                                                    ))}
                                                                </div>

                                                                <div className="project-meta project-front-actions">
                                                                <button
                                                                    type="button"
                                                                    className="project-link project-flip-btn"
                                                                    onClick={(event) => {
                                                                        event.stopPropagation();
                                                                        toggleFlip(project.id);
                                                                    }}
                                                                >
                                                                        <RotateCcw size={16} />
                                                                        {ui.details}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="project-card-face project-card-back">
                                                        <div>
                                                            <div className="project-back-header">
                                                                <h3 className="project-back-title">
                                                                    {project.title}
                                                                </h3>

                                                                {project.featured && (
                                                                    <span className="project-featured">
                                                                        {ui.featured}
                                                                    </span>
                                                                )}
                                                            </div>

                                                            <p className="project-description">
                                                                {projectDescription}
                                                            </p>

                                                            <div className="project-back-tech">
                                                                {project.tech.map((tech) => (
                                                                    <span
                                                                        className="project-tech-badge"
                                                                        key={`${project.id}-back-${tech}`}
                                                                    >
                                                                        {formatLabel(tech)}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="project-meta">
                                                            <a
                                                                className="project-link"
                                                                href={project.repo}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                <FolderGit2 size={16} />
                                                                {ui.repo}
                                                            </a>

                                                            <a
                                                                className="project-link"
                                                                href={project.demo}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                <ExternalLink size={16} />
                                                                {ui.demo}
                                                            </a>

                                                            {hasYoutube && (
                                                                <a
                                                                    className="project-link"
                                                                    href={project.youtube}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    <PlayCircle size={16} />
                                                                    {ui.video}
                                                                </a>
                                                            )}

                                                            <button
                                                                type="button"
                                                                className="project-link project-flip-btn"
                                                                onClick={() => toggleFlip(project.id)}
                                                            >
                                                                <RotateCcw size={16} />
                                                                {ui.back}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="projects-dots">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`projects-dot ${safeIndex === index ? "active" : ""}`}
                                    onClick={() => goToPage(index)}
                                    aria-label={`${ui.page} ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;