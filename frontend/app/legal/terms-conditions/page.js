export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg mb-6">
              Please read these terms carefully before using our services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Agreement</h2>
                <p>
                  By engaging our services, you agree to these terms and conditions. 
                  All projects are subject to mutual agreement on scope, timeline, and budget.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>50% deposit required to start any project</li>
                  <li>Balance due upon project completion</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All prices are in INR unless specified otherwise</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p>
                  All code, designs, and content created by us remain our property until 
                  full payment is received. Upon completion, you receive full ownership 
                  of the delivered work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
                <p>
                  We are not liable for any indirect damages resulting from the use of our services. 
                  Our liability is limited to the amount paid for the services rendered.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of our 
                  services constitutes acceptance of the modified terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}