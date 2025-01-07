import React from "react";

const FormStep5 = ({ nextStep, prevStep, handleChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">আপনার কোন অতিরিক্ত তথ্য আছে?</h2>
      <textarea
        className="w-full p-3 border rounded mb-4"
        placeholder="অতিরিক্ত তথ্য লিখুন..."
        onChange={(e) => handleChange("additionalDetails", e.target.value)}
      />
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

export default FormStep5;
