"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + Math.random() * 10, 100))
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#5c94fc]">
      <div className="mb-8 text-center">
        <h1 className="font-pixel text-4xl text-white mb-2">MARIO TECH</h1>
        <p className="text-white/80 font-pixel">Loading your adventure...</p>
      </div>

      {/* Mario character */}
      <motion.div
        className="relative w-12 h-16 mb-8"
        animate={{ x: [-50, 50], scaleX: [1, 1, 1, -1, -1, -1, 1] }}
        transition={{
          x: { repeat: Number.POSITIVE_INFINITY, duration: 2, repeatType: "reverse" },
          scaleX: { repeat: Number.POSITIVE_INFINITY, duration: 2, times: [0, 0.3, 0.5, 0.5, 0.7, 0.9, 0.9] },
        }}
      >
        <div className="w-12 h-12 bg-[#e52521] rounded-t-full"></div>
        <div className="w-12 h-4 bg-[#5c94fc]"></div>
      </motion.div>

      {/* Progress bar */}
      <div className="w-64 h-8 bg-white/20 rounded-full overflow-hidden border-4 border-white">
        <motion.div
          className="h-full bg-[#e52521]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <p className="mt-2 text-white font-pixel">{Math.round(progress)}%</p>

      {/* Coins */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        <div className="flex space-x-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-8 h-8 bg-[#fbd000] rounded-full"
              initial={{ y: 0 }}
              animate={{ y: [-10, 0] }}
              transition={{
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
