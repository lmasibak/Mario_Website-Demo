import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/page-transition"
import { HoverItemEffect } from "@/components/hover-effects"
import { MarioButton } from "@/components/interactive-elements"
import { PixelDivider } from "@/components/pixel-divider"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // Blog post ID
  const postId = Number(params.id)

  // Sample blog post data
  const post = {
    id: postId,
    title:
      postId === 1
        ? "10 Web Development Trends to Watch in 2023"
        : postId === 2
          ? "The Future of Mobile App Development"
          : postId === 3
            ? "Designing User-Centered Experiences"
            : `Blog Post ${postId}`,
    excerpt:
      "Stay ahead of the curve with these emerging trends in web development that are set to dominate the industry.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas, nisi eget interdum eleifend, urna nisl finibus mi, vitae dapibus libero eros auctor velit. Nullam quis nisl eget orci varius aliquam.</p>
      
      <h2>First Main Point</h2>
      
      <p>Proin ut nulla sed risus porttitor tincidunt. Donec ornare lacus non purus lobortis, ut ullamcorper erat rhoncus. Integer blandit scelerisque diam a rhoncus. Ut sit amet elit ac sem tincidunt eleifend.</p>
      
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean facilisis augue vitae odio ultrices, eget ullamcorper nisl vestibulum. Aenean pretium, magna id sollicitudin pretium, odio lorem viverra tellus, eu iaculis turpis neque vitae lectus.</p>
      
      <h2>Second Main Point</h2>
      
      <p>Nulla facilisi. Pellentesque at metus sed purus efficitur condimentum. Nullam vel ipsum vel velit tempus luctus vel non urna. Nulla facilisi. Suspendisse dignissim eros odio, nec posuere tellus pellentesque vel.</p>
      
      <ul>
        <li>First important point to consider</li>
        <li>Second relevant insight for developers</li>
        <li>Third critical trend to watch</li>
        <li>Fourth emerging technology</li>
      </ul>
      
      <h2>Third Main Point</h2>
      
      <p>Morbi accumsan malesuada magna, vel iaculis metus imperdiet vel. Ut eu tortor condimentum, dignissim ipsum nec, lobortis nibh. Cras arcu leo, molestie ut nisl vel, eleifend cursus ipsum. Aliquam id nisl nisi.</p>
      
      <blockquote>The future of development is not just about coding skills, but about creating experiences that truly resonate with users.</blockquote>
      
      <p>Nulla convallis libero vitae dolor feugiat, id porta neque gravida. Cras rutrum leo non velit rhoncus, vel elementum mauris pharetra. Integer id fringilla enim, non vulputate velit.</p>
      
      <h2>Conclusion</h2>
      
      <p>Curabitur imperdiet justo eget sodales finibus. Duis gravida ex at velit suscipit, in sollicitudin urna tincidunt. Donec rhoncus arcu in nisi ultricies, at congue tellus faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "May 15, 2023",
    category: postId % 3 === 0 ? "UI/UX Design" : postId % 2 === 0 ? "App Development" : "Web Development",
    author: {
      name: postId === 1 ? "Mario" : postId === 2 ? "Luigi" : postId === 3 ? "Peach" : "Toad",
      role: postId === 1 ? "CEO & Founder" : postId === 2 ? "CTO" : postId === 3 ? "Design Director" : "Lead Developer",
      image: "/placeholder.svg?height=100&width=100",
    },
    relatedPosts: [
      { id: (postId % 6) + 1, title: "Related Post 1", image: "/placeholder.svg?height=200&width=300" },
      { id: ((postId + 1) % 6) + 1, title: "Related Post 2", image: "/placeholder.svg?height=200&width=300" },
      { id: ((postId + 2) % 6) + 1, title: "Related Post 3", image: "/placeholder.svg?height=200&width=300" },
    ],
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero section */}
        <div className="bg-[#5c94fc] py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <Link
                href="/blog"
                className="font-pixel text-white hover:text-[#fbd000] transition-colors inline-flex items-center mb-8"
              >
                ← Back to Blog
              </Link>
              <span className="text-xs bg-[#e52521] text-white px-3 py-1 rounded-full inline-block mb-4">
                {post.category}
              </span>
              <h1 className="font-pixel text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center justify-center text-white/80 text-sm">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>By {post.author.name}</span>
              </div>
            </div>
          </div>
        </div>

        <PixelDivider color="#ffffff" direction="down" />

        {/* Blog content */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={1200}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>

                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full overflow-hidden h-16 w-16 relative">
                      <Image
                        src={post.author.image || "/placeholder.svg"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-pixel text-lg font-bold">{post.author.name}</h3>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {/* Sidebar */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8 sticky top-20">
                  <h3 className="font-pixel text-xl font-bold mb-6">Recent Posts</h3>
                  <div className="space-y-4">
                    {post.relatedPosts.map((relatedPost) => (
                      <HoverItemEffect key={relatedPost.id}>
                        <Link href={`/blog/${relatedPost.id}`} className="flex gap-4 items-center">
                          <div className="w-20 h-20 rounded-md overflow-hidden relative">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="font-medium">{relatedPost.title}</span>
                        </Link>
                      </HoverItemEffect>
                    ))}
                  </div>

                  <h3 className="font-pixel text-xl font-bold mt-8 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {["Web Development", "App Development", "UI/UX Design", "Digital Marketing"].map((category) => (
                      <Link
                        key={category}
                        href="/blog"
                        className="flex items-center text-gray-700 hover:text-[#e52521] transition-colors"
                      >
                        <span className="text-[#e52521] mr-2">→</span>
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-16 bg-[#5c94fc] text-white p-8 md:p-12 rounded-xl text-center">
              <h2 className="font-pixel text-3xl font-bold mb-4">Need Help With Your Project?</h2>
              <p className="mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to bring your ideas to life. Let's work together to create something
                amazing.
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
