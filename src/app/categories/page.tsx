import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Categories() {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.map(post => post.category)))
  
  const getPostsByCategory = (category: string) => {
    return posts.filter(post => post.category === category)
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Categories</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category) => {
          const categoryPosts = getPostsByCategory(category)
          return (
            <div key={category} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">{category}</h2>
              <p className="text-gray-600 mb-4">{categoryPosts.length} posts</p>
              
              <div className="space-y-3">
                {categoryPosts.slice(0, 3).map((post) => (
                  <div key={post.slug}>
                    <Link 
                      href={`/posts/${post.slug}`}
                      className="text-gray-900 hover:text-blue-600 transition-colors font-medium"
                    >
                      {post.title}
                    </Link>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                ))}
              </div>
              
              {categoryPosts.length > 3 && (
                <p className="text-sm text-gray-500 mt-4">
                  +{categoryPosts.length - 3} more posts
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}