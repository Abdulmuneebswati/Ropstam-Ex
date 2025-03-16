import React from 'react';
import { stats } from '@data';

const Barriers = () => {
  
  return (
    <section className=' h-[375px] relative w-full   flex flex-col  items-center justify-center bg-cover bg-center bg-[url(./assets/images/barrier.png)] bg-no-repeat'>
      <div className='absolute inset-0 bg-white/30'></div>
      <div class='w-[80%] grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div class='max-w-lg'>
          <h2 class='text-kprimary mt-4 font-medium text-[46px] leading-[120%]'>
            Breaking Barriers to <br /> Recovery
          </h2>
          <p class='text-[20px] text-primary leading-[150%]'>
            Our mission is to make Medication Assisted Treatment accessible to
            people in both major cities and rural communities. We're deeply
            committed to removing obstacles to recovery, ensuring our clients
            get the support they need.
          </p>
        </div>
        <div>
          <p class='text-[20px] text-primary leading-[150%]'>
            We’re not just offering a service; we’re creating a lifeline. Our
            platform is designed to eliminate the challenges that often stand in
            the way of recovery—whether it’s stigma, inconvenience, or lack of
            access to quality care.
          </p>
          <div class='mt-6 flex  justify-between gap-6 text-gray-900 font-semibold'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='text-center'
              >
                <p className='text-[46px] text-foreground'>{stat.value}</p>
                <p className='text-primary text-[24px] font-medium '>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Barriers;
