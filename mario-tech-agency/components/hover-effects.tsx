"use client"

import { motion } from "framer-motion"
import type { PropsWithChildren } from "react"

export function HoverItemEffect({ children }: PropsWithChildren) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  )
}
