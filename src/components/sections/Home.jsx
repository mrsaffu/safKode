"use client";
import { motion } from "framer-motion";
import { resumeData } from "../../data/resume";
import { Helmet } from "react-helmet-async";
import "../../styles/sections/home.css";
import saffu from "../../../public/saffu.jpg";

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 50 },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const scrollToSection = (sectionClass) => {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Saffu Portfolio — Safwan Ahmad | React.js & MERN Developer
        </title>
        <meta
          name="description"
          content="Safwan Ahmad — React.js & MERN Developer. Explore projects like Al-Qalam Academy and Bus Booking System, performance-optimized UIs and full-stack deployments on Vercel & AWS."
        />
        <link rel="canonical" href="https://saf-kode.vercel.app/" />
        <meta property="og:title" content="Saffu Portfolio — Safwan Ahmad" />
        <meta
          property="og:description"
          content="React.js & MERN Stack developer — production-ready projects, API-driven apps and deployment demos (Vercel & AWS)."
        />
        <meta
          property="og:image"
          content="https://saf-kode.vercel.app/saffulogo-social.png"
        />
      </Helmet>
      <section className="section home-section">
        <div className="section-content">
          <motion.div
            className="home-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="home-text" variants={itemVariants}>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>
              <motion.p className="intro-text" variants={itemVariants}>
                {resumeData.about}
              </motion.p>

              <motion.div
                className="quick-stats"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div className="stat" variants={statVariants}>
                  <motion.span
                    className="stat-number"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    2+
                  </motion.span>
                  <span className="stat-label">Years Experience</span>
                </motion.div>
                <motion.div className="stat" variants={statVariants}>
                  <motion.span
                    className="stat-number"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    10+
                  </motion.span>
                  <span className="stat-label">Projects Completed</span>
                </motion.div>
                <motion.div className="stat" variants={statVariants}>
                  <motion.span
                    className="stat-number"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    20+
                  </motion.span>
                  <span className="stat-label">Happy Clients</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="cta-buttons"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="btn btn-primary"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 30px rgba(201, 31, 63, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("projects-section")}
                >
                  View My Work
                </motion.button>
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact-section")}
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div className="home-visual" variants={itemVariants}>
              <div className="avatar-container">
                <motion.img
                  src={saffu}
                  alt="Safwan Ahmad"
                  whileHover={{ scale: 1.08, rotateY: 10 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="avatar-decoration"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
