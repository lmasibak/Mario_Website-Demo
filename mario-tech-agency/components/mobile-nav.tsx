"use client"

import { useState } from "react"
import { X, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Team", path: "/team" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#e52521] flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <motion.nav className="flex flex-col items-center space-y-6">
              {navItems.map((link, i) => {
                const isActive = link.path === "/" ? pathname === "/" : pathname.startsWith(link.path)

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      className={`font-pixel text-xl ${isActive ? "text-[#fbd000]" : "text-white hover:text-yellow-300"} transition-colors`}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            <motion.div
              className="absolute bottom-8 left-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="font-pixel text-[#e52521] text-xl">M</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
