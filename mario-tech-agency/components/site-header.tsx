"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav"
import { MarioButton } from "@/components/interactive-elements"
import { motion } from "framer-motion"

export function SiteHeader() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Team", path: "/team" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[#e52521] px-4 py-3">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div className="relative h-10 w-10" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full bg-white p-1"
            />
          </motion.div>
          <span className="font-pixel text-xl font-bold text-white">MARIO TECH</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path)

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`font-pixel text-sm font-medium transition-colors ${
                  isActive ? "text-[#fbd000]" : "text-white hover:text-yellow-300"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/#contact">
            <MarioButton>Get Started</MarioButton>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
