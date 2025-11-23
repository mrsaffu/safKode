"use client";
import { useEffect, useState } from "react";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Header } from "./Header";
import "../styles/landing.css";

export const Landing = () => {
  const [codeBlockIndex, setCodeBlockIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.08,
      boxShadow: "0 0 40px rgba(201, 31, 63, 0.8)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const codeBlocks = [
    [
      "const fullStackDeveloper = {",
      "  frontend: ['React', 'Vue', 'Next.js'],",
      "  backend: ['Node.js', 'Python', 'Go'],",
      "  databases: ['PostgreSQL', 'MongoDB'],",
      "  passionate: true",
      "};",
    ],
    [
      "const createMagic = () => {",
      "  const passion = 🔥;",
      "  const innovation = ∞;",
      "  const quality = ★★★★★;",
      "  return { passion, innovation, quality };",
      "};",
    ],
    [
      "const buildSolutions = async () => {",
      "  await designPhase();",
      "  await developPhase();",
      "  await testPhase();",
      "  return launchProduct();",
      "};",
    ],
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCodeBlockIndex((prev) => (prev + 1) % codeBlocks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ~ ----------------------
  const [theme, setTheme] = useState(() => {
    // default to system preference, fallback to dark
    if (typeof window !== "undefined") {
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    // apply theme class on html element for dark/light styles
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  // ~ ----------------------

  const scrollToSection = (sectionClass) => {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header  currentSection="" />
      <section className="landing" data-section="landing">
        <div className="landing-content">
          <motion.div
            className="landing-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div className="landing-text" variants={textVariants}>
              <motion.div className="name-container" variants={titleVariants}>
                <motion.h1
                  className="main-name gradient-text"
                  aria-label="Hero name"
                >
                  HELLO, I'M <span className="highlight-name">Mr. Saffu</span>
                </motion.h1>

                {/* Gradient professional tagline (small) */}
                <motion.h3
                  className="tagline gradient-subtext"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                >
                  Full Stack Developer • Creative Technologist
                </motion.h3>

                <motion.div
                  className="typing-roles"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.25 }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer",
                        "Creative Technologist",
                        "UI/UX-focused Engineer",
                      ],
                      autoStart: true,
                      loop: true,
                      pauseFor: 2200,
                      deleteSpeed: 30,
                    }}
                  />
                </motion.div>
              </motion.div>

              <motion.p
                className="landing-subtitle elevator-pitch"
                variants={textVariants}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I craft elegant, scalable solutions—bridging product, design and
                engineering to build delightful digital experiences.
              </motion.p>

              <motion.p
                className="landing-description"
                variants={titleVariants}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                With end-to-end expertise across frontend, backend and UX, I
                build performant applications that people enjoy using.
              </motion.p>

              {/* ----------------------- */}

              <motion.div
                className="landing-actions"
                variants={titleVariants}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  className="btn btn-primary"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => scrollToSection("projects-section")}
                >
                  <span>View My Work</span>
                </motion.button>
                <motion.button
                  className="btn btn-secondary"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => scrollToSection("contact-section")}
                >
                  <span>Get in Touch</span>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div className="landing-visual" variants={visualVariants}>
              <motion.div
                className="accent-circle accent-1"
                variants={floatingVariants}
                animate="animate"
              ></motion.div>
              <motion.div
                className="accent-circle accent-2"
                variants={floatingVariants}
                animate="animate"
                transition={{ duration: 7, delay: 0.5 }}
              ></motion.div>

              <motion.div
                className="code-block"
                key={codeBlockIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px rgba(201, 31, 63, 0.5)",
                }}
              >
                <div className="code-header">
                  <span className="code-dot red"></span>
                  <span className="code-dot yellow"></span>
                  <span className="code-dot green"></span>
                </div>
                <pre className="code-content">
                  {codeBlocks[codeBlockIndex].map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.4 }}
                      className="code-line"
                    >
                      {line}
                    </motion.div>
                  ))}
                </pre>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <span>↓ Scroll to explore</span>
          </motion.div>
        </div>
      </section>
    </>
  );
};
