import React, { SVGProps } from 'react';
const ProductIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={80}
    height={80}
    fill='none'
    {...props}
  >
    <path fill='#fff' fillOpacity={0.01} d='M80 0H0v80h80V0Z' />
    <path
      stroke='#850000'
      strokeLinejoin='round'
      strokeWidth={3.75}
      d='M73.333 23.333 40 6.667 6.666 23.332v33.334L40 73.332l33.333-16.666V23.332Z'
      clipRule='evenodd'
    />
    <path
      stroke='#850000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={3.75}
      d='M6.667 23.334 40 40M40 73.333V40M73.333 23.334 40 40M56.667 15 23.333 31.667'
    />
  </svg>
);
export default ProductIcon;
