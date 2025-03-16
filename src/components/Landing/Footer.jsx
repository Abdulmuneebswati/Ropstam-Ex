import React from 'react';
import Fb from '@assets/icons/Fb.png';
import Twitter from '@assets/icons/Twitter.png';
import Youtube from '@assets/icons/Youtube.png';
import Phone from '@assets/icons/Phone.png';
import { cn } from '@utils/cn';
const renderListItem = (item) => {
  return (
    <li key={item}>
      <a
        href='#'
        className='hover:underline text-[18px]'
      >
        {item}
      </a>
    </li>
  );
};

const LinksHeading = ({ children, className }) => {
  return (
    <h3 className={cn('text-foreground  font-semibold text-[24px]', className)}>
      {children}
    </h3>
  );
};

const Footer = () => {
  return (
    <footer className='bg-white text-[18px] text-primary py-10'>
      <div className='w-[80%] mx-auto flex justify-between gap-x-50 '>
        {/* Logo & Description */}
        <div className='w-[40%]'>
          <h1 className='text-[76px] leading-[76px] font-bold text-[#50A3B1]'>
            LOGO
          </h1>
          <p className='mt-3 text-[18px]  leading-relaxed'>
            Experience The Convenience Of Recovery Delivered, Your Trusted
            Source For Online Medication Delivery. We Bring The Pharmacy To Your
            Doorstep, Ensuring Fast, Discreet, And Reliable Service.
          </p>
        </div>

        <div className='w-[60%] flex justify-between'>
          <div>
            <LinksHeading>Quick Links</LinksHeading>
            <ul className='mt-3 space-y-1'>
              {['Home', 'About Us', 'Owners', 'Tenants', 'Properties'].map(
                (item) => renderListItem(item)
              )}
            </ul>
          </div>

          <div>
            <LinksHeading>Other Links</LinksHeading>
            <ul className='mt-3 space-y-1'>
              {[
                'Online Medications',
                'Download App',
                'Start Treatment',
                'Online Urgent Care',
                'FAQ',
              ].map((item) => renderListItem(item))}
            </ul>
          </div>

          <div className=''>
            <LinksHeading>Contact</LinksHeading>
            <p className='mt-3 flex items-center space-x-2'>
              <img
                src={Phone}
                alt=''
              />
              <span>1-866-757-9868</span>
            </p>

            <LinksHeading className='my-3'>Social Media</LinksHeading>
            <div className='mt-2 flex space-x-4 text-gray-700'>
              <img
                src={Fb}
                alt='Facebook Icon'
                className='h-[17px] w-[21px]'
              />
              <img
                src={Twitter}
                alt='Twitter Icon'
                className='h-[17px] w-[21px]'
              />
              <img
                src={Youtube}
                className='h-[17px] w-[21px]'
                alt='Youtube Icon'
              />
            </div>
            <p className='mt-6 text-xs text-gray-500'>
              Designed And Developed By Ropstam
            </p>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-[80%]'>
          <hr className='my-6 border-[#C6C6C6]' />
          <p className='text-left text-sm text-gray-600'>
            ©2024 – Recovery Delivered | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
