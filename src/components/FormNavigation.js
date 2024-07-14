import React from 'react';

const FormNavigation = ({ currentStep, totalSteps, handleStepClick }) => {
  const steps = [];

  for (let i = 1; i <= totalSteps; i++) {
    steps.push(
      <li key={i} className={`step ${i === currentStep ? 'active' : ''}`} onClick={() => handleStepClick(i)}>
        Step {i}
      </li>
    );
  }

  return (
    <ul className="form-navigation">
      {steps}
    </ul>
  );
};

export default FormNavigation;
