import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { MarioButton } from "@/components/interactive-elements"
import { MarioParallaxBackground } from "@/components/mario-parallax-background"

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#5c94fc] py-12">
        <MarioParallaxBackground />
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="font-pixel text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Let's start your journey! Fill out the form below and we'll get back to you faster than Mario can jump!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-4 border-[#fbd000]">
              <CardHeader>
                <CardTitle className="font-pixel text-xl flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#e52521]" /> Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">hello@mariotech.com</p>
                <p className="text-muted-foreground">support@mariotech.com</p>
              </CardContent>
            </Card>

            <Card className="border-4 border-[#fbd000]">
              <CardHeader>
                <CardTitle className="font-pixel text-xl flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#e52521]" /> Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground">Mon-Fri: 9am - 5pm</p>
              </CardContent>
            </Card>

            <Card className="border-4 border-[#fbd000]">
              <CardHeader>
                <CardTitle className="font-pixel text-xl flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#e52521]" /> Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">123 Mushroom Kingdom</p>
                <p className="text-muted-foreground">World 1-1, 12345</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 border-4 border-[#e52521]">
            <CardHeader>
              <CardTitle className="font-pixel text-2xl text-center">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-pixel text-sm">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="border-2 border-[#5c94fc]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-pixel text-sm">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-2 border-[#5c94fc]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="font-pixel text-sm">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" className="border-2 border-[#5c94fc]" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-pixel text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-32 border-2 border-[#5c94fc]"
                  />
                </div>

                <MarioButton>Send Message</MarioButton>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Link href="/" className="font-pixel text-white hover:text-[#fbd000] transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
