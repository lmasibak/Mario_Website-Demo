import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Code, Rocket, Users, ChevronRight } from "lucide-react"
import { BackToTop } from "@/components/back-to-top"
import { MarioParallaxBackground } from "@/components/mario-parallax-background"
import { PixelDivider } from "@/components/pixel-divider"
import { PageTransition } from "@/components/page-transition"
import { HoverItemEffect } from "@/components/hover-effects"
import { MarioButton, Coin, QuestionBlock } from "@/components/interactive-elements"

export default function Home() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col bg-[#5c94fc]">
        {/* Mario Parallax Background */}
        <MarioParallaxBackground />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#5b9a41]"></div>
            <div className="grid grid-cols-8 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-blue-400 opacity-30"></div>
              ))}
            </div>
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-pixel mb-6 text-4xl font-bold text-white md:text-6xl">
              LEVEL UP YOUR <span className="text-[#fbd000]">DIGITAL PRESENCE</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white md:text-xl">
              We're a tech agency that builds powerful websites, apps, and digital experiences that help your business
              win!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <HoverItemEffect>
                <Link href="/portfolio">
                  <MarioButton>View Our Work</MarioButton>
                </Link>
              </HoverItemEffect>
              <HoverItemEffect>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="bg-white text-[#e52521] border-[#e52521] hover:bg-[#f8f8f8] font-pixel px-8 py-6"
                  >
                    Contact Us
                  </Button>
                </Link>
              </HoverItemEffect>
            </div>

            <div className="mt-16 relative">
              <div className="absolute -right-12 top-0 sm:block hidden">
                <Coin />
              </div>
            </div>
          </div>
        </section>

        <PixelDivider color="#5b9a41" direction="down" />

        {/* Services Section */}
        <section id="services" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="inline-block rounded-lg bg-[#e52521] px-3 py-1 text-sm text-white font-pixel mb-4">
                OUR SERVICES
              </div>
              <h2 className="font-pixel text-3xl font-bold text-[#333] md:text-4xl">Power-Ups For Your Business</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Code className="h-10 w-10 text-[#e52521]" />,
                  title: "Web Development",
                  description: "Custom websites built with the latest technologies for maximum performance.",
                },
                {
                  icon: <Gamepad2 className="h-10 w-10 text-[#e52521]" />,
                  title: "App Development",
                  description: "Native and cross-platform mobile applications that engage your users.",
                },
                {
                  icon: <Rocket className="h-10 w-10 text-[#e52521]" />,
                  title: "Digital Marketing",
                  description: "Strategic campaigns that boost your visibility and drive conversions.",
                },
                {
                  icon: <Users className="h-10 w-10 text-[#e52521]" />,
                  title: "UI/UX Design",
                  description: "User-centered design that creates memorable digital experiences.",
                },
              ].map((service, index) => (
                <HoverItemEffect key={index}>
                  <Card key={index} className="border-2 border-[#5c94fc] transition-transform hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#f2f2f2]">
                        {service.icon}
                      </div>
                      <h3 className="mb-2 font-pixel text-xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </HoverItemEffect>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/services">
                <MarioButton>View All Services</MarioButton>
              </Link>
            </div>
          </div>
        </section>

        <PixelDivider color="#5b9a41" direction="up" />

        {/* Portfolio Section */}
        <section id="portfolio" className="bg-[#5b9a41] py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="inline-block rounded-lg bg-[#fbd000] px-3 py-1 text-sm text-black font-pixel mb-4">
                OUR WORK
              </div>
              <h2 className="font-pixel text-3xl font-bold text-white md:text-4xl">Projects We've Conquered</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=500`}
                      alt={`Project ${index + 1}`}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-pixel text-xl font-bold text-white">Project {index + 1}</h3>
                      <p className="text-sm text-white/80">Web Development</p>
                      <Link href={`/portfolio/${index + 1}`}>
                        <Button variant="link" className="mt-2 p-0 text-[#fbd000] font-pixel">
                          View Project <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/portfolio">
                <MarioButton>View All Projects</MarioButton>
              </Link>
            </div>
          </div>
        </section>

        <PixelDivider color="#ffffff" direction="down" />

        {/* Team Section */}
        <section id="team" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="inline-block rounded-lg bg-[#e52521] px-3 py-1 text-sm text-white font-pixel mb-4">
                OUR TEAM
              </div>
              <h2 className="font-pixel text-3xl font-bold text-[#333] md:text-4xl">Meet Our Heroes</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { id: 1, name: "Mario", role: "CEO & Founder" },
                { id: 2, name: "Luigi", role: "CTO" },
                { id: 3, name: "Peach", role: "Design Director" },
                { id: 4, name: "Toad", role: "Lead Developer" },
              ].map((member, index) => (
                <HoverItemEffect key={index}>
                  <Link href={`/team/${member.id}`} className="block">
                    <div className="group text-center">
                      <div className="mb-4 overflow-hidden rounded-lg border-4 border-[#5c94fc]">
                        <Image
                          src={`/placeholder.svg?height=300&width=300`}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="h-full w-full object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-pixel text-xl font-bold">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                  </Link>
                </HoverItemEffect>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/team">
                <MarioButton>View Full Team</MarioButton>
              </Link>
            </div>
          </div>
        </section>

        <PixelDivider color="#5c94fc" direction="up" />

        {/* Contact Section */}
        <section id="contact" className="bg-[#5c94fc] py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-xl">
              <div className="mb-8 text-center">
                <div className="inline-block rounded-lg bg-[#e52521] px-3 py-1 text-sm text-white font-pixel mb-4">
                  CONTACT US
                </div>
                <h2 className="font-pixel text-3xl font-bold text-[#333]">Let's Start Your Journey</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we'll get back to you faster than Mario can jump!
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="font-pixel block text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#e52521] focus:outline-none focus:ring-1 focus:ring-[#e52521]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-pixel block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#e52521] focus:outline-none focus:ring-1 focus:ring-[#e52521]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="font-pixel block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#e52521] focus:outline-none focus:ring-1 focus:ring-[#e52521]"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-pixel block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#e52521] focus:outline-none focus:ring-1 focus:ring-[#e52521]"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <MarioButton>Send Message</MarioButton>
              </form>
            </div>
          </div>
        </section>

        {/* Easter Egg Section */}
        <section className="bg-[#5c94fc] py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8">
              <QuestionBlock>
                <div className="text-center">
                  <h3 className="font-pixel text-lg mb-2">Secret Bonus!</h3>
                  <p className="mb-4">You found a hidden treasure! Get 10% off your first project with us.</p>
                  <p className="font-pixel text-[#e52521]">CODE: MARIO10</p>
                </div>
              </QuestionBlock>
            </div>
          </div>
        </section>

        <BackToTop />
      </div>
    </PageTransition>
  )
}
