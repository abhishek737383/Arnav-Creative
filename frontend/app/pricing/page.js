'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
  const observerRef = useRef(null)
  const [isAnnual, setIsAnnual] = useState(false)

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

  const plans = [
    {
      id: 1,
      name: "Starter Website",
      description: "Perfect for small businesses and personal websites",
      features: [
        "3-5 pages website",
        "Mobile-friendly responsive design",
        "Contact form integration",
        "Basic SEO optimization",
        "Social media integration",
        "Google Analytics setup",
        "1 month free support",
        "Delivery: 5-7 business days"
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
      icon: "🚀"
    },
    {
      id: 2,
      name: "Business Pro",
      description: "Ideal for growing businesses and professional services",
      features: [
        "5-10 pages custom website",
        "Premium UI/UX design",
        "Advanced speed optimization",
        "Complete SEO setup",
        "Content management system",
        "E-commerce functionality",
        "3 months premium support",
        "Performance analytics",
        "SSL Certificate",
        "Delivery: 10-15 business days"
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: true,
      icon: "💼"
    },
    {
      id: 3,
      name: "E-commerce Plus",
      description: "Complete online store with advanced features",
      features: [
        "Unlimited products & categories",
        "Secure payment gateway integration",
        "Advanced inventory management",
        "Customer account system",
        "Order tracking & management",
        "Email marketing integration",
        "6 months premium support",
        "Marketing tools & coupons",
        "Advanced security features",
        "Mobile app ready",
        "Delivery: 15-20 business days"
      ],
      gradient: "from-green-500 to-emerald-500",
      popular: false,
      icon: "💻"
    },
    {
      id: 4,
      name: "Custom Enterprise",
      description: "Tailored solutions for complex business needs",
      features: [
        "Fully custom design & development",
        "Advanced functionality & features",
        "Database integration & APIs",
        "User authentication system",
        "Real-time features & updates",
        "Scalable cloud architecture",
        "Dedicated project manager",
        "Priority 24/7 support",
        "Advanced analytics dashboard",
        "Multi-platform integration",
        "Flexible timeline & milestones"
      ],
      gradient: "from-orange-500 to-red-500",
      popular: false,
      icon: "⚡"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium mb-6">
            💰 Transparent Pricing • No Hidden Costs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-blue-600">Perfect Plan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            All-inclusive packages with everything you need to succeed online.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer animate-on-scroll ${
                plan.popular 
                  ? 'transform scale-105 ring-2 ring-purple-500 border border-purple-500' 
                  : 'border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-white text-center rounded-t-3xl`}>
                <div className="text-4xl mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                
                {/* Get Started Now Section */}
                <div className="text-center mb-3">
                  <div className="text-2xl md:text-3xl font-bold">Get Started Now</div>
                  <div className="text-white/70 text-sm mt-2">No credit card required</div>
                </div>
                
                <p className="text-white/90 text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* Plan Features */}
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-6 text-lg text-center border-b border-gray-200 pb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <span className="text-green-500 mt-1 flex-shrink-0 text-lg">✓</span>
                        <span className="text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link 
                  href="/contact"
                  className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 hover:shadow-lg ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                      : plan.id === 4
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started Now
                </Link>

                {/* Additional Info */}
                <div className="text-center mt-4">
                  <p className="text-gray-500 text-sm">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16 animate-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plan <span className="text-blue-600">Comparison</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our plans stack up against each other
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 font-bold text-gray-900">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="text-center py-4 font-bold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Number of Pages", values: ["3-5", "5-10", "Unlimited", "Unlimited"] },
                  { feature: "Support Period", values: ["1 Month", "3 Months", "6 Months", "12 Months"] },
                  { feature: "Delivery Time", values: ["5-7 Days", "10-15 Days", "15-20 Days", "Custom"] },
                  { feature: "SEO Optimization", values: ["Basic", "Advanced", "Advanced", "Enterprise"] },
                  { feature: "E-commerce", values: ["No", "Yes", "Yes", "Yes"] },
                  { feature: "Custom Features", values: ["No", "Limited", "Yes", "Yes"] }
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 font-medium text-gray-700">{row.feature}</td>
                    {row.values.map((value, colIndex) => (
                      <td key={colIndex} className="text-center py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          value === "Yes" || value === "Advanced" || value === "Enterprise"
                            ? "bg-green-100 text-green-800"
                            : value === "No" || value === "Basic"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {value}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              quote: "The Business Pro plan was perfect for our agency. The value for money is incredible!",
              author: "Rohan Bhatt",
              company: "Marketing Director",
              rating: 5
            },
            {
              quote: "From start to finish, the process was smooth. The e-commerce store exceeded our expectations.",
              author: "Abhishek Kushwaha",
              company: "King Products",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-center text-white animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 500+ satisfied clients who trusted us with their online presence. 
            Let's build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-center min-w-48"
            >
              Get Free Consultation
            </Link>
          </div>
          <p className="text-blue-200 mt-6 text-sm">
            💬 Free consultation • 📞 24/7 support
          </p>
        </div>
      </div>
    </div>
  )
}