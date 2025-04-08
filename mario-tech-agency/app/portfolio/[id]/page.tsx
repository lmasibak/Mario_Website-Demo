import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/page-transition"
import { HoverItemEffect } from "@/components/hover-effects"
import { MarioButton } from "@/components/interactive-elements"
import { PixelDivider } from "@/components/pixel-divider"

export default function PortfolioDetailPage({ params }: { params: { id: string } }) {
  // Sample project data based on ID
  const projectId = Number(params.id)

  // Sample data for the detailed view
  const project = {
    id: projectId,
    title:
      projectId === 1
        ? "Mushroom Kingdom E-Commerce"
        : projectId === 2
          ? "Star Power Mobile App"
          : projectId === 3
            ? "Koopa Corp Dashboard"
            : `Project ${projectId}`,
    category: projectId % 3 === 0 ? "UI/UX Design" : projectId % 2 === 0 ? "App Development" : "Web Development",
    clientName: "Toad Industries",
    completionDate: "March 2023",
    description:
      "This project was a complex undertaking that required a deep understanding of the client's needs and innovative solutions to meet their unique challenges. We worked closely with the client team to ensure that the final product exceeded their expectations and achieved their business goals.",
    challenge:
      "The client needed a scalable solution that could handle high traffic and provide a seamless user experience across multiple devices.",
    solution:
      "We implemented a responsive design with optimized performance, integrating cutting-edge technologies to ensure the best possible user experience.",
    results:
      "The project resulted in a 40% increase in user engagement, a 25% reduction in bounce rate, and a 35% increase in conversions.",
    technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "Framer Motion"],
    mainImage: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    testimonial: {
      quote:
        "Working with Mario Tech was an incredible experience. They understood our vision and delivered a product that exceeded our expectations.",
      author: "Toadsworth",
      position: "CEO, Toad Industries",
    },
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero section with project image */}
        <div className="bg-[#5c94fc] py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <Link
                href="/portfolio"
                className="font-pixel text-white hover:text-[#fbd000] transition-colors inline-flex items-center mb-8"
              >
                ← Back to Portfolio
              </Link>
              <h1 className="font-pixel text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
              <div className="inline-block bg-[#e52521] px-3 py-1 rounded-full text-white font-pixel text-sm mb-6">
                {project.category}
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={project.mainImage || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        <PixelDivider color="#ffffff" direction="down" />

        {/* Project details */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="font-pixel text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-gray-700 mb-8">{project.description}</p>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-pixel text-xl font-bold mb-3">The Challenge</h3>
                    <p className="text-gray-700">{project.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-pixel text-xl font-bold mb-3">Our Solution</h3>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-pixel text-xl font-bold mb-3">The Results</h3>
                    <p className="text-gray-700">{project.results}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg h-fit">
                <h3 className="font-pixel text-xl font-bold mb-6">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium">{project.clientName}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{project.completionDate}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">{project.category}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Technologies</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-[#e52521] text-white text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project gallery */}
            <div className="mt-16">
              <h2 className="font-pixel text-3xl font-bold mb-8">Project Gallery</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.gallery.map((image, index) => (
                  <HoverItemEffect key={index}>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Gallery image ${index + 1}`}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </HoverItemEffect>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-16 bg-[#5c94fc] rounded-xl p-8 text-white">
              <div className="relative">
                <div className="font-serif text-6xl absolute -top-10 left-0 text-white/30">"</div>
                <blockquote className="relative z-10">
                  <p className="text-xl italic mb-4">{project.testimonial.quote}</p>
                  <footer>
                    <p className="font-pixel">
                      {project.testimonial.author}
                      <span className="font-normal block text-sm text-white/80">{project.testimonial.position}</span>
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h2 className="font-pixel text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                Let's work together to create something amazing. Contact us today to discuss your idea!
              </p>
              <HoverItemEffect>
                <Link href="/#contact">
                  <MarioButton>Contact Us</MarioButton>
                </Link>
              </HoverItemEffect>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
