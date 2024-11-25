import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using our services, you agree to be bound by these Terms of
                Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-gray-600">
                Timely provides logistics and transportation services, including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Freight transportation</li>
                <li>Warehousing</li>
                <li>Package delivery</li>
                <li>Logistics consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600">
                Users of our services agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Provide accurate information</li>
                <li>Maintain account security</li>
                <li>Comply with shipping regulations</li>
                <li>Pay for services as agreed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Liability</h2>
              <p className="text-gray-600">
                Our liability is limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Direct damages up to the value of the service</li>
                <li>Exclusions for force majeure events</li>
                <li>Limitations as per applicable law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Continued use of our
                services constitutes acceptance of updated terms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;