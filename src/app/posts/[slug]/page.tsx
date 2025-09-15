import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-6 py-12 max-w-4xl">
      <header className="mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
            {post.category}
          </span>
          <span className="text-gray-500 ml-4">{post.date}</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-gray-600">{post.excerpt}</p>
        <div className="flex items-center mt-6 pt-6 border-t">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            {post.author[0]}
          </div>
          <div className="ml-3">
            <p className="font-medium">{post.author}</p>
            <p className="text-gray-500 text-sm">Author</p>
          </div>
        </div>
      </header>

      {post.videoUrl && (
        <div className="mb-8 p-6 bg-red-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
            </svg>
            Watch the Video
          </h3>
          <p className="text-gray-600 mb-4">See this content in action! Watch the full video for behind-the-scenes moments and detailed demonstrations.</p>
          <a 
            href={post.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            </svg>
            Watch on YouTube
          </a>
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
      </div>

      {post.productLinks && post.productLinks.length > 0 && (
        <div className="mt-8 p-6 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
            </svg>
            Products Mentioned
          </h3>
          <p className="text-gray-600 mb-4">Here are the products I actually use and recommend from this post:</p>
          <div className="space-y-2">
            {post.productLinks.map((link, index) => (
              <a 
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-green-200 p-3 rounded hover:border-green-300 transition-colors"
              >
                <span className="text-green-700 font-medium">Product Link {index + 1}</span>
                <svg className="w-4 h-4 inline ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                </svg>
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            * These are affiliate links. I only recommend products I genuinely use and believe in.
          </p>
        </div>
      )}

      <footer className="mt-12 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
              Share
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
              Bookmark
            </button>
          </div>
          <a href="/" className="text-orange-600 hover:text-orange-800">
            ← Back to all posts
          </a>
        </div>
      </footer>
    </article>
  )
}