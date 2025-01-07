import React from "react";

const FormStep6 = ({ formData }) => {
  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">আপনার তথ্য যাচাই করুন:</h2>
      <ul className="list-disc pl-5">
        <li>শহর: {formData.city}</li>
        <li>বাজেট: {formData.priceRange}</li>
        <li>এজেন্ট হায়ার করেছেন?: {formData.hasAgent ? "হ্যাঁ" : "না"}</li>
      </ul>
      <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded mt-4">
        সাবমিট করুন
      </button>
    </div>
  );
};

export default FormStep6;
