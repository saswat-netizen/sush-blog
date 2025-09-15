import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 rose-pattern py-16 rounded-3xl">
        <div className="glass-rose p-12 rounded-3xl mx-4">
          <h1 className="text-6xl font-bold mb-6 gradient-text-rose" style={{fontFamily: 'Dancing Script'}}>
            Life, Love & Wanderlust 🌍
          </h1>
          <p className="text-xl text-pink-800 max-w-3xl mx-auto font-medium">
            ✨ After 15+ years of exploring 40+ countries, building a career, and navigating life&apos;s beautiful chaos, I&apos;m here to share the wisdom, wanderlust, and wonder I&apos;ve collected along the way. From boardrooms to backpacking, motherhood to mindfulness - this is real life, beautifully lived. 🌹
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <span className="text-4xl animate-bounce">🌸</span>
            <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>🌺</span>
            <span className="text-4xl animate-bounce" style={{animationDelay: '0.4s'}}>🌷</span>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text-rose" style={{fontFamily: 'Dancing Script'}}>
          🌸 Latest Adventures 🌸
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={post.slug} className="glass-rose rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 sparkle">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category === 'Daily Life' ? '✨ ' + post.category : 
                     post.category === 'Travel' ? '✈️ ' + post.category :
                     post.category === 'Product Reviews' ? '💖 ' + post.category : post.category}
                  </span>
                  <span className="text-pink-600 text-sm ml-auto font-medium">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 hover:text-pink-600 transition-colors text-pink-800">
                  <Link href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-pink-700 mb-4 line-clamp-3">{post.excerpt}</p>
                {post.videoUrl && (
                  <div className="mb-3">
                    <span className="inline-flex items-center text-sm text-red-500 font-medium">
                      🎥 Video Available
                    </span>
                  </div>
                )}
                <Link 
                  href={`/posts/${post.slug}`}
                  className="btn-rose text-white px-4 py-2 rounded-full font-medium inline-flex items-center"
                >
                  Read more 🌹
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}