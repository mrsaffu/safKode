"use client"
import { motion } from "framer-motion"
import { resumeData } from "../../data/resume"
import "../../styles/sections/services.css"

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 50 },
    },
  }

  const serviceIcons = {
    code: "/services/web-development.svg",
    layers: "/services/full-stack.svg",
    palette: "/services/ui-ux.svg",
    network: "/services/api.svg",
    cloud: "/services/cloud.svg",
    settings: "/services/devops.svg",
  }

  const getServiceIcon = (iconName) => {
    return serviceIcons[iconName] || "/services/default.svg"
  }

  return (
    <section className="section services-section">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Services</h2>
          <p>Comprehensive solutions tailored to your needs</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {resumeData.services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px rgba(201, 31, 63, 0.3)",
                borderColor: "rgba(201, 31, 63, 0.6)",
              }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <div className="service-icon-wrapper">
                <img
                  src={getServiceIcon(service.icon) || "/placeholder.svg"}
                  alt={service.title}
                  className="service-icon"
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.a href="#contact" className="service-link" whileHover={{ x: 5 }}>
                Learn more →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
