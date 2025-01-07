import React from "react";

const FormStep4 = ({ nextStep, prevStep, handleChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">আপনি কি বাড়ি বিক্রি করতে চান?</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => {
            handleChange("sellingHome", true);
            nextStep();
          }}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          হ্যাঁ
        </button>
        <button
          onClick={() => {
            handleChange("sellingHome", false);
            nextStep();
          }}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          না
        </button>
      </div>
      <button onClick={prevStep} className="mt-4 bg-gray-400 text-white py-2 px-4 rounded">
        আগের ধাপ
      </button>
    </div>
  );
};

export default FormStep4;
