import Link from "next/link"
import { Mail, Phone, ChevronDown, User, Heart, ShoppingCart, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-[#7E33E0]">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-white">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>mhhasanul@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(12345)67890</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              English
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1">
              USD
              <ChevronDown className="h-4 w-4" />
            </div>
            <Link href="/login" className="flex items-center gap-1">
              Login
              <User className="h-4 w-4" />
            </Link>
            <Link href="/wishlist" className="flex items-center gap-1">
              Wishlist
              <Heart className="h-4 w-4" />
            </Link>
            <Link href="/cart">
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full bg-white">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-indigo-950">
            Hekto
          </Link>
          <nav className="flex gap-8">
            <Link href="/" className="text-indigo-950 hover:text-pink-500">
              Home
            </Link>
            <Link href="/pages" className="text-indigo-950 hover:text-pink-500">Pages</Link>
            <Link href="/products" className="text-indigo-950 hover:text-pink-500">Products</Link>
            <Link href="/blog" className="text-indigo-950 hover:text-pink-500">Blog</Link>
            <Link href="/shop" className="text-indigo-950 hover:text-pink-500">Shop</Link>
            <Link href="/contact" className="text-indigo-950 hover:text-pink-500">Contact</Link>
          </nav>
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="rounded-md border px-4 py-2 pr-10"
            />
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  )
}

