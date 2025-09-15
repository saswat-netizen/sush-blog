import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Sush<span className="text-orange-600">Life</span>
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/daily-life" className="text-gray-700 hover:text-orange-600 transition-colors">
              Daily Life
            </Link>
            <Link href="/travel" className="text-gray-700 hover:text-orange-600 transition-colors">
              Travel
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-orange-600 transition-colors">
              Reviews
            </Link>
            <Link href="/videos" className="text-gray-700 hover:text-orange-600 transition-colors">
              Videos
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}