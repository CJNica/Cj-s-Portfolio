import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Footer from "./Footer";


const Contact = () => {
  // Store messages in useRef to prevent ESLint dependency warning
  const messagesRef = useRef([
    "Hi there! I am Christian Joseph Ostaga",
    "You can call me CJ",
    "You can send me a message or connect with me ",
    "Through Github,Facebook,   ",
    "Instagram,Tiktok and Email   ",
    "Thank You!!!"
    
    
  ]);

  const [currentText, setCurrentText] = useState(messagesRef.current[0]);
  const indexRef = useRef(0); // Keeps track of current message index

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % messagesRef.current.length;
      setCurrentText(messagesRef.current[indexRef.current]);
    }, 2000); 

    return () => clearInterval(interval);
  }, []); // ✅ No unnecessary re-renders
  return (
    <div className="portfolio-container">
      {/* Left Section - Image */}
      <div className="image-section">
        <img src="/cont.jpg" alt="Portfolio" className="portfolio-image" />
        <h2 className="typing-text">{currentText}</h2>
      </div>

      {/* Right Section - Content */}
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
        <div className="contact-container"> 
      <h2>Contact Me</h2>
      <form style={{paddingTop:100}}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="fullName" placeholder="Full Name" required />
        <textarea name="message" placeholder="Your message" rows="5" required></textarea>
        
      </form>
      </div>



          <div className="button-container">
            <button type="submit">Submit</button>
            
          </div >

          <div className="cont">
          <h1 style={{color:"white"}}>Contact Me On:</h1>
          <div className="social-icons" style={{paddingTop:15 }}>
        <a href="https://web.facebook.com/cj.48041" target="_blank" rel="noopener noreferrer">
          <img style={{ width:100,height:80}} src="/fb.png" alt="Facebook" className="glow-icon" />
        </a>
        <a href="https://www.instagram.com/unluckyman03/?fbclid=IwY2xjawJ_HYdleHRuA2FlbQIxMABicmlkETF3bkpYdnZKNzNheml4b1N2AR43lEWmcUZsIof_GztEE2DHe2chf2eakj2qzqUd8zk998uZNdnROd1aMrIL0Q_aem_gX5869a42tuAcW3hoy1adw" target="_blank" rel="noopener noreferrer">
          <img style={{ width:100,height:80}} src="/ig.png" alt="Instagram" className="glow-icon" />
        </a>
        <a href="https://www.tiktok.com/@channy_g_a?_t=ZS-8vy4WBnIYQJ&_r=1" target="_blank" rel="noopener noreferrer">
          <img style={{ width:100,height:80}} src="/tiktok.png" alt="TikTok" className="glow-icon" />
        </a>
        <a href="mailto:ostagacj@gmail.com">
          <img style={{ width:100,height:80}} src="/email.png" alt="Email" className="glow-icon" />
        </a>
        <a href="https://github.com/CJNica" target="_blank" rel="noopener noreferrer">
          <img style={{ width:100,height:80}} src="/git.png" alt="GitHub" className="glow-icon" />
        </a>
      </div>
          </div>
        </main>

        <Footer />

      </div>
    </div>
  );
};

export default Contact;
