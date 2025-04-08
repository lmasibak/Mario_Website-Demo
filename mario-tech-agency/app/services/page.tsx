import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Gamepad2, Rocket, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="font-pixel text-4xl font-bold text-[#333] mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Power-ups for your business! We offer a range of services to help you level up your digital presence.
          </p>
        </div>

        <Tabs defaultValue="web" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-[#5c94fc]">
            <TabsTrigger value="web" className="font-pixel text-white data-[state=active]:bg-[#e52521]">
              Web Dev
            </TabsTrigger>
            <TabsTrigger value="app" className="font-pixel text-white data-[state=active]:bg-[#e52521]">
              App Dev
            </TabsTrigger>
            <TabsTrigger value="marketing" className="font-pixel text-white data-[state=active]:bg-[#e52521]">
              Marketing
            </TabsTrigger>
            <TabsTrigger value="design" className="font-pixel text-white data-[state=active]:bg-[#e52521]">
              UI/UX
            </TabsTrigger>
          </TabsList>

          <TabsContent value="web" className="mt-6">
            <Card className="border-4 border-[#e52521]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#e52521] p-3">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="font-pixel text-2xl">Web Development</CardTitle>
                    <CardDescription>Custom websites built with the latest technologies</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="font-pixel text-lg mb-4">What We Offer</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e52521] font-bold">→</span>
                      <span>Custom website development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e52521] font-bold">→</span>
                      <span>E-commerce solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e52521] font-bold">→</span>
                      <span>Content management systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e52521] font-bold">→</span>
                      <span>Progressive web applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e52521] font-bold">→</span>
                      <span>Website maintenance and support</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Web Development"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="app" className="mt-6">
            <Card className="border-4 border-[#5b9a41]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#5b9a41] p-3">
                    <Gamepad2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="font-pixel text-2xl">App Development</CardTitle>
                    <CardDescription>Native and cross-platform mobile applications</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="font-pixel text-lg mb-4">What We Offer</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#5b9a41] font-bold">→</span>
                      <span>iOS app development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5b9a41] font-bold">→</span>
                      <span>Android app development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5b9a41] font-bold">→</span>
                      <span>Cross-platform solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5b9a41] font-bold">→</span>
                      <span>App maintenance and updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5b9a41] font-bold">→</span>
                      <span>App store optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="App Development"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marketing" className="mt-6">
            <Card className="border-4 border-[#fbd000]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#fbd000] p-3">
                    <Rocket className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <CardTitle className="font-pixel text-2xl">Digital Marketing</CardTitle>
                    <CardDescription>Strategic campaigns that boost your visibility</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="font-pixel text-lg mb-4">What We Offer</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#fbd000] font-bold">→</span>
                      <span>Search engine optimization (SEO)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#fbd000] font-bold">→</span>
                      <span>Pay-per-click advertising (PPC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#fbd000] font-bold">→</span>
                      <span>Social media marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#fbd000] font-bold">→</span>
                      <span>Content marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#fbd000] font-bold">→</span>
                      <span>Email marketing campaigns</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Digital Marketing"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design" className="mt-6">
            <Card className="border-4 border-[#5c94fc]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#5c94fc] p-3">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="font-pixel text-2xl">UI/UX Design</CardTitle>
                    <CardDescription>User-centered design that creates memorable experiences</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="font-pixel text-lg mb-4">What We Offer</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#5c94fc] font-bold">→</span>
                      <span>User interface design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5c94fc] font-bold">→</span>
                      <span>User experience design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5c94fc] font-bold">→</span>
                      <span>Wireframing and prototyping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5c94fc] font-bold">→</span>
                      <span>Usability testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5c94fc] font-bold">→</span>
                      <span>Design systems</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="UI/UX Design"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Link href="/" className="font-pixel text-[#e52521] hover:text-[#c41e1a] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
