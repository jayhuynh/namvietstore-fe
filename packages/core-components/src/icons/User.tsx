import React, { SVGProps } from 'react';
const UserIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={86}
    height={86}
    fill='none'
    {...props}
  >
    <g
      stroke='#850000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={5}
    >
      <path d='M83 83v-8.889c0-4.715-2.107-9.237-5.858-12.57-3.75-3.334-8.838-5.207-14.142-5.207H23c-5.304 0-10.391 1.872-14.142 5.206C5.108 64.874 3 69.397 3 74.112v8.89M43 38.556c11.046 0 20-7.96 20-17.778C63 10.959 54.046 3 43 3s-20 7.96-20 17.778c0 9.818 8.954 17.778 20 17.778Z' />
    </g>
  </svg>
);
export default UserIcon;
