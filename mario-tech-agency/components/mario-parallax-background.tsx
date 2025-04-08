"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Cloud } from "./interactive-elements"

export function MarioParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Sky */}
      <div className="absolute inset-0 bg-[#5c94fc]" style={{ transform: `translateY(${scrollY * 0.1}px)` }} />

      {/* Clouds */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${100 + i * 150}px`,
            left: `${(i % 2 === 0 ? 10 : 70) + i * 5}%`,
            transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`,
            zIndex: 1,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 30 : -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10 + i * 2,
            ease: "easeInOut",
          }}
        >
          <Cloud />
        </motion.div>
      ))}

      {/* Hills */}
      <div
        className="absolute left-0 right-0 bottom-0 h-64"
        style={{ transform: `translateY(${Math.min(scrollY * 0.05, 30)}px)` }}
      >
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="#5b9a41"
            d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,133.3C672,117,768,139,864,170.7C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Distant mountains */}
      <div
        className="absolute left-0 right-0 bottom-0 h-32"
        style={{ transform: `translateY(${Math.min(scrollY * 0.02, 15)}px)` }}
      >
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="#7a5433"
            opacity="0.5"
            d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,176C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}
