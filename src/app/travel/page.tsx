import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Travel() {
  const posts = getAllPosts().filter(post => post.category === 'Travel')

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="glass-rose p-8 rounded-3xl mx-4">
          <h1 className="text-5xl font-bold mb-4 gradient-text-rose" style={{fontFamily: 'Dancing Script'}}>
            🌍 Cultural Journeys 🌍
          </h1>
          <p className="text-xl text-pink-800 max-w-2xl mx-auto font-medium">
            🌹 Deep cultural immersion, transformative travel experiences, and the wisdom gained from calling multiple countries home. Beyond tourist trails - discover how travel becomes a teacher, healer, and catalyst for personal evolution. ✨
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <span className="text-3xl animate-bounce">✈️</span>
            <span className="text-3xl animate-bounce" style={{animationDelay: '0.3s'}}>🌍</span>
            <span className="text-3xl animate-bounce" style={{animationDelay: '0.6s'}}>💕</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              {post.videoUrl && (
                <div className="mb-4">
                  <span className="inline-flex items-center text-sm text-red-600">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                    </svg>
                    Video Available
                  </span>
                </div>
              )}
              <Link 
                href={`/posts/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No travel posts yet. Planning my next adventure!</p>
        </div>
      )}
    </div>
  )
}