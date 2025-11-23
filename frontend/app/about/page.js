'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const observerRef = useRef(null)

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header - Starts immediately after navbar */}
        <div className="text-center mb-12 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-gradient">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our journey, values, and what makes us the right choice for your digital success.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 animate-on-scroll">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              More than 15 years of experience in industry, we are a creative and results-driven Web Designing & Development Agency dedicated to helping businesses build a powerful online presence. With expertise in UI/UX design, development, branding, logo design, brochure and marketing collateral design with Business Consulting. We deliver websites that are visually stunning, user-friendly, and performance-optimized. Our decade of experience is helping our client to achieve their business objective through our flexible services and ongoing support.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Web Design", "Development", "UI/UX", "Branding", "Logo Design", "Business Consulting"].map((skill, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <Image 
              src="/logo.png" // Replace with your actual image path
              alt="Arnav Creative Solutions Team"
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-2xl brightness-105 contrast-105"
              priority // This ensures the image loads with high priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Arnav Creative Solutions</h3>
                <p className="text-blue-100">Creating digital experiences that make a difference</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-on-scroll">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500 group hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To help businesses grow online through high-quality, affordable, innovative digital solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500 group hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👁️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as a trusted web development partner known for creativity, transparency, and exceptional results.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 animate-on-scroll group hover:shadow-xl transition-shadow duration-500">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💡",
                title: "Creativity & Innovation",
                description: "Pushing boundaries with fresh ideas and innovative solutions"
              },
              {
                icon: "🤝",
                title: "Honesty & Transparency",
                description: "Building trust through open communication and honest partnerships"
              },
              {
                icon: "⭐",
                title: "Quality & Performance",
                description: "Delivering exceptional quality and high-performing solutions"
              },
              {
                icon: "❤️",
                title: "Long-term Client Relationships",
                description: "Focusing on lasting partnerships and ongoing success"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 text-center group-hover:shadow-lg transition-all duration-500 hover:scale-105 hover:border-blue-200"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-on-scroll">
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white group hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Experience</h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              With over 15 years of industry experience, we have worked with startups, small businesses, e-commerce brands, and individuals, helping them turn ideas into fully functional digital products.
            </p>
            
            <div className="space-y-4">
              {[
                { label: "Startups", percentage: "95%", color: "bg-green-400" },
                { label: "Small Businesses", percentage: "98%", color: "bg-blue-400" },
                { label: "E-commerce Brands", percentage: "92%", color: "bg-purple-400" },
                { label: "Individuals", percentage: "90%", color: "bg-orange-400" }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium group-hover:text-green-300 transition-colors duration-300">{item.label}</span>
                    <span className="font-bold group-hover:scale-110 transition-transform duration-300">{item.percentage}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`${item.color} h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                      style={{ width: item.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl shadow-lg p-8 group hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Work With Us?</h3>
              <div className="space-y-4">
                {[
                  "15+ years of industry experience",
                  "Expert team with diverse skills",
                  "Proven track record of success",
                  "Custom solutions for every client",
                  "Ongoing support and maintenance",
                  "Competitive and transparent pricing",
                  "Fast and reliable delivery"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-center text-white group hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-3">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-4">Let's work together to bring your vision to life</p>
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1">
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200 animate-on-scroll">
          {[
            { number: "20+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}