"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/header.css";
import saffulogo from "../../public/saffulogo.svg";

export const Header = ({ onNavClick, currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    const section = document.querySelector(`[data-section="${id}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    onNavClick && onNavClick(id);
  };

  // handleNavClick('landing')

  return (
    <motion.header
      className={`header ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            onClick={() => {
              handleNavClick("landing");
              console.log("landing");
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img className="saffu-logo" src={saffulogo} alt="" />
          </motion.div>

          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {/* Changed: 3 spans for the hamburger bars (CSS expects 3 children) */}
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>

          <motion.nav
            className={`nav ${isMenuOpen ? "active" : ""}`}
            initial={false}
            animate={isMenuOpen ? { opacity: 1 } : { opacity: 1 }} // keep opacity 1 for layout; visibility controlled by CSS
          >
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                  }
                  transition={{ delay: index * 0.06 }}
                >
                  <motion.button
                    className={`nav-link ${
                      currentSection === item.id ? "active" : ""
                    }`}
                    onClick={() => handleNavClick(item.id)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
};
