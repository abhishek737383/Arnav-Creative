'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  // Use the uploaded image path as the logo source:
  const business = {
    ownerName: 'Rakesh Maurya',
    title: 'Business Owner',
    phone: '+91 - 9892018597',
    email: 'acstechbiz@outlook.com',
    website: 'https://arnav-creative.netlify.app',
    location: 'Mumbai - 401107',
    tagline: 'Sell More With Smart Solutions',
    // <-- real uploaded file path (will be converted to a served URL by your environment)
    logoSrc: '/logo.png'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Service Needed:* ${formData.service || 'Not specified'}

*Project Details:*
${formData.message}

*Submitted via:* arnav-creative.netlify.app
    `.trim()

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/919892018597?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    alert('Thank you — opening WhatsApp to send your details.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const openWhatsAppChat = () => {
    const message = "Hi! I visited your website and I'm interested in your services. Let's chat on WhatsApp!"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919892018597?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get Your <span className="text-blue-600">Free Quote</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Fill out the form and we'll connect with you on WhatsApp immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="branding">Branding & Logo Design</option>
                    <option value="business-freelancing">Business Freelancing</option>
                    <option value="maintenance">Website Maintenance</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-vertical"
                  placeholder="Tell us about your project, requirements, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform hover:-translate-y-1 flex items-center justify-center"
              >
                {/* WhatsApp SVG icon (white) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.478A11.83 11.83 0 0 0 12.03.5C5.88.5.99 5.38.99 11.53c0 2.01.53 3.98 1.54 5.72L.09 23.5l6.5-1.7c1.6.88 3.44 1.34 5.44 1.34 6.15 0 11.04-4.88 11.04-10.99 0-2.95-1.17-5.7-3.06-7.66zM12.03 21.5c-1.7 0-3.36-.43-4.82-1.24l-.34-.2-3.86 1.01 1.03-3.77-.22-.37A8.07 8.07 0 0 1 3.02 11.53c0-4.45 4.01-8.07 9.01-8.07 2.4 0 4.65.92 6.34 2.6a8.77 8.77 0 0 1 2.6 6.54c0 4.46-3.99 8.37-8.94 8.37z"/>
                  <path d="M17.2 14.27c-.27-.14-1.6-.79-1.85-.88-.25-.1-.43-.14-.61.14-.18.28-.71.88-.87 1.06-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.35-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.47-.07-.14-.61-1.48-.84-2.03-.22-.54-.44-.47-.61-.48l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.97.95-.97 2.33 0 1.38.99 2.71 1.12 2.9.14.18 1.9 2.9 4.7 3.95 2.8 1.06 2.8.71 3.31.67.52-.04 1.68-.68 1.92-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.18-.52-.32z"/>
                </svg>
                Send via WhatsApp
              </button>

              {/* Quick WhatsApp Chat Button */}
              <button
                type="button"
                onClick={openWhatsAppChat}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform hover:-translate-y-1 flex items-center justify-center mt-4"
              >
                {/* WhatsApp circle icon (white) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.478A11.83 11.83 0 0 0 12.03.5C5.88.5.99 5.38.99 11.53c0 2.01.53 3.98 1.54 5.72L.09 23.5l6.5-1.7c1.6.88 3.44 1.34 5.44 1.34 6.15 0 11.04-4.88 11.04-10.99 0-2.95-1.17-5.7-3.06-7.66zM12.03 21.5c-1.7 0-3.36-.43-4.82-1.24l-.34-.2-3.86 1.01 1.03-3.77-.22-.37A8.07 8.07 0 0 1 3.02 11.53c0-4.45 4.01-8.07 9.01-8.07 2.4 0 4.65.92 6.34 2.6a8.77 8.77 0 0 1 2.6 6.54c0 4.46-3.99 8.37-8.94 8.37z"/>
                  <path d="M17.2 14.27c-.27-.14-1.6-.79-1.85-.88-.25-.1-.43-.14-.61.14-.18.28-.71.88-.87 1.06-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.35-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.47-.07-.14-.61-1.48-.84-2.03-.22-.54-.44-.47-.61-.48l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.97.95-.97 2.33 0 1.38.99 2.71 1.12 2.9.14.18 1.9 2.9 4.7 3.95 2.8 1.06 2.8.71 3.31.67.52-.04 1.68-.68 1.92-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.18-.52-.32z"/>
                </svg>
                Let's Chat on WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={business.logoSrc}
                  alt="Arnav Creative Solutions logo"
                  className="w-24 h-24 object-cover rounded-md shadow-sm bg-white"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{business.ownerName}</h2>
                  <p className="text-gray-600">{business.title}</p>
                  <p className="text-blue-600 font-semibold text-sm mt-1">Arnav Creative Solutions</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      <a href={`tel:${business.phone.replace(/\s|-/g, '')}`} className="hover:underline">
                        {business.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href={`mailto:${business.email}`} className="hover:underline">
                        {business.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Website</h3>
                    <p className="text-gray-600">
                      <a href={business.website} target="_blank" rel="noreferrer" className="hover:underline">
                        {business.website.replace(/^https?:\/\//, '')}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">{business.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Why Choose Arnav Creative Solutions?</h2>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>15+ years of industry experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Free consultation & quote</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Fast project delivery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Competitive pricing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span>Business consulting included</span>
                </li>
              </ul>
              <p className="mt-6 italic font-semibold text-white/90">{business.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
