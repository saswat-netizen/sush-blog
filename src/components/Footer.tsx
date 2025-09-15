export default function Footer() {
  return (
    <footer className="rose-bg py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="glass-rose rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 gradient-text-rose" style={{fontFamily: 'Dancing Script'}}>
                Sush<span className="text-pink-600">Life</span> 🌹
              </h3>
              <p className="text-pink-800 font-medium">
                ✨ Sharing daily adventures, travel dreams, and honest product reviews to help you live your most beautiful life! 💕
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold mb-4 text-pink-700" style={{fontFamily: 'Dancing Script', fontSize: '1.2rem'}}>
                🌸 Categories 🌸
              </h4>
              <ul className="space-y-2 text-pink-700 font-medium">
                <li className="hover:text-pink-500 transition-colors cursor-pointer">✨ Daily Life</li>
                <li className="hover:text-pink-500 transition-colors cursor-pointer">✈️ Travel Adventures</li>
                <li className="hover:text-pink-500 transition-colors cursor-pointer">💖 Product Reviews</li>
                <li className="hover:text-pink-500 transition-colors cursor-pointer">🏠 Home Essentials</li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-bold mb-4 text-pink-700" style={{fontFamily: 'Dancing Script', fontSize: '1.2rem'}}>
                💕 Let&apos;s Connect 💕
              </h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                <a href="#" className="btn-rose text-white px-4 py-2 rounded-full hover:transform hover:scale-110 transition-all">
                  💕 Instagram
                </a>
                <a href="#" className="btn-rose text-white px-4 py-2 rounded-full hover:transform hover:scale-110 transition-all">
                  🌹 Pinterest
                </a>
              </div>
              <div className="flex justify-center md:justify-end space-x-2">
                <span className="text-2xl animate-bounce">🌸</span>
                <span className="text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>🌺</span>
                <span className="text-2xl animate-bounce" style={{animationDelay: '0.4s'}}>🌷</span>
              </div>
            </div>
          </div>
          <div className="border-t border-pink-300 mt-8 pt-8 text-center">
            <p className="text-pink-700 font-medium">
              Made with 💕 &copy; 2024 SushLife. All rights reserved. ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}