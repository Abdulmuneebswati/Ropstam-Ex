import React from 'react';
import Slider from 'react-slick';
import Card from './Card';

function CustomCarousel({ ref, children }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='slider-container mt-10 relative'>
      <Slider
        ref={ref}
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
}

export default CustomCarousel;
