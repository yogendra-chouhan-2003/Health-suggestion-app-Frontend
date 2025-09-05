import React from "react";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-6">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4 text-gray-700">
        By using this application, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">1. Use of Service</h2>
      <p className="text-gray-600 mb-3">
        You must use the service only for lawful purposes. Any unauthorized use may result in termination of your account.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. User Responsibilities</h2>
      <p className="text-gray-600 mb-3">
        You are responsible for maintaining the confidentiality of your account and password.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Limitation of Liability</h2>
      <p className="text-gray-600 mb-3">
        We are not responsible for any damages resulting from the use or inability to use our service.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Changes to Terms</h2>
      <p className="text-gray-600 mb-3">
        We reserve the right to update or modify these terms at any time without prior notice.
      </p>
    </div>
  );
};

export default Terms;
