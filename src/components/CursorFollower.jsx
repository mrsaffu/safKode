"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function CursorFollower() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const lastMousePos = useRef({ x: 0, y: 0 })
  const isMoving = useRef(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      isMoving.current = true

      // Animate outer cursor ring with GSAP
      gsap.to(cursorRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.3,
        overwrite: "auto",
      })

      // Animate inner dot with slight delay for smooth trailing
      gsap.to(cursorDotRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        overwrite: "auto",
      })

      // Check distance for smooth animation trigger
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastMousePos.current.x, 2) + Math.pow(e.clientY - lastMousePos.current.y, 2),
      )

      if (distance > 5) {
        lastMousePos.current = { x: e.clientX, y: e.clientY }

        // Pulse effect when moving
        gsap.to(cursorRef.current, {
          boxShadow: `0 0 40px rgba(201, 31, 63, 0.8), 0 0 80px rgba(255, 215, 0, 0.4)`,
          duration: 0.2,
        })
      }
    }

    const handleMouseLeave = () => {
      isMoving.current = false
      gsap.to(cursorRef.current, {
        boxShadow: `0 0 20px rgba(201, 31, 63, 0.4), 0 0 40px rgba(255, 215, 0, 0.2)`,
        duration: 0.3,
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Outer glow ring */}
      <div
        ref={cursorRef}
        className="cursor-follower"
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid rgba(201, 31, 63, 0.6)",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 9998,
          boxShadow: "0 0 20px rgba(201, 31, 63, 0.4), 0 0 40px rgba(255, 215, 0, 0.2)",
          transform: "translate(-50%, -50%)",
          backdropFilter: "blur(1px)",
        }}
      />

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #c91f3f, #ffd700)",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 15px rgba(255, 215, 0, 0.8)",
        }}
      />
    </>
  )
}
