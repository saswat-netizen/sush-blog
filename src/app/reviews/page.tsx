import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Reviews() {
  const posts = getAllPosts().filter(post => post.category === 'Product Reviews')

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="glass-rose p-8 rounded-3xl mx-4">
          <h1 className="text-5xl font-bold mb-4 gradient-text-rose" style={{fontFamily: 'Dancing Script'}}>
            💖 Curated Finds 💖
          </h1>
          <p className="text-xl text-pink-800 max-w-2xl mx-auto font-medium">
            🌹 Thoughtfully curated recommendations from years of global living and conscious consumption. Each product has earned its place through real-world testing, cultural exploration, and the discerning eye of someone who values quality over quantity. ✨
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <span className="text-3xl animate-pulse">💖</span>
            <span className="text-3xl animate-pulse" style={{animationDelay: '0.4s'}}>🌹</span>
            <span className="text-3xl animate-pulse" style={{animationDelay: '0.8s'}}>✨</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 hover:text-purple-600 transition-colors">
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center gap-4 mb-4">
                {post.videoUrl && (
                  <span className="inline-flex items-center text-sm text-red-600">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                    </svg>
                    Video Review
                  </span>
                )}
                {post.productLinks && post.productLinks.length > 0 && (
                  <span className="inline-flex items-center text-sm text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                    </svg>
                    Product Links
                  </span>
                )}
              </div>
              
              <Link 
                href={`/posts/${post.slug}`}
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                Read full review →
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No product reviews yet. Currently testing some exciting items!</p>
        </div>
      )}
    </div>
  )
}