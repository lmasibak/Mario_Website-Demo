import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { Coin } from "@/components/interactive-elements"

export function SiteFooter() {
  return (
    <footer className="bg-[#333] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-full bg-white p-1"
                />
              </div>
              <span className="font-pixel text-xl font-bold text-white">MARIO TECH</span>
            </div>
            <p className="text-sm text-gray-400">
              Leveling up businesses through innovative digital solutions since 1985.
            </p>
          </div>

          <div>
            <h3 className="font-pixel mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Team", path: "/team" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="text-[#e52521] mr-1">→</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-pixel mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "App Development", "Digital Marketing", "UI/UX Design"].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="text-[#e52521] mr-1">→</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-pixel mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Mail className="mt-1 h-4 w-4 text-[#e52521]" />
                <span className="text-sm text-gray-400">hello@mariotech.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#e52521] mt-1 h-4 w-4">📍</span>
                <span className="text-sm text-gray-400">123 Mushroom Kingdom, World 1-1</span>
              </li>
            </ul>
            <div className="mt-4">
              <Coin />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Mario Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
