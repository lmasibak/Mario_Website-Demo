import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/page-transition"
import { HoverItemEffect } from "@/components/hover-effects"
import { MarioButton } from "@/components/interactive-elements"
import { PixelDivider } from "@/components/pixel-divider"

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  // Sample team member data based on ID
  const memberId = Number(params.id)

  // Team member data
  const teamMember = {
    id: memberId,
    name:
      memberId === 1
        ? "Mario"
        : memberId === 2
          ? "Luigi"
          : memberId === 3
            ? "Peach"
            : memberId === 4
              ? "Toad"
              : `Team Member ${memberId}`,
    role:
      memberId === 1
        ? "CEO & Founder"
        : memberId === 2
          ? "CTO"
          : memberId === 3
            ? "Design Director"
            : memberId === 4
              ? "Lead Developer"
              : "Team Member",
    image: "/placeholder.svg?height=600&width=600",
    bio: "A passionate professional with extensive experience in the tech industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    fullBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
    education: [
      "Bachelor's Degree in Computer Science, Mushroom University",
      "Master's Degree in Business Administration, Star College",
    ],
    experience: [
      {
        position: "Software Developer",
        company: "Tech Solutions Inc.",
        period: "2015-2018",
        description: "Developed and maintained web applications for clients in various industries.",
      },
      {
        position: "Senior Developer",
        company: "Digital Innovations",
        period: "2018-2021",
        description: "Led a team of developers and implemented best practices for software development.",
      },
      {
        position:
          memberId === 1
            ? "CEO & Founder"
            : memberId === 2
              ? "CTO"
              : memberId === 3
                ? "Design Director"
                : memberId === 4
                  ? "Lead Developer"
                  : "Current Role",
        company: "Mario Tech",
        period: "2021-Present",
        description: "Currently leading the company's technical strategy and overseeing all development projects.",
      },
    ],
    skills: [
      "Leadership",
      "Strategic Planning",
      "Team Management",
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Project Management",
      "Client Relations",
    ],
    projects: [
      { name: "E-commerce Platform", id: 1 },
      { name: "Mobile Banking App", id: 2 },
      { name: "Healthcare Dashboard", id: 3 },
    ],
    quote: "The only way to do great work is to love what you do.",
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero section */}
        <div className="bg-[#5c94fc] py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <Link
                href="/team"
                className="font-pixel text-white hover:text-[#fbd000] transition-colors inline-flex items-center mb-8"
              >
                ← Back to Team
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-white">
                <Image
                  src={teamMember.image || "/placeholder.svg"}
                  alt={teamMember.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:flex-1 text-center md:text-left">
                <h1 className="font-pixel text-4xl md:text-5xl font-bold text-white mb-2">{teamMember.name}</h1>
                <p className="text-2xl text-white/90 mb-6">{teamMember.role}</p>
                <p className="text-white/80 max-w-2xl">{teamMember.bio}</p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                  {teamMember.skills.slice(0, 5).map((skill) => (
                    <span key={skill} className="bg-[#e52521] text-white text-xs px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <PixelDivider color="#ffffff" direction="down" />

        {/* About section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="font-pixel text-3xl font-bold mb-6">About {teamMember.name}</h2>
                <div className="space-y-4 text-gray-700">
                  <p>{teamMember.fullBio}</p>
                  <blockquote className="border-l-4 border-[#e52521] pl-4 italic">"{teamMember.quote}"</blockquote>
                </div>

                <h3 className="font-pixel text-2xl font-bold mt-10 mb-6">Professional Experience</h3>
                <div className="space-y-8">
                  {teamMember.experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-[#5c94fc] pl-6 relative">
                      <div className="absolute w-4 h-4 bg-[#e52521] rounded-full -left-[10px] top-0"></div>
                      <h4 className="font-bold text-xl">{exp.position}</h4>
                      <p className="text-gray-600">
                        {exp.company} | {exp.period}
                      </p>
                      <p className="mt-2 text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="font-pixel text-xl font-bold mb-4">Education</h3>
                  <ul className="space-y-2">
                    {teamMember.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#e52521] font-bold">→</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-pixel text-xl font-bold mb-4">Featured Projects</h3>
                  <ul className="space-y-4">
                    {teamMember.projects.map((project) => (
                      <li key={project.id}>
                        <Link
                          href={`/portfolio/${project.id}`}
                          className="text-[#5c94fc] hover:text-[#e52521] transition-colors flex items-center gap-2"
                        >
                          <span className="text-[#e52521] font-bold">→</span>
                          <span>{project.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="font-pixel text-3xl font-bold mb-6">Want to Work With {teamMember.name}?</h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                Contact us today to discuss your project and how our team can help bring your vision to life.
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
