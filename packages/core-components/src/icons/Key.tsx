import React, { SVGProps } from 'react';
const KeyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={80}
    height={80}
    fill='none'
    {...props}
  >
    <path
      fill='#850000'
      d='M35.474 52.777 31.12 48.37s-12.388 4.74-24.886-7.495C-4.367 30.404.32 13.984 7.238 7.261c7.367-7.275 23.1-11.684 34.596-.331 11.495 11.352 6.584 24.796 6.584 24.796L80 62.807l-.893 16.202L63.038 80l-.893-7.935-8.37-.991-.782-8.267-8.26-1.104-1.228-7.935-8.031-.99ZM11.59 11.67c-4.91 4.849-6.249 11.352-3.014 14.438 3.236 3.195 9.71 1.873 14.62-2.977 4.91-4.849 6.36-11.352 3.125-14.438-3.125-3.195-9.82-1.873-14.73 2.977Zm64.613 57.309.225-4.63-30.017-29.646-2.457 2.426 32.25 31.85Z'
    />
  </svg>
);
export default KeyIcon;
