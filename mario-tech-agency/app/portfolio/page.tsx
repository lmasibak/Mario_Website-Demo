import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { MarioButton } from "@/components/interactive-elements"
import { HoverItemEffect } from "@/components/hover-effects"

export default function PortfolioPage() {
  // Sample portfolio projects
  const projects = [
    {
      id: 1,
      title: "Mushroom Kingdom E-Commerce",
      category: "Web Development",
      description: "A full-featured online store with product management, cart and checkout functionality.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Star Power Mobile App",
      category: "App Development",
      description: "A fitness tracking application with gamification elements and social features.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Koopa Corp Dashboard",
      category: "UI/UX Design",
      description: "An analytics dashboard with real-time data visualization and reporting tools.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Princess Peach's Bakery",
      category: "Web Development",
      description: "A website for a local bakery with online ordering and delivery scheduling.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Luigi's Haunted Mansion VR",
      category: "App Development",
      description: "A virtual reality experience based on the famous haunted mansion adventure.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "Toad's Delivery Service",
      category: "Digital Marketing",
      description: "A marketing campaign for a new food delivery service with remarkable results.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 7,
      title: "Yoshi's Island Resort",
      category: "Web Development",
      description: "A hotel booking website with virtual tours and reservation management.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 8,
      title: "Bowser's Security Systems",
      category: "App Development",
      description: "A mobile app for controlling home security systems with smart features.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#5c94fc] py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="font-pixel text-4xl font-bold text-white mb-4">Our Portfolio</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Check out some of the amazing projects we've worked on. Each one represents a unique challenge that we've
              conquered with our expertise and creativity.
            </p>
          </div>

          {/* Portfolio filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["All", "Web Development", "App Development", "UI/UX Design", "Digital Marketing"].map((category) => (
              <HoverItemEffect key={category}>
                <Button
                  variant={category === "All" ? "default" : "outline"}
                  className={`font-pixel ${category === "All" ? "bg-[#e52521] hover:bg-[#c41e1a]" : "bg-white text-[#333] hover:bg-gray-100"}`}
                >
                  {category}
                </Button>
              </HoverItemEffect>
            ))}
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <HoverItemEffect key={project.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white">
                        <span className="font-pixel text-xs bg-[#e52521] px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-pixel text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link href={`/portfolio/${project.id}`}>
                      <MarioButton>View Details</MarioButton>
                    </Link>
                  </div>
                </div>
              </HoverItemEffect>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button variant="outline" className="font-pixel bg-white text-[#e52521] hover:bg-gray-100">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
