import React from "react";

const FormStep1 = ({ nextStep, handleChange }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">আপনি কোন শহরে বাড়ি কিনতে চান?</h2>
      <input
        type="text"
        className="w-full p-3 border rounded mb-4"
        placeholder="আপনার শহরের নাম লিখুন"
        onChange={(e) => handleChange("city", e.target.value)}
      />
      <button onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded">
        পরবর্তী
      </button>
    </div>
  );
};

export default FormStep1;
