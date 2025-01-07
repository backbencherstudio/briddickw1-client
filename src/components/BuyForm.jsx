// import { useState } from "react";
// import MultiStepForm from "./MultiStepForm";

// const BuyForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const buyFormSteps = [
//     { step: 1, label: "Where to Buy?" },
//     { step: 2, label: "Budget Selection" },
//     { step: 3, label: "Agent Question" },
//     { step: 4, label: "Selling Home?" },
//     { step: 5, label: "Details to Share" },
//     { step: 6, label: "Contact Information" },
//     { step: 7, label: "Phone Number Confirmation" },
//     { step: 8, label: "Verification Code" },
//     { step: 9, label: "Submit Details" },
//   ];

//   return (
//     <MultiStepForm
//       formType="Buy"
//       steps={buyFormSteps}
//       currentStep={currentStep}
//       setCurrentStep={setCurrentStep}
//     />
//   );
// };

// export default BuyForm;

import TopArrowIcon from "../../public/icons/TopArrow";

const BuyForm = () => {
  return (
    <div className="p-4 rounded-lg">
      <div className="flex w-[910px] h-24 items-center gap-4">
        <input
          type="text"
          placeholder="Enter the address you are selling"
          className="w-full mt-2 py-9 px-4 rounded-2xl placeholder:font-medium placeholder:text-[#A5A5AB] placeholder:text-xl leading-6"
        />
        <div className="bg-[#23298B] flex items-center px-4 py-8 rounded-xl">
          <button className="text-nowrap text-white text-xl flex items-center gap-3">
            Compare Agents
            <TopArrowIcon className="w-9 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
