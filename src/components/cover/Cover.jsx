import "./Cover.css";
import desktopDarkness from "../../media/desktopDarkness.mp4";
import { useEffect, useState } from "react";

const sequences = [
    ["Jorge Valle", "Full Stack Developer"],
    ["I build modern", "responsive web applications"]
];

const typingSpeed = 70;
const deletingSpeed = 40;
const delayBetween = 2000;

const Cover = () => {
    const [displayedLines, setDisplayedLines] = useState([""]);
    const [sequenceIndex, setSequenceIndex] = useState(0);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentSequence = sequences[sequenceIndex];
        const currentLine = currentSequence[lineIndex];

        let timeout;

        if (!isDeleting) {
            if (charIndex < currentLine.length) {
                timeout = setTimeout(() => {
                    setDisplayedLines(prev => {
                        const newLines = [...prev];
                        newLines[lineIndex] = currentLine.substring(0, charIndex + 1);
                        return newLines;
                    });
                    setCharIndex(charIndex + 1);
                }, typingSpeed);
            } else {
                if (lineIndex < currentSequence.length - 1) {
                    timeout = setTimeout(() => {
                        setLineIndex(lineIndex + 1);
                        setCharIndex(0);
                        setDisplayedLines(prev => [...prev, ""]);
                    }, 500);
                } else {
                    timeout = setTimeout(() => {
                        setIsDeleting(true);
                    }, delayBetween);
                }
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayedLines(prev => {
                        const newLines = [...prev];
                        newLines[lineIndex] = currentLine.substring(0, charIndex - 1);
                        return newLines;
                    });
                    setCharIndex(charIndex - 1);
                }, deletingSpeed);
            } else {
                if (lineIndex > 0) {
                    setLineIndex(lineIndex - 1);
                    setCharIndex(currentSequence[lineIndex - 1].length);
                    setDisplayedLines(prev => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setSequenceIndex((sequenceIndex + 1) % sequences.length);
                    setDisplayedLines([""]);
                    setCharIndex(0);
                }
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, lineIndex, sequenceIndex]);

    return (
        <div className="cover-container">
            <video className="video" src={desktopDarkness} autoPlay loop muted />

            <div className="overlay">
                <div className="typing-box">
                    {displayedLines.map((line, i) => (
                        <h1 key={i} className="typing-line">
                            {line}
                            {i === displayedLines.length - 1 && <span className="cursor">|</span>}
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cover;