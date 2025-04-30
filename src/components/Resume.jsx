import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Footer from "./Footer";

const Resume = () => {
  const messagesRef = useRef([
    "Hi there! I am Christian Joseph Ostaga",
    "Take a look at my resume",
    "Nice to meet you!"
  ]);

  const [currentText, setCurrentText] = useState(messagesRef.current[0]);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % messagesRef.current.length;
      setCurrentText(messagesRef.current[indexRef.current]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="portfolio-container">
      <div className="image-section">
        <img src="/5.jpg" alt="Portfolio" className="portfolio-image" />
        <h2 className="typing-text">{currentText}</h2>
      </div>

      <div className="content-section">
        <header className="header">
          <nav className="nav-container">
          <img src="/logo.png" alt="CJ's Logo" className="nav-logo" />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <div style={{ textAlign: "center", marginTop: 50 }}>
            <h2>My Online Resume</h2>
            <iframe
              src="https://cjnica.github.io/RESUME-KOTO/"
              width="100%"
              height="600px"
              style={{ border: "2px solid #ccc", borderRadius: "8px" }}
              title="GitHub Deployed Website"
            ></iframe>

            {/* Resume Buttons - Centered Below Resume */}
            <div  className="resume-buttons">
              <a href="https://cjnica.github.io/RESUME-KOTO/" target="_blank" rel="noopener noreferrer">
                <button className="resume-btn">View Resume</button>
              </a>
              <a href="/resume.pdf" download>
                <button className="resume-btn">Download Resume</button>
              </a>
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Resume;
