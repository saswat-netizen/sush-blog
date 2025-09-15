import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Videos() {
  const postsWithVideos = getAllPosts().filter(post => post.videoUrl)

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          Video Content
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Behind-the-scenes videos, product demos, and day-in-the-life content. 
          See the real, unfiltered moments of daily adventures.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postsWithVideos.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-red-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-sm text-gray-500">Video Available</p>
                </div>
              </div>
              <div className="absolute top-2 right-2">
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                  VIDEO
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 hover:text-red-600 transition-colors">
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <Link 
                  href={`/posts/${post.slug}`}
                  className="text-red-600 hover:text-red-800 font-medium text-sm"
                >
                  Watch & Read →
                </Link>
                
                {post.videoUrl && (
                  <a 
                    href={post.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {postsWithVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4z" clipRule="evenodd"></path>
            </svg>
            <p className="text-gray-500 text-lg mb-2">No videos yet!</p>
            <p className="text-gray-400">Currently working on some exciting video content. Stay tuned!</p>
          </div>
        </div>
      )}
      
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Want to see specific content?</h2>
          <p className="text-gray-600 mb-6">
            Have ideas for videos you&apos;d like to see? Product reviews, day-in-the-life content, 
            or travel vlogs? Let me know!
          </p>
          <Link 
            href="/contact"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Suggest Video Ideas
          </Link>
        </div>
      </div>
    </div>
  )
}