"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home } from "./sections/Home";
import { Services } from "./sections/Services";
import { Resume } from "./sections/Resume";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import "../styles/dashboard.css";
import saffulogo from "../../public/saffulogo.svg";

export const Dashboard = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const sections = [
    { id: "home", component: <Home /> },
    { id: "services", component: <Services /> },
    { id: "resume", component: <Resume /> },
    { id: "projects", component: <Projects /> },
    { id: "contact", component: <Contact /> },
  ];

  return (
    <div className="dashboard">
      {sections.map((section) => (
        <div
          key={section.id}
          data-section={section.id}
          className="dashboard-section"
        >
          {section.component}
        </div>
      ))}
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section footer-profile"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={saffulogo}
              alt="Saffu Logo"
              className="footer-logo-img"
            />

            <h3>Safwan Ahmad</h3>
            <p>Full Stack Developer & Creative Technologist</p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4>Follow</h4>
            <div className="social-links">
              <motion.a
                href="https://github.com/mrsaffu"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "var(--accent-secondary)" }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mrrsaffu/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "var(--accent-secondary)" }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="#"
                aria-label="Twitter"
                whileHover={{ scale: 1.2, color: "var(--accent-secondary)" }}
              >
                Twitter
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Safwan Ahmad. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
