export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg mb-6">
              Your privacy is important to us. This policy explains how we collect, store, and use your data.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact information (name, email, phone)</li>
                  <li>Project requirements and details</li>
                  <li>Website usage data through analytics</li>
                  <li>Communication history</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about your project</li>
                  <li>To improve our services and user experience</li>
                  <li>To send updates and marketing communications (with consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
                <p>
                  We implement security measures to protect your personal information and 
                  never share it with third parties without your consent, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information 
                  at any time by contacting us at privacy@webcraft.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}