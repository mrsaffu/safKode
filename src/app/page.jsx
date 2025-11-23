"use client"

import { useEffect } from "react"
import { Landing } from "../components/Landing"
import { Dashboard } from "../components/Dashboard"
import { CursorFollower } from "../components/CursorFollower"
import { ParticleEffect } from "../components/ParticleEffect"
import { SpotlightGlow } from "../components/SpotlightGlow"
import "../styles/portfolio.css"
import "../styles/cursor.css"

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <main className="portfolio-main">
      <CursorFollower />
      <ParticleEffect />
      <SpotlightGlow />
      <Landing />
      <Dashboard />
    </main>
  )
}
