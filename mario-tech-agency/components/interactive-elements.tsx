"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Coin component that animates when clicked
export function Coin() {
  const [spinning, setSpinning] = useState(false)
  const [count, setCount] = useState(0)
  const [coinSound] = useState(() => (typeof Audio !== "undefined" ? new Audio("/sounds/coin.mp3") : null))

  const handleClick = () => {
    setSpinning(true)
    setCount((prev) => prev + 1)

    if (coinSound) {
      coinSound.currentTime = 0
      coinSound.play().catch((e) => console.log("Audio playback error:", e))
    }

    setTimeout(() => setSpinning(false), 1000)
  }

  return (
    <motion.div
      className="cursor-pointer w-16 h-16 bg-[#fbd000] rounded-full flex items-center justify-center text-black font-bold border-4 border-[#f8c409]"
      animate={spinning ? { rotateY: 360, scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 1 }}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
    >
      {count}
    </motion.div>
  )
}

// Question block that reveals content when clicked
export function QuestionBlock({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false)
  const [blockSound] = useState(() => (typeof Audio !== "undefined" ? new Audio("/sounds/block-hit.mp3") : null))

  const handleClick = () => {
    if (blockSound) {
      blockSound.currentTime = 0
      blockSound.play().catch((e) => console.log("Audio playback error:", e))
    }
    setRevealed(true)
  }

  return (
    <div className="relative">
      {!revealed ? (
        <motion.div
          className="w-16 h-16 bg-[#fbd000] rounded-md flex items-center justify-center text-black font-bold border-4 border-[#f8c409] cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, y: -10 }}
          animate={{ y: [0, -3, 0] }}
          transition={{
            y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
            scale: { duration: 0.2 },
          }}
          onClick={handleClick}
        >
          ?
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-white rounded-md shadow-lg"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

// Animated Mario-style button
export function MarioButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const [jumpSound] = useState(() => (typeof Audio !== "undefined" ? new Audio("/sounds/jump.mp3") : null))

  const handleClick = (e: React.MouseEvent) => {
    if (jumpSound) {
      jumpSound.currentTime = 0
      jumpSound.play().catch((e) => console.log("Audio playback error:", e))
    }

    if (onClick) onClick()
  }

  return (
    <motion.button
      className="bg-[#e52521] text-white font-pixel py-3 px-6 rounded-md shadow-[0_6px_0_#c41e1a]"
      whileHover={{ y: -2, boxShadow: "0 8px 0 #c41e1a" }}
      whileTap={{ y: 4, boxShadow: "0 2px 0 #c41e1a" }}
      onClick={handleClick}
    >
      {children}
    </motion.button>
  )
}

// Animated pipe that can be used for navigation or as a decorative element
export function Pipe({
  color = "#5b9a41",
  height = 100,
  onClick,
}: { color?: string; height?: number; onClick?: () => void }) {
  const [pipeSound] = useState(() => (typeof Audio !== "undefined" ? new Audio("/sounds/pipe.mp3") : null))

  const handleClick = () => {
    if (pipeSound) {
      pipeSound.currentTime = 0
      pipeSound.play().catch((e) => console.log("Audio playback error:", e))
    }

    if (onClick) onClick()
  }

  return (
    <motion.div className="relative cursor-pointer" whileHover={{ y: -5 }} onClick={handleClick}>
      <div className="w-20 h-6 bg-black rounded-t-md"></div>
      <div style={{ backgroundColor: color, height: `${height}px` }} className="w-20 rounded-b-md"></div>
    </motion.div>
  )
}

// Animated cloud that floats
export function Cloud() {
  return (
    <motion.div
      className="w-32 h-20 bg-white rounded-full relative"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
    >
      <div className="absolute w-16 h-16 bg-white rounded-full -top-5 -left-5"></div>
      <div className="absolute w-16 h-16 bg-white rounded-full -top-5 -right-5"></div>
      <div className="absolute w-16 h-16 bg-white rounded-full -bottom-5 left-5"></div>
      <div className="absolute w-16 h-16 bg-white rounded-full -bottom-5 right-5"></div>
    </motion.div>
  )
}

// Mario character that can walk across the screen
export function MarioCharacter() {
  return (
    <motion.div
      className="relative w-12 h-16"
      animate={{
        x: ["-100%", "100vw"],
      }}
      transition={{
        x: { repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" },
      }}
    >
      <div className="w-12 h-12 bg-[#e52521] rounded-t-full"></div>
      <div className="w-12 h-4 bg-[#5c94fc]"></div>
    </motion.div>
  )
}

// Game controller that animates button presses
export function GameController() {
  const [buttonPressed, setButtonPressed] = useState<string | null>(null)

  const handleButtonPress = (button: string) => {
    setButtonPressed(button)
    setTimeout(() => setButtonPressed(null), 300)
  }

  return (
    <div className="relative w-32 h-20 bg-[#333] rounded-lg p-2">
      <div className="flex justify-between mb-2">
        {["A", "B"].map((button) => (
          <motion.div
            key={button}
            className={`w-6 h-6 rounded-full ${buttonPressed === button ? "bg-[#e52521]" : "bg-[#666]"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleButtonPress(button)}
          >
            <span className="flex items-center justify-center text-white text-xs">{button}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="w-10 h-10 bg-[#444] rounded-full relative">
          {["up", "right", "down", "left"].map((dir, index) => (
            <motion.div
              key={dir}
              className={`absolute w-4 h-4 bg-[#666] ${
                index === 0
                  ? "top-0 left-3"
                  : index === 1
                    ? "right-0 top-3"
                    : index === 2
                      ? "bottom-0 left-3"
                      : "left-0 top-3"
              } ${buttonPressed === dir ? "bg-[#e52521]" : ""}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleButtonPress(dir)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Animated background with parallax effect
export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#5c94fc]" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
      <div className="absolute top-20 left-10" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        <Cloud />
      </div>
      <div className="absolute top-40 right-20" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <Cloud />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-[#5b9a41]"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      ></div>
    </div>
  )
}

// Animated firework effect for celebrations
export function Firework() {
  return (
    <div className="relative w-full h-full">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#fbd000]"
          initial={{ x: "50%", y: "50%" }}
          animate={{
            x: `${50 + Math.cos((i / 3) * Math.PI) * 40}%`,
            y: `${50 + Math.sin((i / 3) * Math.PI) * 40}%`,
            opacity: [1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  )
}
