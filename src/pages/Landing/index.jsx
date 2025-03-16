import React from 'react';
import Intro from '@components/Landing/Intro';
import Barriers from '@components/Landing/Barriers';
import HeroSection from '@components/Landing/HeroSection';
import Testimonials from '@components/Landing/Testimonials';
import Treatment from '@components/Landing/Treatment';
import FeaturedBy from '@components/Landing/FeaturedBy';
import States from '@components/Landing/States';
import GetApp from '@components/Landing/GetApp';
import Footer from '@components/Landing/Footer';

const index = () => {
  return (
    <div className=''>
      <Intro />
      <Barriers />
      <HeroSection />
      <Testimonials />
      <Treatment />
      <FeaturedBy />
      <States />
      <GetApp />
      <Footer />
    </div>
  );
};

export default index;
