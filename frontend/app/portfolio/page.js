'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Portfolio() {
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

  const projects = [
    {
      id: 1,
      title: "Business Website",
      client: "Demo Business",
      goal: "Create a professional website to attract new customers",
      solution: "Designed a clean UI and built a fast, responsive business website",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      results: "Improved user engagement and generated inquiries",
      image: "💼",
      category: "Business",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "E-commerce Website",
      client: "Sample Store",
      goal: "Build an online store",
      solution: "Fully functional e-commerce site with product management",
      technologies: ["Shopify"],
      results: "Increased sales and improved brand image",
      image: "💻",
      category: "E-commerce",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Portfolio Website",
      client: "Creative Professional",
      goal: "Build a personal branding website",
      solution: "Modern, minimalistic design with gallery",
      technologies: ["Webflow"],
      results: "Enhanced online presence and increased client inquiries",
      image: "🎨",
      category: "Portfolio",
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  const categories = ["All", "Business", "E-commerce", "Portfolio"]

  return (
    <div className="min-h-screen bg-gray-50 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our demo projects and see how we can help transform your online presence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full bg-white text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 animate-on-scroll overflow-hidden"
            >
              {/* Project Image/Icon */}
              <div className={`bg-gradient-to-br ${project.gradient} h-48 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-white">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-medium">Client: {project.client}</p>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Goal
                    </h4>
                    <p className="text-gray-600 text-sm">{project.goal}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Solution
                    </h4>
                    <p className="text-gray-600 text-sm">{project.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Results
                    </h4>
                    <p className="text-gray-600 text-sm">{project.results}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Link 
                    href="/contact"
                    className="block w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 text-center"
                  >
                    Start Similar Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-on-scroll">
          {[
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "Fast", label: "Delivery" },
            { number: "Custom", label: "Solutions" }
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-center text-white animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Share your vision and we'll bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-center"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}