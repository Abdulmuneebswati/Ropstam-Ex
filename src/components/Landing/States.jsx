import React from 'react';
import Map from '@components/ui/Map';
import Toronto from '@assets/images/Toronto.png';
import Location from '@assets/icons/Vector.png';

const States = () => {
  const states = ['MA', 'RI', 'CT', 'NJ', 'DE', 'MD', 'DC'];
  return (
    <div className='w-full flex justify-center h-full my-20'>
      <div className='w-[80%] '>
        <div className='w-full flex flex-col items-center justify-center'>
          <h3 className='text-foreground text-[24px]'>States WE</h3>
          <h1 className='text-kprimary text-[52px] font-medium leading-[120%] mt-2'>
            Currently Serve
          </h1>
          <p className='text-center w-[70%] mt-5'>
            We believe everyone should have access to treatment and care. That’s
            why we’re teaming up with providers all over the country. Click on a
            green state to see the insurance companies we currently accept and
            to learn more about online Suboxone doctors in your area.
          </p>
        </div>
        <div className='flex gap-x-20 relative w-full mt-20 items-start'>
          <div className='w-[50%]'>
            <img
              src={Toronto}
              className='h-[521px] w-[498px]'
              alt='Toronto'
            />
            <h3 className='text-[30px] mt-2 text-[rgba(0, 0, 0, 1)] font-bold'>
              Toronto
            </h3>
            <div className='flex gap-x-2 items-center'>
              <img
                src={Location}
                className='h-[16px] w-[16px]'
                alt=''
              />
              <p className='text-foreground text-[18px]'>
                Ottawa St. and Homer Waston Blvd.
              </p>
            </div>
          </div>
          <div className='relative'>
            <Map />
            <div className='flex flex gap-2 absolute top-1/3 -right-25 flex-wrap justify-between w-[150px] '>
              {states.map((state) => (
                <div
                  key={state}
                  className='w-[40%]  h-10 flex items-center justify-center bg-foreground text-primary font-bold text-[12px] rounded-lg border-2 border-gray-500 shadow-md'
                >
                  <span className='relative'>{state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
