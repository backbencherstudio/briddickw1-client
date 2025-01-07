import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

// Form steps data structure
const INITIAL_FORM_DATA = {
  addressToSell: "",
  cityToBuy: "",
  priceRange: [500],
  hasAgent: false,
  lookingToSell: false,
  additionalDetails: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const SellMultipleForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Here you can add your API call or submission logic
  };

  const steps = [
    // Step 2: Location
    {
      content: (
        <div className="w-[1087px] bg-white">
          {/* <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Where are you looking to Sell?</h2>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div> */}
          <div className="flex items-center gap-4 py-4 px-4">
            <div className="w-full ">
              <Input
                className="py-7"
                placeholder="Enter your city name"
                value={formData.cityToBuy}
                onChange={(e) => updateFormData("cityToBuy", e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        </div>
      ),
    },
    // Step 3: Price Range
    {
      content: (
        <div className="w-[1087px]">
          <div className="flex justify-between items-center mb-4 px-20">
            <h2 className="font-semibold text-[#0F113A] text-2xl my-4">
              What price range are you looking to buy?
            </h2>
          </div>
          <div className="py-8 w-[750px] mx-auto font-bold text-3xl">
            <div className="text-center mb-4">
              ${formData.priceRange[0]}k - ${formData.priceRange[0] + 50}K
            </div>
            <Slider
              defaultValue={[500]}
              max={5000}
              min={100}
              step={50}
              value={formData.priceRange}
              onValueChange={(value) => updateFormData("priceRange", value)}
            />
            <div className="flex justify-between mt-2">
              <span>$100k</span>
              <span>$5M+</span>
            </div>
          </div>
          <div className="flex justify-between mx-20 py-8">
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      ),
    },
    // Step 4: Agent Question
    {
      content: (
        <div className="w-[1087px] mt-20 px-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#0F113A] text-3xl font-semibold">
              Have you already hired a real estate Agent?
            </h2>
          </div>
          <div className="flex space-x-4 mt-10">
            <Button
              variant={formData.hasAgent ? "default" : "outline"}
              onClick={() => updateFormData("hasAgent", true)}
            >
              Yes
            </Button>
            <Button
              variant={!formData.hasAgent ? "default" : "outline"}
              onClick={() => updateFormData("hasAgent", false)}
            >
              No
            </Button>
          </div>
          <div className="flex justify-between mx-20 mt-20 my-10">
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      ),
    },
    // Step 5: Selling Question
    {
      content: (
        <div className="w-[1087px] mt-20 px-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#0F113A] text-3xl font-semibold">
              Are you also looking to sell a home?
            </h2>
          </div>
          <div className="flex space-x-4 mt-10">
            <Button
              variant={formData.lookingToSell ? "default" : "outline"}
              onClick={() => updateFormData("lookingToSell", true)}
            >
              Yes
            </Button>
            <Button
              variant={!formData.lookingToSell ? "default" : "outline"}
              onClick={() => updateFormData("lookingToSell", false)}
            >
              No
            </Button>
          </div>
          <div className="flex justify-between mx-20 mt-20 my-10">
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      ),
    },
    // Step 6: Additional Details
    {
      content: (
        <div className="w-[1087px] mt-20 px-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#0F113A] text-3xl font-semibold">
              Are there any other details you did like to share?
            </h2>
          </div>
          <textarea
            className="w-full h-32 p-2 border rounded-md"
            placeholder="Enter any details about your real estate needs..."
            value={formData.additionalDetails}
            onChange={(e) =>
              updateFormData("additionalDetails", e.target.value)
            }
          />
          <div className="flex justify-between mx-20 mt-20 my-10">
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      ),
    },
    // Step 7: Contact Details
    {
      content: (
        <div className="w-[1087px] mt-20 px-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#0F113A] text-3xl font-semibold">
              Last step! Now just add a few contact details
            </h2>
          </div>
          <p className="text-sm text-gray-600">
            This is where RealEstateAgents.com and our agents will contact you
            to discuss your needs
          </p>
          <div className="space-y-4 my-10">
            <div className="flex items-center gap-5">
              <Input
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => updateFormData("firstName", e.target.value)}
                className="px-5 py-6 bg-[#ECEFF3]"
              />
              <Input
                placeholder="Last name"
                value={formData.lastNmae}
                onChange={(e) => updateFormData("lastName", e.target.value)}
                className="px-5 py-6 bg-[#ECEFF3]"
              />
            </div>
            <div className="flex justify-start items-center w-1/2">
              <Input
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="px-5 py-6 bg-[#ECEFF3]"
              />
            </div>
          </div>
          <Button
            className="w-full bg-[#ECEFF3] hover:bg-[#23298B] hover:text-white text-[#23298B]"
            onClick={handleNext}
          >
            Get Agents
          </Button>
          <p className="text-lg font-normal text-gray-500 mt-4">
  By clicking &#34;Get Agents&#34; I acknowledge and agree to RealEstateAgents
  Terms of Use and Privacy Policy, which includes binding arbitration
  and consent to receive electronic communications.
</p>

        </div>
      ),
    },
    // Step 8: Phone Verification
    {
      content: (
        <div className="w-[1087px] mt-20 mb-5 px-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#0F113A] text-3xl font-semibold">
              We’re preparing to connect you to at least 3 agents. please verify
              the following information to get connected sooner:
            </h2>
          </div>
          <div className="w-1/2 flex space-x-3 mt-7 mb-32">
            <select className="w-24 border rounded-md p-2 bg-[#ECEFF3]">
              <option>USA</option>
            </select>
            <Input
              placeholder="Cell Number"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => updateFormData("phoneNumber", e.target.value)}
              className="px-5 py-6 bg-[#F8FAFB]"
            />
          </div>
          <div className="flex justify-between mx-20 mt-20 my-10">
            <Button variant="secondary" onClick={handleBack}>
              Skip
            </Button>
            <Button variant="primary" onClick={handleNext}>
            Text Confirmation Code
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
  By clicking &quot;Text Confirmation Code&quot;, I am providing my esign and
  express written consent to allow ReferralExchange and our affiliated
  Participating Agents, or parties calling on their behalf, to contact
  me at the phone number above for marketing purposes, including
  through the use of calls, SMS/MMS prerecorded and/or artificial
  voice messages using an automated dialing system to provide agent
  info, even if your number is listed on a corporate, state or federal
  Do-Not-Call list. Consent is not a condition for our service and you
  can revoke it at any time.
</p>

        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 flex items-center justify-center">
    {isSubmitted ? (
      <div className="max-w-[1087px] rounded-b-xl bg-white p-8 text-center">
        <h2 className="text-2xl font-semibold text-[#0F113A] mb-4">
          Thank you for submitting!
        </h2>
        <p>We&apos;ll connect you with our agents shortly.</p>
      </div>
    ) : steps.length > 0 ? (
      <div className="max-w-[1087px] rounded-b-xl bg-white">
        {steps[currentStep].content}
      </div>
    ) : (
      <p>Error: No steps available.</p>
    )}
  </div>
  );
};

export default SellMultipleForm;
