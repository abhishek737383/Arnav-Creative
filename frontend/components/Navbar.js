'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-700' 
          : 'bg-gray-900/90 backdrop-blur-md'
      }`}>
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Image */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
            >
              {/* Replace with your actual logo image */}
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                {/* Temporary logo - replace with your Image component */}
                <span className="text-white font-bold text-lg">WC</span>
                {/* Uncomment below and replace with your actual logo */}
                {/* <Image 
                  src="/logo.png" 
                  alt="WebCraft" 
                  width={48} 
                  height={48}
                  className="rounded-xl"
                /> */}
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                WebCraft
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-200 relative group"
              >
                About
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link 
                href="/services" 
                className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-200 relative group"
              >
                Services
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link 
                href="/portfolio" 
                className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-200 relative group"
              >
                Portfolio
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-200 relative group"
              >
                Pricing
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 ml-4"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                  }`}></span>
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'w-6'
                  }`}></span>
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-700 transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-6 space-y-2">
            <Link 
              href="/" 
              className="block py-4 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl text-lg font-semibold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block py-4 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl text-lg font-semibold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block py-4 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl text-lg font-semibold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className="block py-4 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl text-lg font-semibold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/pricing" 
              className="block py-4 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl text-lg font-semibold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="block py-4 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold text-lg text-center hover:from-blue-600 hover:to-purple-700 transition-colors duration-200 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  )
}