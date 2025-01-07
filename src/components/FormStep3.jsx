import React from "react";

const FormStep3 = ({ nextStep, prevStep, handleChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">আপনি কি আগে থেকেই এজেন্ট হায়ার করেছেন?</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => {
            handleChange("hasAgent", true);
            nextStep();
          }}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          হ্যাঁ
        </button>
        <button
          onClick={() => {
            handleChange("hasAgent", false);
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

export default FormStep3;
