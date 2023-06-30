import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export type ContentType = {
  title: string;
  statistic: string;
};

export type StatisticSectionType = {
  content: ContentType[];
};

const StatisticSection: React.FC<StatisticSectionType> = ({ content }) => {
  return (
    <div className='flex flex-col md:flex-row w-full items-center justify-between'>
      {content.map((item) => (
        <div
          key={item.title}
          className='flex flex-col my-5 mx-5 items-center text-white justify-center text-center relative'
        >
          <p className='text-6xl font-bold flex'>
            {item.statistic}
            <sup className='text-2xl'>
              <AiOutlinePlus />
            </sup>
          </p>
          <p className='mt-4 text-lg font-medium uppercase'>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatisticSection;
