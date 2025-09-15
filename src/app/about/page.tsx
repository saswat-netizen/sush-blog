export default function About() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="glass-rose p-8 rounded-3xl">
          <h1 className="text-5xl font-bold mb-4 gradient-text-rose" style={{fontFamily: 'Dancing Script'}}>
            🌹 About Me & This Magical Journey 🌹
          </h1>
          <div className="flex justify-center space-x-4 mt-6">
            <span className="text-4xl animate-bounce">💕</span>
            <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
            <span className="text-4xl animate-bounce" style={{animationDelay: '0.4s'}}>🌸</span>
          </div>
        </div>
      </div>
      
      <div className="glass-rose p-8 rounded-3xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-pink-800 mb-8 font-medium text-center">
            Hey beautiful! 💕 I&apos;m Sush, and this is my dreamy corner of the internet where I share the real, magical moments of daily life, 
            travel adventures, and honest reviews of products that actually make life more beautiful! ✨
          </p>
        
        <h2 className="text-2xl font-semibold mb-4">Who Am I?</h2>
        <p className="mb-6">
          I&apos;m someone who believes that the small daily choices we make shape our entire life experience. Whether it&apos;s finding the perfect 
          morning routine, discovering hidden gems while traveling, or testing products that promise to make life easier - I&apos;m here for it all. 
          I work remotely, love exploring new places, and have a slight obsession with finding the &quot;perfect&quot; version of everyday items.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">What You&apos;ll Find Here</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Daily routine breakdowns with honest product reviews</li>
          <li>Travel guides with real experiences and practical tips</li>
          <li>Home and lifestyle product testing (the good, bad, and ugly)</li>
          <li>Behind-the-scenes videos of my daily life</li>
          <li>Authentic stories about what&apos;s really happening in my world</li>
          <li>Product recommendations that I actually use and love</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">My Promise to You</h2>
        <p className="mb-6">
          Everything I share here is genuine. If I recommend a product, it&apos;s because I&apos;ve used it and believe it adds value. 
          If I share a travel tip, it&apos;s because I&apos;ve been there and learned it the hard way. No fluff, no fake enthusiasm - 
          just real experiences from someone figuring out life one day at a time.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
        <p>
          I love hearing from readers! Whether you have questions about a product I&apos;ve reviewed, want travel advice, 
          or just want to share your own experiences, don&apos;t hesitate to reach out. We&apos;re all in this journey together, 
          and I believe we can learn so much from each other&apos;s experiences.
        </p>
        </div>
      </div>
    </div>
  )
}