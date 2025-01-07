
// import { useState } from "react";
// import MultiStepForm from "./MultiStepForm";

import TopArrowIcon from "../../public/icons/TopArrow";

// const SellBuyForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const sellBuySteps = [
//     { step: 1, label: "Enter Address to Sell" },
//     { step: 2, label: "Buying City" },
//     { step: 3, label: "Budget Selection" },
//     { step: 4, label: "Agent Information" },
//     { step: 5, label: "Details to Share" },
//     { step: 6, label: "Contact Info" },
//     { step: 7, label: "Phone Number Verification" },
//     { step: 8, label: "Verification Code" },
//     { step: 9, label: "Final Confirmation" },
//   ];

//   return (
//     <MultiStepForm
//       formType="Sell & Buy"
//       steps={sellBuySteps}
//       currentStep={currentStep}
//       setCurrentStep={setCurrentStep}
//     />
//   );
// };

// export default SellBuyForm;


const SellBuyForm = () => {
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

export default SellBuyForm;

