export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  author: string
}

// Sample blog posts data
const posts: Post[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Next.js 14, including the new App Router and Server Components.',
    content: `# Getting Started with Next.js 14

Next.js 14 brings exciting new features and improvements that make building React applications even more powerful and efficient.

## Key Features

- **App Router**: The new file-system based router built on React Server Components
- **Server Components**: Render components on the server for better performance
- **Streaming**: Progressive rendering for faster page loads
- **Turbopack**: Next-generation bundler for faster development

## Installation

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Conclusion

Next.js 14 represents a significant step forward in React development, offering improved performance and developer experience.`,
    date: '2024-01-15',
    category: 'Web Development',
    author: 'Sush'
  },
  {
    slug: 'ai-trends-2024',
    title: 'AI Trends to Watch in 2024',
    excerpt: 'Explore the most significant artificial intelligence trends that will shape the technology landscape in 2024.',
    content: `# AI Trends to Watch in 2024

Artificial Intelligence continues to evolve at a rapid pace. Here are the key trends to watch this year.

## 1. Generative AI Mainstream Adoption

Generative AI tools are becoming integral to business operations across industries.

## 2. AI-Powered Development Tools

Code generation and assistance tools are revolutionizing software development.

## 3. Ethical AI and Governance

Focus on responsible AI development and deployment practices.

## Conclusion

2024 will be a pivotal year for AI adoption and innovation across all sectors.`,
    date: '2024-01-10',
    category: 'AI & Machine Learning',
    author: 'Sush'
  },
  {
    slug: 'cloud-native-architecture',
    title: 'Building Cloud-Native Applications: Best Practices',
    excerpt: 'Discover the principles and patterns for designing scalable, resilient cloud-native applications.',
    content: `# Building Cloud-Native Applications

Cloud-native architecture enables organizations to build and run scalable applications in modern, dynamic environments.

## Core Principles

1. **Microservices Architecture**
2. **Containerization**
3. **DevOps Integration**
4. **Continuous Delivery**

## Best Practices

- Design for failure
- Implement observability
- Automate everything
- Use managed services

## Conclusion

Cloud-native approaches enable faster development cycles and improved scalability.`,
    date: '2024-01-05',
    category: 'Cloud Computing',
    author: 'Sush'
  }
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category === category)
}