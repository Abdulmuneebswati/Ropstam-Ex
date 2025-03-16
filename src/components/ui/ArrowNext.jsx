import React from 'react';
import ArrowNextIcon from '@assets/icons/ArrowNext.png';
const ArrowNext = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img
        src={ArrowNextIcon}
        alt=''
      />
    </button>
  );
};

export default ArrowNext;
