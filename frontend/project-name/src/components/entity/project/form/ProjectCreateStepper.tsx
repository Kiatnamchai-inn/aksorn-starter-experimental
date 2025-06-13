'use client';

import { useState, Fragment } from 'react';
import StepperItem from './StepperItem';
import { stepperLabels } from '@/constants/project/create/stepper-label.const';

const ProjectCreateStepper = () => {
  // States
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className='flex h-21 w-full flex-row items-center'>
      {stepperLabels.map((label, index) => (
        <Fragment key={`project-create-stepper-fragment-${index + 1}`}>
          <StepperItem
            key={`project-create-stepper-${index + 1}`}
            index={index}
            label={label}
            state={index + 1 === currentStep ? 'active' : 'default'}
          />
          {index < stepperLabels.length - 1 && <div className='bg-tertiary-light-pink h-[6px] flex-1'></div>}
        </Fragment>
      ))}
    </div>
  );
};

export default ProjectCreateStepper;
