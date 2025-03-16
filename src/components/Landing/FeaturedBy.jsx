import React from 'react';
import CBS from '@assets/images/CBS News.png';
import ABC from '@assets/images/ABC.png';
import NBC from '@assets/images/NBC.png';
import FOX from '@assets/images/FOX.png';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
const FeaturedBy = () => {
  const logos = [CBS, ABC, NBC, FOX];

  return (
    <div className='w-full flex justify-center h-full my-20'>
      <div className='w-[80%] '>
        <h3 className='text-foreground text-[24px]'>Our Client’s</h3>
        <div className='flex w-full mb-10 items-center justify-between'>
          <h1 className='text-kprimary text-[52px] font-medium leading-[120%] mt-2'>
            Featured On
          </h1>
          <div className='overflow-hidden w-[50%]  bg-white py-4'>
            <motion.div
              className='flex justify-around gap-x-[60px] w-full'
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            >
              {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map(
                (logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt='logo'
                    className='h-[60px] w-auto object-contain'
                  />
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBy;
