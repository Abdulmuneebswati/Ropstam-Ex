import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Rate, Avatar } from 'antd';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { cn } from '@utils/cn';
const Card = ({ id, rating, reviewText, name, avatarSrc, setHover, hover }) => {
  const [rotate, setRotate] = useState(0);
  return (
    <motion.div
      onMouseEnter={() => {
        setHover({
          id: id,
          hover: true,
        });
        setRotate(-14);
      }}
      animate={{ rotate }}
      transition={{ type: 'spring' }}
      onMouseLeave={() => {
        setHover(null);
        setRotate(0);
      }}
      className={cn(
        'bg-white ml-2 w-[95%] relative z-50  shadow-[rgba(0,_0,_0,_0.06)] p-5 border border-[#E2E8F0] rounded-[12px] h-[380px]',
        {
          'opacity-30': hover !== null && hover.id !== id,
        }
      )}
    >
      <Rate
        allowHalf
        defaultValue={rating}
        style={{
          fontSize: 24,
        }}
      />
      <p className='text-primary text-[18px] leading-[150%] mt-4 overflow-auto'>
        {reviewText}
      </p>
      <div className='mt-5 flex items-center gap-2'>
        <Avatar
          className='h-[60px] w-[60px]'
          icon={
            avatarSrc ? (
              <img
                src={avatarSrc}
                alt='avatar'
              />
            ) : (
              <UserOutlined />
            )
          }
        />
        <p className='text-kprimary text-[18px] leading-[150%] font-medium'>
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
