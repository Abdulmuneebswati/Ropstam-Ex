import React from 'react';
import Button from '@components/ui/Button';
import Arrow from '@assets/icons/arrow.png';
import StepsCenter from '@assets/images/Steps.png';
import { steps } from '@data';

const Treatment = () => {
  const StepBox = ({ title, description, position }) => {
    const getPositionStyle = () => {
      switch (position) {
        case 'top-left':
          return 'top-0 left-0';
        case 'top-right':
          return 'top-0 right-0';
        case 'bottom-left':
          return 'bottom-20 left-0';
        case 'bottom-right':
          return 'bottom-20 right-0';
        case 'bottom-center':
          return '-bottom-20 left-1/2 transform -translate-x-1/2';
        default:
          return '';
      }
    };

    return (
      <div
        className={`absolute bg-white z-20 shadow-md p-4 flex flex-col justify-center rounded-lg h-[120px] border border-foreground w-[477px] ${getPositionStyle()}`}
      >
        <h3 className='font-semibold text-[18px]'>{title}</h3>
        <p className='text-gray-600 text-sm'>{description}</p>
      </div>
    );
  };

  const StepProcess = ({ steps, centerImage }) => {
    return (
      <div className='relative w-full h-[500px] flex justify-center items-center'>
        {steps.map((step, index) => (
          <StepBox
            key={index}
            {...step}
          />
        ))}

        {/* Centered Image */}
        <div className='absolute w-[634px] h-[518px] top-0  flex justify-center items-center'>
          <img
            src={centerImage}
            alt='Process Image'
            className='w-full h-full mix-blend-darken object-cover rounded-full'
          />
        </div>
      </div>
    );
  };
  return (
    <div className='w-full flex justify-center h-[890px] mt-20 bg-cover bg-center bg-[url(./assets/images/TreatmentBg.png)]'>
      <div className='w-[80%] mt-20'>
        <h3 className='text-foreground text-[24px]'>Our Client’s</h3>
        <div className='flex w-full mb-10 items-center justify-between'>
          <h1 className='text-kprimary text-[52px] font-medium leading-[120%] mt-2'>
            Suboxone Treatment In 10 Minutes
          </h1>
          <Button variant='light'>
            Download the app today
            <img
              src={Arrow}
              alt='Arrow Icon'
            />
          </Button>
        </div>
        <StepProcess
          steps={steps}
          centerImage={StepsCenter}
        />
      </div>
    </div>
  );
};

export default Treatment;
