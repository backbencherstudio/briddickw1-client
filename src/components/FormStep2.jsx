import React from "react";

const FormStep2 = ({ nextStep, prevStep, handleChange }) => {
  const priceRanges = ["$100k - $200k", "$200k - $300k", "$300k - $500k", "$500k - $550k", "$5M+"];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">আপনার বাজেট কত?</h2>
      <select
        className="w-full p-3 border rounded mb-4"
        onChange={(e) => handleChange("priceRange", e.target.value)}
      >
        {priceRanges.map((range, idx) => (
          <option key={idx} value={range}>
            {range}
          </option>
        ))}
      </select>
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-400 text-white py-2 px-4 rounded">
          আগের ধাপ
        </button>
        <button onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded">
          পরবর্তী
        </button>
      </div>
    </div>
  );
};

export default FormStep2;
