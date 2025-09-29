import React, { useState } from 'react';
import { ProgressTracker } from '@/@dront/components';

const BasicExample = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      label: 'Input Text',
      status: 'completed' as const
    },
    {
      id: 2,
      label: 'Input Text',
      status: 'active' as const
    },
    {
      id: 3,
      label: 'Input Text',
      status: 'inactive' as const
    },
    {
      id: 4,
      label: 'Input Text',
      status: 'inactive' as const
    },
    {
      id: 5,
      label: 'Input Text',
      status: 'inactive' as const
    },
    {
      id: 6,
      label: 'Input Text',
      status: 'inactive' as const
    }
  ];

  return (
    <ProgressTracker
      steps={steps}
      activeStep={activeStep}
      onStepClick={stepIndex => setActiveStep(stepIndex)}
      clickable
    />
  );
};

export default BasicExample;
