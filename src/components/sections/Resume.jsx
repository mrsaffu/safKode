"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { resumeData } from "../../data/resume"
import "../../styles/sections/resume.css"

// Icon components for each tab
const TabIcons = {
  experience: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 3v4M8 3v4"></path>
    </svg>
  ),
  education: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6m0 0l-8.5 4.75a2 2 0 01-1.999 0L2 16m0 0V10m0 0l8.5-4.75a2 2 0 011.999 0L22 10m-11 5v6m0 0l-8-4.47M11 21v6m0 0l8-4.47"></path>
      <path d="M2 10l10-5 10 5"></path>
    </svg>
  ),
  skills: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
    </svg>
  ),
  certifications: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L15.09 8.26H22L17.82 12.61L19.91 18.87L12 14.52L4.09 18.87L6.18 12.61L2 8.26H8.91L12 2Z"></path>
    </svg>
  ),
  achievements: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9c0-1 1-2 2-2h8c1 0 2 1 2 2v8c0 1-1 2-2 2H8c-1 0-2-1-2-2V9z"></path>
      <path d="M9 6V4c0-1 1-2 2-2h2c1 0 2 1 2 2v2"></path>
    </svg>
  ),
  languages: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      <path d="M2 12h20"></path>
    </svg>
  ),
}

export const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience")

  const tabs = [
    { id: "experience", label: "Experience", data: resumeData.experience, icon: TabIcons.experience },
    { id: "education", label: "Education", data: resumeData.education, icon: TabIcons.education },
    { id: "skills", label: "Skills", data: resumeData.skills, icon: TabIcons.skills },
    { id: "certifications", label: "Certifications", data: resumeData.certifications, icon: TabIcons.certifications },
    { id: "achievements", label: "Achievements", data: resumeData.achievements, icon: TabIcons.achievements },
    { id: "languages", label: "Languages", data: resumeData.languages, icon: TabIcons.languages },
  ]

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  return (
    <section className="section resume-section">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="resume-header"
        >
          <h2>Professional Resume</h2>
          <p>Experience, education, skills & certifications</p>
          <div className="header-accent"></div>
        </motion.div>

        <div className="resume-container">
          <motion.div
            className="resume-tabs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                className={`resume-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="tab-icon">{tab.icon()}</span>
                <span className="tab-label">{tab.label}</span>
                {activeTab === tab.id && <motion.div className="tab-glow" layoutId="glow" />}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="resume-content"
            >
              {activeTab === "experience" && <ExperienceContent data={activeTabData.data} />}
              {activeTab === "education" && <EducationContent data={activeTabData.data} />}
              {activeTab === "skills" && <SkillsContent data={activeTabData.data} />}
              {activeTab === "certifications" && <CertificationsContent data={activeTabData.data} />}
              {activeTab === "achievements" && <AchievementsContent data={activeTabData.data} />}
              {activeTab === "languages" && <LanguagesContent data={activeTabData.data} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

const ExperienceContent = ({ data }) => (
  <motion.div className="timeline-container">
    {data.map((item, index) => (
      <motion.div
        key={item.id}
        className="timeline-item"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="timeline-marker"></div>
        <div className="timeline-card glass-card">
          {/* Card header with company and duration */}
          <div className="card-header">
            <div className="header-content">
              <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                {item.position}
              </motion.h3>
              <p className="company-name">{item.company}</p>
            </div>
            <span className="duration-badge">{item.duration}</span>
          </div>

          {/* Card description */}
          <p className="card-description">{item.description}</p>

          <ul className="highlights-list">
            {item.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="highlight-item"
              >
                <span className="highlight-icon">→</span>
                {highlight}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    ))}
  </motion.div>
)

const EducationContent = ({ data }) => (
  <motion.div className="timeline-container">
    {data.map((item, index) => (
      <motion.div
        key={item.id}
        className="timeline-item"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="timeline-marker education"></div>
        <div className="timeline-card glass-card">
          <div className="card-header">
            <div className="header-content">
              <motion.h3>{item.degree}</motion.h3>
              <p className="company-name">{item.institution}</p>
            </div>
            <span className="duration-badge">{item.year}</span>
          </div>
          <p className="card-description">{item.field}</p>
          <p className="card-details">{item.details}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
)

const SkillsContent = ({ data }) => (
  <motion.div className="skills-grid">
    {data.map((skillGroup, groupIndex) => (
      <motion.div
        key={skillGroup.category}
        className="skill-card glass-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
        whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(201, 31, 63, 0.2)" }}
      >
        <div className="skill-header">
          <h3>{skillGroup.category}</h3>
          <div className="skill-count">{skillGroup.items.length}</div>
        </div>
        <motion.div className="skill-tags" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {skillGroup.items.map((skill, i) => (
            <motion.span
              key={skill}
              className="skill-tag premium-tag"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              whileHover={{
                scale: 1.12,
                boxShadow: "0 10px 25px rgba(255, 215, 0, 0.3), 0 0 20px rgba(201, 31, 63, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
)

const CertificationsContent = ({ data }) => (
  <motion.div className="certificates-grid">
    {data.map((cert, index) => (
      <motion.div
        key={cert.id}
        className="cert-card glass-card"
        initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -12, rotate: 2, boxShadow: "0 30px 60px rgba(255, 215, 0, 0.15)" }}
      >
        <div className="cert-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L15.09 8.26H22L17.82 12.61L19.91 18.87L12 14.52L4.09 18.87L6.18 12.61L2 8.26H8.91L12 2Z"></path>
          </svg>
        </div>
        <div className="cert-content">
          <h3>{cert.name}</h3>
          <p className="cert-issuer">{cert.issuer}</p>
          <span className="cert-date">{cert.date}</span>
        </div>
        <div className="cert-glow"></div>
      </motion.div>
    ))}
  </motion.div>
)

const AchievementsContent = ({ data }) => (
  <motion.div className="achievements-list">
    {data.map((achievement, index) => (
      <motion.div
        key={achievement.id}
        className="achievement-card glass-card"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ x: 10, boxShadow: "0 20px 50px rgba(201, 31, 63, 0.25)" }}
      >
        <div className="achievement-icon">
          <motion.svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <path d="M12 2L15.09 8.26H22L17.82 12.61L19.91 18.87L12 14.52L4.09 18.87L6.18 12.61L2 8.26H8.91L12 2Z"></path>
          </motion.svg>
        </div>
        <div className="achievement-content">
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
        </div>
        <span className="achievement-date">{achievement.date}</span>
      </motion.div>
    ))}
  </motion.div>
)

const LanguagesContent = ({ data }) => (
  <motion.div className="languages-grid">
    {data.map((language, index) => (
      <motion.div
        key={language.name}
        className="language-card glass-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(201, 31, 63, 0.2)" }}
      >
        <div className="language-header">
          <div className="language-info">
            <h3>{language.name}</h3>
            <span className="language-proficiency">{language.proficiency}</span>
          </div>
          <div className="language-percentage">{language.level}%</div>
        </div>

        <div className="language-bar">
          <motion.div
            className="language-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${language.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          >
            <motion.div
              className="fill-shimmer"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>
        </div>
      </motion.div>
    ))}
  </motion.div>
)
