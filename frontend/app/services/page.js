'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Services() {
  const observerRef = useRef(null)

  useEffect(() => {
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

  const services = [
    {
      id: 'web-design',
      icon: '🎨',
      title: 'Web Design',
      description: 'Professional, responsive, and visually stunning website designs tailored to your brand.',
      includes: [
        'UI/UX design',
        'Custom layouts',
        'Mobile-first design',
        'Wireframes & mockups'
      ],
      deliverables: [
        'Design files',
        'Branding guidelines',
        'Creative assets'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'web-development',
      icon: '💻',
      title: 'Web Development',
      description: 'Fast, secure, and scalable websites using modern technologies.',
      includes: [
        'Custom website development',
        'WordPress, Shopify, Wix, Webflow',
        'Frontend & backend development',
        'API integration'
      ],
      deliverables: [
        'Fully functional website',
        'Admin access',
        'Documentation'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ecommerce',
      icon: '💻',
      title: 'E-Commerce Development',
      description: 'Sell online with a powerful and easy-to-manage e-commerce website.',
      includes: [
        'Product management',
        'Payment gateway integration',
        'Inventory setup',
        'Cart & checkout system'
      ],
      deliverables: [
        'Ready-to-sell online store',
        'Training sessions',
        'Documentation'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'seo',
      icon: '🔍',
      title: 'SEO',
      description: 'Increase visibility, traffic, and ranking with comprehensive search engine optimization.',
      includes: [
        'On-page optimization',
        'Keyword research',
        'Page speed optimization',
        'Technical SEO'
      ],
      deliverables: [
        'SEO audit report',
        'Optimized website',
        'Performance metrics'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'branding',
      icon: '✨',
      title: 'Branding & Logo Design',
      description: 'Make your business stand out with modern branding and professional identity.',
      includes: [
        'Logo design',
        'Brand identity kit',
        'Social media post templates'
      ],
      deliverables: [
        'Logo files (AI, PNG, SVG)',
        'Brand style guide',
        'Social media kit'
      ],
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'maintenance',
      icon: '🛠️',
      title: 'Website Maintenance',
      description: 'Keep your website secure, updated, and running smoothly with ongoing support.',
      includes: [
        'Regular updates',
        'Backups',
        'Security monitoring',
        'Bug fixes',
        'Speed optimization'
      ],
      deliverables: [
        'Monthly reports',
        'Security certificates',
        'Performance analytics'
      ],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 animate-on-scroll overflow-hidden"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-br ${service.gradient} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-white/90 text-sm mt-1">{service.description}</p>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 space-y-6">
                {/* Includes Section */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 group/item">
                        <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                        <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables Section */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 group/item">
                        <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                        <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link 
                  href="/contact"
                  className="block w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center"
                >
                  Get This Service
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 animate-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, transparent process from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your needs and goals', icon: '🔍' },
              { step: '02', title: 'Planning', desc: 'Create strategy and timeline', icon: '📋' },
              { step: '03', title: 'Development', desc: 'Build and test your solution', icon: '🚀' },
              { step: '04', title: 'Delivery', desc: 'Launch and provide support', icon: '🎯' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-white-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">{process.icon}</span>
                </div>
                <div className="text-sm font-semibold text-blue-600 mb-2">Step {process.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-center text-white animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-center"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 text-center"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200 animate-on-scroll">
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "50+", label: "Technologies Used" }
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
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