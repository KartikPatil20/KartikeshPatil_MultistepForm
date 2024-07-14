import React, { useState, useEffect } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('formData')) || {});

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);


  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const handleFormData = (data) => {
    setFormData(prev => ({
      ...prev,
      ...data
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Information Submitted");
    localStorage.removeItem('formData');
    setCurrentStep(1);
  };

  const renderStep = () => {

    if(currentStep === 1){
      return <Step1 data={formData} nextStep={nextStep} handleFormData={handleFormData} />;
    }else if(currentStep === 2){
      return <Step2 data={formData} nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} />;
    }else if(currentStep === 3){
      return <Step3 data={formData} prevStep={prevStep} handleSubmit={handleSubmit} />;
    }else{
      return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;
