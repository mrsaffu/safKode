"use client"

import { useEffect, useRef } from "react"

export function ParticleEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.life = 1
        this.decay = Math.random() * 0.01 + 0.005
        this.color = Math.random() > 0.5 ? "rgba(201, 31, 63" : "rgba(255, 215, 0"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life -= this.decay
      }

      draw() {
        ctx.fillStyle = `${this.color}, ${this.life})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const handleMouseMove = (e) => {
      if (Math.random() > 0.7) {
        for (let i = 0; i < 3; i++) {
          particles.push(new Particle(e.clientX, e.clientY))
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw()

        if (particles[i].life <= 0) {
          particles.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9997 }} />
}
