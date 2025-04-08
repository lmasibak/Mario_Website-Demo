"use client"

import Link from "next/link"
import { MarioButton } from "@/components/interactive-elements"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#5c94fc] flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-pixel text-6xl md:text-8xl text-white mb-4">404</h1>
          <h2 className="font-pixel text-2xl md:text-3xl text-white mb-8">
            Oops! The page you're looking for is in another castle!
          </h2>

          <div className="mb-12 relative">
            <motion.div
              className="w-16 h-16 bg-[#e52521] rounded-full mx-auto"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <div className="w-16 h-8 bg-[#e52521] rounded-t-full"></div>
              <div className="w-16 h-8 bg-[#5c94fc]"></div>
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-[#5b9a41] rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>

          <Link href="/">
            <MarioButton>Return to Homepage</MarioButton>
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  )
}
