"use client"

import { useEffect, useRef } from "react"

export function SpotlightGlow() {
  const spotlightRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`
        spotlightRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={spotlightRef}
      style={{
        position: "fixed",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201, 31, 63, 0.15) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        transform: "translate(-50%, -50%)",
        filter: "blur(40px)",
      }}
    />
  )
}
