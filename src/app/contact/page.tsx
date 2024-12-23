import { Phone } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import Button from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-pink-500">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/pages" className="text-gray-600 hover:text-pink-500">
              Pages
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-pink-500">Contact us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Information About us</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
              mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae 
              eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div className="flex space-x-4">
              <div className="w-3 h-3 rounded-full bg-[#7E33E0]" />
              <div className="w-3 h-3 rounded-full bg-pink-500" />
              <div className="w-3 h-3 rounded-full bg-[#5726DD]" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Way</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#7E33E0] flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tel: 877-67-88-99</p>
                  <p className="text-sm text-gray-600">E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Support Forum</p>
                  <p className="text-sm text-gray-600">For over 24hr</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#FFB265] flex items-center justify-center">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">20 Margaret st, London</p>
                  <p className="text-sm text-gray-600">Great britain, 3NM98-LK</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#1BE982] flex items-center justify-center">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Free standard shipping</p>
                  <p className="text-sm text-gray-600">on all orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
              tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" placeholder="Your Name*" />
                <Input type="email" placeholder="Your Email*" />
              </div>
              <Input type="text" placeholder="Subject*" />
              <Textarea placeholder="Type Your Message*" className="h-32" />
              <Button className="bg-pink-500 hover:bg-pink-600">
                Send Mail
              </Button>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Contact illustration"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

