"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function MagneticButton({ children, className = "", magnetStrength = 0.3 }) {
  const buttonRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distX = (e.clientX - centerX) * magnetStrength
      const distY = (e.clientY - centerY) * magnetStrength

      gsap.to(button, {
        x: distX,
        y: distY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      })
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [magnetStrength])

  return (
    <button ref={buttonRef} className={className}>
      {children}
    </button>
  )
}
