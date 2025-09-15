import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="floating-roses">
        <div className="rose" style={{left: '10%', animationDelay: '0s'}}>🌹</div>
        <div className="rose" style={{left: '20%', animationDelay: '2s'}}>🌸</div>
        <div className="rose" style={{left: '30%', animationDelay: '4s'}}>🌺</div>
        <div className="rose" style={{left: '40%', animationDelay: '6s'}}>🌷</div>
        <div className="rose" style={{left: '50%', animationDelay: '8s'}}>🌹</div>
        <div className="rose" style={{left: '60%', animationDelay: '10s'}}>🌸</div>
        <div className="rose" style={{left: '70%', animationDelay: '12s'}}>🌺</div>
        <div className="rose" style={{left: '80%', animationDelay: '14s'}}>🌷</div>
        <div className="rose" style={{left: '90%', animationDelay: '16s'}}>🌹</div>
      </div>
      
      <header className="glass-rose border-b border-pink-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold sparkle" style={{fontFamily: 'Dancing Script'}}>
              <span className="gradient-text-rose">Sush</span>
              <span className="text-pink-500">Life</span>
              <span className="ml-2">🌹</span>
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-pink-700 hover:text-pink-500 transition-colors font-medium flex items-center">
                🏠 Home
              </Link>
              <Link href="/daily-life" className="text-pink-700 hover:text-pink-500 transition-colors font-medium flex items-center">
                ✨ Mindful Living
              </Link>
              <Link href="/travel" className="text-pink-700 hover:text-pink-500 transition-colors font-medium flex items-center">
                🌍 Cultural Journeys
              </Link>
              <Link href="/reviews" className="text-pink-700 hover:text-pink-500 transition-colors font-medium flex items-center">
                💖 Curated Finds
              </Link>
              <Link href="/videos" className="text-pink-700 hover:text-pink-500 transition-colors font-medium flex items-center">
                🎥 Videos
              </Link>
              <Link href="/about" className="btn-rose text-white px-4 py-2 rounded-full font-medium flex items-center">
                💕 About Me
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}