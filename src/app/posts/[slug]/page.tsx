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

      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
      </div>

      <footer className="mt-12 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Share
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
              Bookmark
            </button>
          </div>
          <a href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to all posts
          </a>
        </div>
      </footer>
    </article>
  )
}