import React from 'react';
import Navbar from '../Navbar';
import Button from '../ui/Button';
import Arrow from '@assets/icons/arrow.png';

const Intro = () => {
  return (
    <section className='h-screen w-full flex flex-col items-center bg-cover bg-center bg-[url(./assets/images/background.png)] bg-no-repeat'>
      {/* Navbar Section */}
      <main className='!w-[80%] mt-10'>
        <header className='w-full'>
          <Navbar />
        </header>

        {/* Main Content Section */}
        <main className='flex flex-col h-[80vh] justify-center  '>
          <p className='text-[#F1F5F9] text-[24px] font-normal leading-[150%]'>
            No lines. Less hassle, Lower costs.
          </p>
          <h1 className='text-[72px] leading-[120%] font-medium mt-3 text-white'>
            Easy Online Suboxone <br /> Treatment for Opioid <br /> Addiction
          </h1>
          <Button
            className='w-[260px] whitespace-nowrap mt-10'
            variant='light'
          >
            Download the app today{' '}
            <img
              src={Arrow}
              alt='Arrow Icon'
            />
          </Button>
        </main>
      </main>
    </section>
  );
};

export default Intro;
