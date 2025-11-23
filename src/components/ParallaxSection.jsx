"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ParallaxSection({ children, speed = 0.5, intensity = 1, className = "" }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          gsap.to(element, {
            y: self.getVelocity() * speed * 0.1,
            opacity: 0.8 + self.progress * 0.2,
            duration: 0.5,
            overwrite: "auto",
          })
        },
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [speed])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
