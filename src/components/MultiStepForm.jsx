// import { useState } from "react";
// import FormStep1 from "./FormStep1";
// import FormStep2 from "./FormStep2";
// import FormStep3 from "./FormStep3";
// import FormStep4 from "./FormStep4";
// import FormStep5 from "./FormStep5";
// import FormStep6 from "./FormStep6";


// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     city: "",
//     priceRange: "$500k - $550k",
//     hasAgent: null,
//     sellingHome: null,
//     additionalDetails: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: ""
//   });

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   const handleChange = (key, value) => {
//     setFormData({ ...formData, [key]: value });
//   };

//   return (
//     <div>
//       {step === 1 && <FormStep1 nextStep={nextStep} handleChange={handleChange} />}
//       {step === 2 && <FormStep2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
//       {step === 3 && <FormStep3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
//       {step === 4 && <FormStep4 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
//       {step === 5 && <FormStep5 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />}
//       {step === 6 && <FormStep6 formData={formData} />}
//     </div>
//   );
// };

// export default MultiStepForm;

import React, { useState } from "react";

const MultiStepForm = () => {
  const steps = [
    "Enter Address",
    "Select Price Range",
    "Agent Information",
    "Selling or Buying Details",
    "Additional Info",
    "Contact Information",
    "Phone Number Verification",
    "Confirmation Code",
    "Submission Complete",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{
            width: `${((currentStep + 1) / steps.length) * 100}%`,
          }}
        ></div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Step {currentStep + 1}: {steps[currentStep]}</h2>

      <div className="mt-4">
        {/* Example Input Field */}
        <p className="text-gray-700">Enter your details for this step:</p>
        <input
          type="text"
          placeholder={`Details for step ${currentStep + 1}`}
          className="w-full mt-3 p-3 border rounded focus:outline-blue-500"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          className={`${
            currentStep === 0 ? "hidden" : "bg-gray-400"
          } text-white px-6 py-2 rounded`}
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded"
          onClick={nextStep}
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>

      {currentStep === steps.length - 1 && (
        <div className="mt-6 text-center">
          <h3 className="text-green-600 font-bold">Form Completed! 🎉</h3>
          <p>Your information has been successfully submitted!</p>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
