'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaHandshake } from "react-icons/fa";

export default function Home() {
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

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Starts immediately after navbar */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white pt-0 pb-20 lg:pb-32 relative overflow-hidden">
        {/* Remove top padding and adjust background elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-pulse">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></span>
                <span className="text-sm font-medium text-blue-100">Trusted by 50+ Businesses</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We Design & Develop
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
           Modern, Responsive
           </span>
             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
               High-Converting Websites
              </span>
               </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Professional web design, development, SEO, branding, and complete digital solutions for your business.
              </p>
              <div className="flex justify-center items-center animate-on-scroll">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform hover:-translate-y-1 active:scale-95 text-center"
                >
                  Get a Free Quote
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20 animate-on-scroll">
                {[
                  { number: '20+', label: 'Projects Done' },
                  { number: '99%', label: 'Client Satisfaction' },
                  { number: '10+', label: 'Team Members' },
                  { number: '24/7', label: 'Support' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full translate-y-48 -translate-x-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through innovative solutions and proven methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Custom, mobile-friendly designs",
                description: "Responsive designs that work perfectly on all devices"
              },
              {
                icon: "⚡",
                title: "Fast loading & SEO-ready websites",
                description: "Optimized for speed and search engine visibility"
              },
              {
                icon: "💰",
                title: "Affordable pricing packages",
                description: "Competitive pricing with transparent costs"
              },
              {
                icon: "🛠️",
                title: "Friendly support & maintenance",
                description: "24/7 support and regular maintenance services"
              },
              {
                icon: "✅",
                title: "100% client satisfaction guarantee",
                description: "We ensure complete satisfaction with our work"
              },
              {
                icon: "🎯",
                title: "Modern Technology Stack",
                description: "Latest frameworks and tools for best performance"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 border border-gray-200/50 animate-on-scroll relative overflow-hidden"
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Design",
                description: "Beautiful, user-friendly designs that convert visitors into customers",
                icon: "🎨",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Web Development",
                description: "Robust, scalable websites built with modern technologies",
                icon: "💻",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "E-commerce Websites",
                description: "Complete online stores with secure payment integration",
                icon: "💼",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Branding & Logo Design",
                description: "Memorable brand identity that stands out from competition",
                icon: "✨",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "Website Maintenance",
                description: "Regular updates, security patches, and performance optimization",
                icon: "🔧",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                title: "Business Freelancing",
               description: "Professional freelancing solutions for your business needs",
               icon: <FaHandshake className="text-4xl" />,
               gradient: "from-indigo-500 to-purple-500"
                 }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 animate-on-scroll relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4">
                  <Link 
                    href="/contact" 
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform inline-block"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio - Enhanced Section */}
      <section id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our latest projects that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-on-scroll">
            {[
              {
                title: "Modern Business Website",
                type: "Corporate Design",
                description: "A sleek, professional website for a growing tech company with advanced functionality",
                image: "💻",
                color: "from-blue-500 to-cyan-600",
                features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
              },
              {
                title: "E-commerce Store",
                type: "Online Retail",
                description: "Complete online shopping experience with secure payments and inventory management",
                image: "💼",
                color: "from-green-500 to-emerald-600",
                features: ["Payment Gateway", "Product Management", "Order Tracking"]
              },
              {
                title: "Creative Portfolio",
                type: "Artist Showcase",
                description: "Stunning portfolio website for a creative professional with interactive galleries",
                image: "🎨",
                color: "from-purple-500 to-pink-600",
                features: ["Image Gallery", "Contact Forms", "Social Integration"]
              },
              {
                title: "Marketing Landing Page",
                type: "Conversion Focused",
                description: "High-converting landing page designed to generate leads and drive sales",
                image: "🚀",
                color: "from-orange-500 to-red-600",
                features: ["Lead Capture", "Analytics", "A/B Testing"]
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-on-scroll"
              >
                <div className={`bg-gradient-to-br ${project.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 relative overflow-hidden min-h-96 flex flex-col justify-between`}>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* Top Content */}
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                        {project.type}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-white/90 leading-relaxed mb-4">{project.description}</p>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href="/portfolio"
                      className="block w-full bg-white text-gray-900 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform group-hover:-translate-y-1 active:scale-95 text-center"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-on-scroll">
            {[
              { number: "98%", label: "Client Satisfaction" },
              { number: "24h", label: "Avg. Response Time" },
              { number: "20+", label: "Projects Completed" },
              { number: "100%", label: "On-Time Delivery" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-6xl mb-6 animate-bounce">❝</div>
          <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed animate-on-scroll">
            "Amazing service! The website exceeded our expectations. Highly recommended for anyone looking for professional web solutions."
          </blockquote>
          <div className="text-xl font-semibold text-blue-300 mb-2 animate-on-scroll">
            — Sarah Johnson
          </div>
          <div className="text-blue-200 mb-8 animate-on-scroll">TechStart Inc</div>
          <div className="flex justify-center space-x-1 animate-on-scroll">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-2xl text-yellow-400 animate-pulse" style={{ animationDelay: `${star * 100}ms` }}>⭐</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-on-scroll">
            Let's create a website that not only looks amazing but also drives real business results. Start your project today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform hover:-translate-y-1 active:scale-95 text-center"
            >
              Get a Free Quote
            </Link>
            <button 
              onClick={scrollToPortfolio}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1 active:scale-95"
            >
              View Our Work
            </button>
          </div>
          <p className="text-blue-200 mt-6 text-sm animate-on-scroll">
            No commitment required • Free consultation • 24/7 support
          </p>
        </div>
      </section>
    </div>
  )
}