import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                WebCraft
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              We create digital experiences that inspire and drive results for businesses worldwide.
            </p>
            <div className="flex space-x-3">
              {['📘', '🐦', '📷', '💼'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <div className="space-y-2">
              {[
                'Web Design',
                'Web Development',
                'E-commerce',
                'SEO',
                'Branding',
                'Maintenance'
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="block text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>hello@webcraft.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} WebCraft. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/legal/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms & Conditions
              </Link>
              <Link href="/legal/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}