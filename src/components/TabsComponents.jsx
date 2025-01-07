import React, { useState } from "react";
import MultiStepForm from "./MultiStepForm";
import TopArrowIcon from "../../public/icons/TopArrow";

const TabsComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [showMultiStepForm, setShowMultiStepForm] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
  });

  // Enable the button when address is filled
  const isFormComplete = formData.address.trim().length > 0;

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Collected Form Data: ", formData);
    setShowMultiStepForm(true); // Show MultiStepForm after submission
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      {!showMultiStepForm ? (
        <div>
          {/* Tabs Navigation */}
          <div className="flex justify-start pt-6 border-b border-gray-200">
            <div className="bg-white flex gap-4 px-5 rounded-t-2xl">
              {["Sell", "Buy", "Sell & Buy"].map((label, index) => (
                <button
                  key={index}
                  onClick={() => setTabIndex(index)}
                  className={`pb-2 text-2xl font-semibold px-8 py-3 ${
                    tabIndex === index
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-500 hover:text-blue-500"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Form Container (Styled Like Original) */}
          <div className="p-4 rounded-lg">
            <div className="flex w-full items-center gap-4">
              {/* Address Input */}
              <input
                type="text"
                placeholder="Enter the address you are selling"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full py-4 px-6 rounded-2xl placeholder:font-medium placeholder:text-[#A5A5AB] placeholder:text-xl border border-gray-300"
              />
              {/* Compare Agents Button */}
              <button
                onClick={handleSubmit}
                disabled={!isFormComplete}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl text-white text-xl ${
                  isFormComplete ? "bg-[#23298B] hover:bg-blue-800" : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Compare Agents
                <TopArrowIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <MultiStepForm formData={formData} />
      )}
    </div>
  );
};

export default TabsComponent;
