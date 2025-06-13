'use client';

import { useState } from 'react';
import ProjectInformation from '@components/entity/project/form/stepper/ProjectInformation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useBeforeUnload } from '@hooks/useBeforeUnload';

const ProjectCreate = () => {
  // Hooks
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm();
  useBeforeUnload(isDirty);

  // States
  const [activeStep, setActiveStep] = useState(1);

  // Functions and Declarations
  const getStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <ProjectInformation register={register} control={control} />;

      default:
        return null;
    }
  };

  const renderContent = () => {
    return getStepContent(activeStep);
  };
  return (
    <form className='mt-6' id='project'>
      {renderContent()}
    </form>
  );
};

export default ProjectCreate;
