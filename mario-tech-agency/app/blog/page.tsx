import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/page-transition"
import { HoverItemEffect } from "@/components/hover-effects"
import { MarioButton } from "@/components/interactive-elements"

export default function BlogPage() {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "10 Web Development Trends to Watch in 2023",
      excerpt:
        "Stay ahead of the curve with these emerging trends in web development that are set to dominate the industry.",
      image: "/placeholder.svg?height=300&width=600",
      date: "May 15, 2023",
      category: "Web Development",
      author: "Mario",
    },
    {
      id: 2,
      title: "The Future of Mobile App Development",
      excerpt: "Discover the latest innovations and technologies shaping the future of mobile applications.",
      image: "/placeholder.svg?height=300&width=600",
      date: "April 27, 2023",
      category: "App Development",
      author: "Luigi",
    },
    {
      id: 3,
      title: "Designing User-Centered Experiences",
      excerpt: "Learn how to create digital experiences that put users first and drive engagement.",
      image: "/placeholder.svg?height=300&width=600",
      date: "April 10, 2023",
      category: "UI/UX Design",
      author: "Peach",
    },
    {
      id: 4,
      title: "The Power of Digital Marketing for Small Businesses",
      excerpt: "How small businesses can leverage digital marketing to compete with larger competitors.",
      image: "/placeholder.svg?height=300&width=600",
      date: "March 22, 2023",
      category: "Digital Marketing",
      author: "Daisy",
    },
    {
      id: 5,
      title: "Building Scalable Web Applications",
      excerpt: "Best practices for creating web applications that can grow with your business.",
      image: "/placeholder.svg?height=300&width=600",
      date: "March 8, 2023",
      category: "Web Development",
      author: "Toad",
    },
    {
      id: 6,
      title: "Optimizing Website Performance",
      excerpt: "Tips and techniques to improve your website's speed and performance for better user experience.",
      image: "/placeholder.svg?height=300&width=600",
      date: "February 28, 2023",
      category: "Web Development",
      author: "Yoshi",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#5c94fc] py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="font-pixel text-4xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Stay updated with the latest trends, technologies, and insights in the digital world.
            </p>
          </div>

          {/* Featured post */}
          <div className="mb-12">
            <HoverItemEffect>
              <Link href={`/blog/${blogPosts[0].id}`} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-[21/9] relative">
                    <Image
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                      <div className="text-white">
                        <div className="font-pixel text-[#fbd000] mb-2">{blogPosts[0].category}</div>
                        <h2 className="font-pixel text-3xl font-bold mb-2">{blogPosts[0].title}</h2>
                        <p className="mb-4">{blogPosts[0].excerpt}</p>
                        <div className="flex items-center">
                          <span className="text-xs bg-[#e52521] px-2 py-1 rounded-full inline-block">
                            {blogPosts[0].date}
                          </span>
                          <span className="ml-4 text-sm">By {blogPosts[0].author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </HoverItemEffect>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <HoverItemEffect key={post.id}>
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="aspect-video relative">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs bg-[#e52521] text-white px-2 py-1 rounded-full inline-block">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-pixel text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span>By {post.author}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </HoverItemEffect>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <MarioButton>Back to Home</MarioButton>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
