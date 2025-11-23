"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "../../data/resume";
import "../../styles/sections/projects.css";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section projects-section">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Projects</h2>
          <p>Featured work and case studies</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {resumeData.projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
                <div className="project-overlay">
                  <motion.button
                    className="view-btn"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(201, 31, 63, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const projectImages = [
    project.image || "/placeholder.svg",
    project.image2 || "/placeholder.svg",
    project.image3 || "/placeholder.svg",
    project.image4 || "/placeholder.svg",

  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          className="modal-close"
          onClick={onClose}
          whileHover={{ scale: 1.2, rotate: 90 }}
        >
          ×
        </motion.button>

        <div className="modal-gallery">
          <motion.img
            key={currentImageIndex}
            src={projectImages[currentImageIndex]}
            alt={`${project.title} - view ${currentImageIndex + 1}`}
            className="modal-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="gallery-nav">
            {projectImages.map((_, index) => (
              <motion.button
                key={index}
                className={`gallery-dot ${
                  currentImageIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="modal-info">
          <h2>{project.title}</h2>
          <p className="modal-description">{project.description}</p>

          <div className="modal-tech">
            <h4>Technologies Used</h4>
            <div className="tech-stack">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="tech-tag"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="modal-links">
            <motion.a
              href={project.link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live
            </motion.a>
            <motion.a
              href={project.github}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub Repo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
