import React from 'react';
import ArrowPrevIcon from '@assets/icons/ArrowPrev.png';
const ArrowPrev = ({onClick}) => {
  return (
    <button onClick={onClick}>
      <img
        src={ArrowPrevIcon}
        alt=''
      />
    </button>
  );
};

export default ArrowPrev;
