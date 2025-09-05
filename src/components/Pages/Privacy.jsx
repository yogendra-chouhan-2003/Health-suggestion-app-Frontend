import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">
        Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">1. Information We Collect</h2>
      <p className="text-gray-600 mb-3">
        We may collect personal details such as your name, email address, and usage data to improve our services.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. How We Use Information</h2>
      <p className="text-gray-600 mb-3">
        Information collected is used to provide and improve our services, communicate with you, and enhance security.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Data Protection</h2>
      <p className="text-gray-600 mb-3">
        We implement strict measures to safeguard your personal information against unauthorized access.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Sharing of Information</h2>
      <p className="text-gray-600 mb-3">
        We do not sell or rent your personal data to third parties. Information may only be shared if required by law.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Changes to Policy</h2>
      <p className="text-gray-600 mb-3">
        We may update this policy from time to time. Please review it periodically for changes.
      </p>
    </div>
  );
};

export default Privacy;
