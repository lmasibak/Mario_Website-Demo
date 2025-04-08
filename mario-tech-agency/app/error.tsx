"use client"

import { useEffect } from "react"
import Link from "next/link"
import { MarioButton } from "@/components/interactive-elements"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#e52521] flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-pixel text-4xl md:text-6xl text-white mb-4">Game Over!</h1>
          <h2 className="font-pixel text-xl md:text-2xl text-white mb-8">Something went wrong! Let's try again.</h2>

          <div className="mb-12 flex justify-center">
            <motion.div
              className="w-16 h-16 bg-[#333] rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <span className="font-pixel text-white text-xl">!</span>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MarioButton onClick={reset}>Try Again</MarioButton>
            <Link href="/">
              <MarioButton>Return to Homepage</MarioButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
