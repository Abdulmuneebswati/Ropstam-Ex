import React, { useState } from 'react';
import AntdCarousel from '../ui/Carousel'; // Make sure AntdCarousel uses the Slider
import ArrowNext from '../ui/ArrowNext';
import ArrowPrev from '../ui/ArrowPrev';
import Card from '../ui/Card';
import { reviews } from '@data';

const Testimonials = () => {
  const slider = React.useRef(null);
  const [hover, setHover] = useState(null);

  return (
    <div className='w-full flex justify-center my-20'>
      <div className='w-[80%] '>
        <div className='flex w-full items-center justify-between'>
          <div>
            <h3 className='text-foreground text-[24px]'>Our Client’s</h3>
            <h1 className='text-kprimary text-[52px] font-medium leading-[120%] mt-2'>
              Testimonials
            </h1>
          </div>
          <div className='flex items-center gap-4'>
            <ArrowPrev onClick={() => slider.current.slickNext()} />
            <ArrowNext onClick={() => slider.current.slickNext()} />
          </div>
        </div>
        <AntdCarousel ref={slider}>
          {reviews.map((review, index) => (
            <Card
              key={index}
              rating={review.rating}
              reviewText={review.reviewText}
              name={review.name}
              avatarSrc={review.avatarSrc}
              id={review.id}
              hover={hover}
              setHover={setHover}
            />
          ))}
        </AntdCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
