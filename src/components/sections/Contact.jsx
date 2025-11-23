// Contact.jsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as emailjs from "@emailjs/browser";
import { resumeData } from "../../data/resume";
import "../../styles/sections/contact.css";

/* react-icons imports */
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

/* ---------- EmailJS config (keep your values) ---------- */
const EMAILJS_SERVICE_ID = "service_2mdnvyf";
const EMAILJS_TEMPLATE_FORWARD = "template_di2lf46";
const EMAILJS_PUBLIC_KEY = "q7Gu9Vu7YlwVxho4K";
/* ------------------------------------------------------- */

/*
  Uploaded file path (kept for future use if you want a logo URL).
  Per the developer note, this path will be transformed to a URL in the tooling pipeline.
*/
const LOGO_URL = "/mnt/data/Safwan_Resume.pdf"; // kept for future use but not used in UI

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    hp: "", // honeypot
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // init emailjs
  useEffect(() => {
    if (typeof window !== "undefined" && EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log("EmailJS initialized");
      } catch (err) {
        console.warn("EmailJS init", err);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.hp) return; // honeypot

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const myEmail = resumeData?.contact?.email || "ahmadsafwan034@gmail.com";
      const forwardParams = {
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: myEmail, // ensure your template To uses {{to_email}} or hardcode To in template
      };

      console.log("Forward params:", forwardParams);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_FORWARD, forwardParams);

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "", hp: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(err?.text || err?.message || "Failed to send. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Map platform name to matching icon component
  const SocialIcon = ({ platform }) => {
    const p = platform.toLowerCase();
    if (p.includes("github")) return <FaGithub />;
    if (p.includes("linkedin")) return <FaLinkedin />;
    if (p === "twitter" || p === "x") return <FaTwitter />;
    if (p === "email") return <FiMail />;
    // fallback
    return <FaGithub />;
  };

  return (
    <section className="section contact-section">
      <div className="section-content">
        <motion.div className="section-header" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2>Get In Touch</h2>
          <p>Let's connect and explore opportunities together</p>
        </motion.div>

        <div className="contact-grid">
          {/* Form */}
          <motion.div className="contact-form-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3>Send me a message</h3>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Honeypot */}
              <div style={{ display: "none" }} aria-hidden>
                <input name="hp" value={formData.hp} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {submitted && <div className="success-message">✓ Thank you! I'll get back to you soon.</div>}
              {error && <div className="error-message">❌ {error}</div>}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="contact-info-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3>Contact Information</h3>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon" aria-hidden><FiMapPin size={20} /></span>
                <div>
                  <h4>Location</h4>
                  <p>{resumeData.contact.location}</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon" aria-hidden><FiMail size={20} /></span>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon" aria-hidden><FiPhone size={20} /></span>
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {resumeData.contact.socials.map((social) => {
                  const href = social.platform.toLowerCase() === "email" ? `mailto:${resumeData.contact.email}` : (social.url || "#");
                  return (
                    <a key={social.platform} href={href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={social.platform}>
                      <span className="social-icon"><SocialIcon platform={social.platform} /></span>
                      <span className="social-label">{social.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
