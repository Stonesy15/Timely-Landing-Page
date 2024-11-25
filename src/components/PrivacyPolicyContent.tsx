import React from 'react';

const PrivacyPolicyContent = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="text-gray-600 mb-4">
          We collect information that you provide directly to us, including when you:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Create an account</li>
          <li>Make a booking</li>
          <li>Contact our customer service</li>
          <li>Subscribe to our newsletter</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Process your bookings</li>
          <li>Send you important updates</li>
          <li>Improve our services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
        <p className="text-gray-600">
          We do not sell your personal information. We may share your information with:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Service providers</li>
          <li>Business partners</li>
          <li>Law enforcement when required</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
        <p className="text-gray-600">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicyContent;