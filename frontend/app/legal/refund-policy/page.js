export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg mb-6">
              We strive to provide the best service possible. Please read our refund policy carefully.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Digital Services Refund</h2>
                <p>
                  Due to the nature of digital services and the resources invested in each project, 
                  we have the following refund policy:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                  <li>Full refund available within 7 days if project hasn't started</li>
                  <li>50% refund available within 14 days if project is in early stages</li>
                  <li>No refund after project completion or 30 days from start date</li>
                  <li>Custom development projects are non-refundable once development begins</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Maintenance</h2>
                <p>
                  Monthly maintenance plans can be canceled at any time with 30 days notice. 
                  Refunds for unused portions are provided on a pro-rata basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request a Refund</h2>
                <p>
                  To request a refund, please contact us at support@webcraft.com with your 
                  project details and reason for refund request.
                </p>
              </section>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
                <p className="text-blue-800">
                  If you have any questions about our refund policy, please contact us before making a purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}