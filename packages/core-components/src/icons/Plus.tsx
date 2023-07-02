import React, { SVGProps } from 'react';
const PlusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={80}
    height={80}
    fill='none'
    {...props}
  >
    <path
      fill='#000'
      fillRule='evenodd'
      d='M80 36v8H44v36h-8V44H0v-8h36V0h8v36h36Z'
      clipRule='evenodd'
    />
  </svg>
);
export default PlusIcon;
