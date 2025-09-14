export default function About() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About Sush Blog</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Welcome to my corner of the internet where I share insights, tutorials, and thoughts on technology, programming, and digital innovation.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Who Am I?</h2>
        <p className="mb-6">
          I&apos;m a passionate developer and technology enthusiast with years of experience in building web applications, 
          exploring AI technologies, and working with cloud platforms. This blog is my way of sharing knowledge and 
          connecting with the developer community.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">What You&apos;ll Find Here</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>In-depth tutorials on web development</li>
          <li>Insights into AI and machine learning</li>
          <li>Cloud computing best practices</li>
          <li>DevOps tips and tricks</li>
          <li>Personal experiences and lessons learned</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
        <p>
          I love connecting with fellow developers and tech enthusiasts. Feel free to reach out through the 
          contact page or connect with me on social media. Let&apos;s learn and grow together!
        </p>
      </div>
    </div>
  )
}