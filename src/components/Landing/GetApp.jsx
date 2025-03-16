'use client';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Button from '@components/ui/Button';
import Arrow from '@assets/icons/arrow.png';

const GetApp = () => {
  return (
    <div className='w-full h-[502px] mt-20 pt-20 bg-cover bg-center bg-[url(./assets/images/GetApp.png)] flex flex-col items-center'>
      {/* Heading Animations */}
      <motion.h3
        className='text-[30px] text-center font-medium text-black'
        initial={{ opacity: 0, x: 950 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        SECURE ACCESS TO YOUR MEDICATIONS
      </motion.h3>

      <motion.h2
        className='text-[54px] text-center font-medium text-black'
        initial={{ opacity: 0, x: -950 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        Get Your Meds Online Today
      </motion.h2>

      {/* Content Section */}
      <div className='flex justify-center w-full'>
        <div className='w-[80%] flex flex-col items-center justify-center gap-y-10'>
          <p className='text-black text-center leading-[150%] text-[20px] max-w-[700px]'>
            We have partnered with RX-Outreach to provide mail order medications
            at a fraction of the price you may find in your local pharmacy. Meet
            your chronic illness provider online today and get your medication
            delivered as quickly as 24 hours later.
          </p>

          {/* Button */}
          <Button className='w-[160px] whitespace-nowrap'>
            Get The App{' '}
            <img
              src={Arrow}
              alt='Arrow'
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
