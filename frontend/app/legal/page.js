import Link from 'next/link'

export default function Legal() {
  const legalDocs = [
    {
      title: "Privacy Policy",
      description: "How we collect, store, and use your data",
      href: "/legal/privacy-policy",
      icon: "🔒"
    },
    {
      title: "Terms & Conditions",
      description: "Usage rules, rights, and limitations",
      href: "/legal/terms-conditions",
      icon: "📄"
    },
    {
      title: "Refund Policy",
      description: "Refund conditions for digital services",
      href: "/legal/refund-policy",
      icon: "💳"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Legal <span className="text-blue-600">Documents</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Important legal information about our services and policies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {legalDocs.map((doc, index) => (
            <Link 
              key={index}
              href={doc.href}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {doc.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {doc.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {doc.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Questions?</h3>
          <p className="text-blue-800 mb-4">
            If you have any questions about our legal documents, please contact us.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}