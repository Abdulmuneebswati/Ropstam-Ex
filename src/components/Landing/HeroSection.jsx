import React from 'react';
import VideoDummyImage from '@assets/images/background.png';

const HeroSection = () => {
  return (
    <section className='w-full flex items-center mt-20 justify-center py-12'>
      <div className='w-[80%] flex gap-8'>
        {/* Left Side: Text Content */}
        <div className='flex-[50%]'>
          <p className='text-foreground text-[24px] font-medium'>
            WELCOME TO RECOVERY DELIVERED
          </p>
          <h1 className='text-[52px] font-bold text-kprimary leading-[120%] mt-2'>
            Your Fully Online Suboxone <br className='hidden md:block' />
            Treatment Platform
          </h1>
          <p className='text-primary text-[20px] mt-4'>
            100% online opioid treatment with licensed buprenorphine providers
            starts at just
            <span className='font-semibold'>$99/month.</span>
          </p>
          <p className='text-primary text-[20px] mt-3'>
            With monthly and weekly meetings based on where you are in your
            recovery. Get a same-day appointment and script.
          </p>
        </div>

        {/* Right Side: Video Thumbnail */}
        <div className='relative w-full flex-[45%]'>
          <img
            src={VideoDummyImage}
            alt='Recovery Treatment Video'
            className='w-full rounded-[16px] h-[395px] shadow-lg'
          />
          {/* Play Button */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <button className='w-16 h-16 bg-green-300 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-green-400 transition'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='white'
                className='w-10 h-10'
              >
                <path d='M8 5v14l11-7z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
