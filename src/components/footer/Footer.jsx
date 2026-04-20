import { useEffect, useState } from "react";
import "./Footer.css";

const terminalLines = [
  "> initializing contact panel...",
  "> loading profile...",
  "> Jorge Valle",
  "> Córdoba, Argentina",
  "> contact channels ready",
  "> available for new opportunities",
];

const contactLinks = [
  {
    label: "LinkedIn",
    helper: "Professional profile",
    href: "https://www.linkedin.com/in/valle-jorge/",
  },
  {
    label: "GitHub",
    helper: "Projects and code",
    href: "https://github.com/GeorgeValle",
  },
  {
    label: "Messenger",
    helper: "Direct message",
    href: "https://m.me/jorge.valle.37",
  },
];

const TYPING_SPEED = 34;
const LINE_DELAY = 260;

const Footer = () => {
  const [displayedLines, setDisplayedLines] = useState(
    terminalLines.map(() => "")
  );
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      setIsTypingComplete(true);
      return;
    }

    const currentLine = terminalLines[currentLineIndex];
    let timeoutId;

    if (currentCharIndex < currentLine.length) {
      timeoutId = window.setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return next;
        });

        setCurrentCharIndex((prev) => prev + 1);
      }, TYPING_SPEED);
    } else {
      timeoutId = window.setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, LINE_DELAY);
    }

    return () => window.clearTimeout(timeoutId);
  }, [currentLineIndex, currentCharIndex]);

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-inner">
        <div className="footer-panel">
          <div className="footer-window-bar">
            <div className="footer-window-dots" aria-hidden="true">
              <span className="window-dot dot-red" />
              <span className="window-dot dot-yellow" />
              <span className="window-dot dot-green" />
            </div>

            <span className="footer-window-title">contact.panel</span>
          </div>

          <div className="footer-terminal">
            {terminalLines.map((_, index) => {
              const lineText = displayedLines[index];
              const shouldRender =
                lineText.length > 0 ||
                index < currentLineIndex ||
                (index === currentLineIndex && !isTypingComplete);

              if (!shouldRender) return null;

              const showCursor =
                (!isTypingComplete && index === currentLineIndex) ||
                (isTypingComplete && index === terminalLines.length - 1);

              return (
                <p className="footer-line" key={index}>
                  {lineText}
                  {showCursor && <span className="footer-cursor">_</span>}
                </p>
              );
            })}
          </div>

          <div
            className={`footer-links ${isTypingComplete ? "is-visible" : ""}`}
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="footer-link-card"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="footer-link-copy">
                  <span className="footer-link-label">{link.label}</span>
                  <span className="footer-link-helper">{link.helper}</span>
                </div>
                <span className="footer-link-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div
            className={`footer-meta ${isTypingComplete ? "is-visible" : ""}`}
          >
            <span>Design by 🧑🏻‍💻 George Valle</span>
            <span>Built with Passion & technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;