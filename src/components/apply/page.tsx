"use client";

import { useState } from "react";
import { useFormState } from "@/hooks/useFormState";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import GeneralInfo from "@/components/apply/steps/GeneralInfo";
import PersonalDetail from "@/components/apply/steps/PersonalDetail";
import Residence from "@/components/apply/steps/Residence";
import IncomeVerification from "@/components/apply/steps/IncomeVerification";
import Applicants from "@/components/apply/steps/Applicants";
import PayAndSubmit from "@/components/apply/steps/PayAndSubmit";

const steps = [
  { name: "Overview", completed: true },
  { name: "General Info", completed: false },
  { name: "Personal Details", completed: false },
  { name: "Residence", completed: false },
  { name: "Income Verification", completed: false },
  { name: "Applicants", completed: false },
  { name: "Pay & Submit", completed: false },
];

export default function ApplyNow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [, setApplicationType] = useState("personal");
  const [formData, handleChange] = useFormState({
    moveInDate: "",
    leaseTerm: "",
    pets: "",
    occupants: 1,
    vehicleInfo: "",

    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    ssn: "",
    driversLicense: "",
    employmentStatus: "",
    employer: "",
    occupation: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",
    coApplicantName: "",
    annualIncome: 0,
    currentAddress: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    residenceType: "",
    lengthOfStay: "",
    cardNumber: "",
    cvv: "",
    expirationDate: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      const updatedSteps = [...steps];
      updatedSteps[currentStep].completed = true;
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderOverview = () => {
    return (
      
      <div className="space-y-8 ">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Before you apply, check our qualification requirements:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Unless otherwise required by applicable law, applicants must have
              a minimum combined income of 3 times the monthly rent.
            </li>
            <li>
              A criminal background check is required for all individuals 18+
              living in the home.
            </li>
            <li>
              A credit report will be obtained to verify credit rating for all
              applicants.
            </li>
            <li>
              An application fee of up to $55 is required per applicant in order
              to process the application.
            </li>
            <li>
              Any applicant with an open bankruptcy, previous eviction or unpaid
              rent, and/or any felony conviction within the last six years will
              be declined automatically.
            </li>
          </ul>
          <Button variant="link" className="text-green-700 p-0 h-auto mt-2">
            See all qualifications requirements
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Documents youll need</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              A social security number or card is required for at least one
              applicant in the household.
            </li>
            <li>
              Valid government-issued photo identification for all applicants.
            </li>
            <li>Most recent paystub for each applicant.</li>
          </ul>
          <Button variant="link" className="text-green-700 p-0 h-auto mt-2">
            See document details
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            What type of application are you submitting?
          </h2>
          <RadioGroup
            defaultValue="personal"
            onValueChange={setApplicationType}
            className="flex gap-8"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="personal" id="personal" />
              <Label htmlFor="personal">Personal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="corporate" id="corporate" />
              <Label htmlFor="corporate">Corporate</Label>
            </div>
          </RadioGroup>
          <p className="text-sm text-muted-foreground mt-4">
            * Once you hit the Continue button you wont be able to change the
            selected option.
          </p>
        </div>
      </div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return renderOverview();
      case 1:
        return <GeneralInfo formData={formData} handleChange={handleChange} />;
      case 2:
        return (
          <PersonalDetail formData={formData} handleChange={handleChange} />
        );
      case 3:
        return <Residence formData={formData} handleChange={handleChange} />;
      case 4:
        return (
          <IncomeVerification formData={formData} handleChange={handleChange} />
        );
      case 5:
        return <Applicants formData={formData} handleChange={handleChange} />;
      case 6:
        return <PayAndSubmit formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-white min-h-screen border-r">
          <nav className="p-4">
            {steps.map((step, index) => (
              <button
                key={step.name}
                className={`w-full text-left px-4 py-2 rounded ${
                  currentStep === index
                    ? "bg-green-50 text-green-700"
                    : step.completed
                    ? "text-green-700"
                    : "text-gray-500"
                }`}
                onClick={() => index <= currentStep && setCurrentStep(index)}
              >
                {step.name}
                {step.completed && currentStep !== index && (
                  <span className="float-right">✓</span>
                )}
              </button>
            ))}
            <button className="w-full text-left px-4 py-2 text-gray-500 mt-4 border-t">
              Leave application
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold">
                {steps[currentStep].name}
              </h1>
              <p className="text-sm text-gray-500">
                STEP {currentStep + 1} OF {steps.length}
              </p>
            </div>

            {renderStep()}

            <div className="mt-8 flex justify-end">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="mr-4"
                >
                  Previous
                </Button>
              )}
              <Button
                onClick={handleNext}
                className="bg-green-700 hover:bg-green-800 text-white px-8"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
