import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/page-transition"
import { HoverItemEffect } from "@/components/hover-effects"
import { MarioButton } from "@/components/interactive-elements"

export default function TeamPage() {
  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: "Mario",
      role: "CEO & Founder",
      bio: "A visionary leader with over 20 years of experience in the tech industry.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Leadership", "Strategy", "Business Development"],
    },
    {
      id: 2,
      name: "Luigi",
      role: "CTO",
      bio: "An expert in cutting-edge technologies with a passion for innovation.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["System Architecture", "Cloud Computing", "Web Development"],
    },
    {
      id: 3,
      name: "Peach",
      role: "Design Director",
      bio: "A creative genius who transforms ideas into beautiful, functional designs.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["UI/UX Design", "Brand Strategy", "User Research"],
    },
    {
      id: 4,
      name: "Toad",
      role: "Lead Developer",
      bio: "A coding wizard who can solve any technical challenge.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Frontend", "Backend", "Mobile Development"],
    },
    {
      id: 5,
      name: "Yoshi",
      role: "Project Manager",
      bio: "An organized professional who ensures projects are delivered on time and within budget.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Project Planning", "Team Coordination", "Client Relations"],
    },
    {
      id: 6,
      name: "Bowser",
      role: "Security Specialist",
      bio: "A cybersecurity expert who keeps our clients' data safe from threats.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Network Security", "Penetration Testing", "Risk Assessment"],
    },
    {
      id: 7,
      name: "Daisy",
      role: "Marketing Manager",
      bio: "A strategic thinker who knows how to connect brands with their audiences.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Digital Marketing", "Content Strategy", "Social Media"],
    },
    {
      id: 8,
      name: "Wario",
      role: "Business Analyst",
      bio: "A data-driven professional who uncovers insights to drive business growth.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Data Analysis", "Market Research", "Financial Planning"],
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#5c94fc]">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="font-pixel text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our talented team of experts is passionate about creating digital experiences that make a difference. Each
              member brings unique skills and perspectives to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <HoverItemEffect key={member.id}>
                <Link href={`/team/${member.id}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="relative aspect-square">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-pixel text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-[#e52521] font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.skills.slice(0, 2).map((skill) => (
                          <span key={skill} className="bg-[#5c94fc] text-white text-xs px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </HoverItemEffect>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/">
              <MarioButton>Back to Home</MarioButton>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
