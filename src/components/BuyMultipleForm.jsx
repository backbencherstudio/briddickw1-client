import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { X } from 'lucide-react';

// Form steps data structure
const INITIAL_FORM_DATA = {
  addressToSell: '',
  cityToBuy: '',
  priceRange: [500],
  hasAgent: false,
  lookingToSell: false,
  additionalDetails: '',
  firstName: '',
  email: '',
  phoneNumber: '',
};

const BuyMultipleForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [currentStep, setCurrentStep] = useState(0);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const steps = [
    // Step 2: Location
    {
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Where are you looking to buy?</h2>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Input
            placeholder="Enter your city name"
            value={formData.cityToBuy}
            onChange={(e) => updateFormData('cityToBuy', e.target.value)}
          />
          <div className="flex justify-between mt-8">
            <Button variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )
    },
    // Step 3: Price Range
    {
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">What price range are you looking to buy?</h2>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="py-8">
            <div className="text-center mb-4">${formData.priceRange[0]}k - ${formData.priceRange[0] + 50}K</div>
            <Slider
              defaultValue={[500]}
              max={5000}
              min={100}
              step={50}
              value={formData.priceRange}
              onValueChange={(value) => updateFormData('priceRange', value)}
            />
            <div className="flex justify-between mt-2">
              <span>$100k</span>
              <span>$5M+</span>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <Button variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )
    },
    // Step 4: Agent Question
    {
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Have you already hired a real estate Agent?</h2>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button
              variant={formData.hasAgent ? "default" : "outline"}
              onClick={() => updateFormData('hasAgent', true)}
            >
              Yes
            </Button>
            <Button
              variant={!formData.hasAgent ? "default" : "outline"}
              onClick={() => updateFormData('hasAgent', false)}
            >
              No
            </Button>
          </div>
          <div className="flex justify-between mt-8">
            <Button variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )
    },
    // Step 5: Selling Question
    {
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Are you also looking to sell a home?</h2>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button
              variant={formData.lookingToSell ? "default" : "outline"}
              onClick={() => updateFormData('lookingToSell', true)}
            >
              Yes
            </Button>
            <Button
              variant={!formData.lookingToSell ? "default" : "outline"}
              onClick={() => updateFormData('lookingToSell', false)}
            >
              No
            </Button>
          </div>
          <div className="flex justify-between mt-8">
            <Button variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )
    },
    // Step 6: Additional Details
    {
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Are there any other details you did like to share?</h2>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <textarea
            className="w-full h-32 p-2 border rounded-md"
            placeholder="Enter any details about your real estate needs..."
            value={formData.additionalDetails}
            onChange={(e) => updateFormData('additionalDetails', e.target.value)}
          />
          <div className="flex justify-between mt-8">
            <Button variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )
    },
    // Step 7: Contact Details
    {
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Last step! Now just add a few contact details</h2>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600">This is where RealEstateAgents.com and our agents will contact you to discuss your needs</p>
          <div className="space-y-4">
            <Input
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => updateFormData('firstName', e.target.value)}
            />
            <Input
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
            />
          </div>
          <Button className="w-full" onClick={handleNext}>
            Get Agents
          </Button>
          <p className="text-xs text-gray-500 mt-4">
            By clicking "Get Agents" I acknowledge and agree to RealEstateAgents Terms of Use and Privacy Policy, which includes binding arbitration and consent to receive electronic communications.
          </p>
        </div>
      )
    },
    // Step 8: Phone Verification
    {
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">We're preparing to connect you to at least 3 agents, please verify the following information to get connected sooner:</h2>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex space-x-2">
            <select className="w-24 border rounded-md p-2">
              <option>USA</option>
            </select>
            <Input
              placeholder="Cell Number"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => updateFormData('phoneNumber', e.target.value)}
            />
          </div>
          <Button className="w-full" onClick={handleSubmit}>
            Text Confirmation Code
          </Button>
          <p className="text-xs text-gray-500 mt-4">
            By clicking "Text Confirmation Code" I am providing my sign and express written consent to allow ReferralExchange and/or affiliated Participating Agents, or parties calling on their behalf, to contact me at the phone number above for marketing purposes...
          </p>
        </div>
      )
    }
  ];

  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-lg p-6">
        {steps[currentStep].content}
      </Card>
    </div>
  );
};

export default BuyMultipleForm;