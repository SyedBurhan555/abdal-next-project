import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#EEEFFB] pt-16">
      <div className="container mx-auto grid grid-cols-4 gap-8 pb-16">
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold">
            Hekto
          </Link>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="rounded-sm border px-4 py-2"
            />
            <button className="rounded-sm bg-pink-500 px-4 py-2 text-white">
              Sign Up
            </button>
          </div>
          <div className="text-gray-600">
            <p>Contact Info</p>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Catagories</h3>
          <div className="space-y-2 text-gray-600">
            <Link href="#" className="block">Laptops & Computers</Link>
            <Link href="#" className="block">Cameras & Photography</Link>
            <Link href="#" className="block">Smart Phones & Tablets</Link>
            <Link href="#" className="block">Video Games & Consoles</Link>
            <Link href="#" className="block">Waterproof Headphones</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Customer Care</h3>
          <div className="space-y-2 text-gray-600">
            <Link href="#" className="block">My Account</Link>
            <Link href="#" className="block">Discount</Link>
            <Link href="#" className="block">Returns</Link>
            <Link href="#" className="block">Orders History</Link>
            <Link href="#" className="block">Order Tracking</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Pages</h3>
          <div className="space-y-2 text-gray-600">
            <Link href="#" className="block">Blog</Link>
            <Link href="#" className="block">Browse the Shop</Link>
            <Link href="#" className="block">Category</Link>
            <Link href="#" className="block">Pre-Built Pages</Link>
            <Link href="#" className="block">Visual Composer Elements</Link>
            <Link href="#" className="block">WooCommerce Pages</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white py-4 text-center text-sm text-gray-600">
        ©Webecy - All Rights Reserved
      </div>
    </footer>
  )
}

