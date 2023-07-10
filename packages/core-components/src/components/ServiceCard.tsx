import React from 'react';

export type ServiceCardContentType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ServiceCardType = {
  content?: ServiceCardContentType;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
  className?: string;
};

const ServiceCard: React.FC<ServiceCardType> = ({
  content,
  titleClassName,
  descriptionClassName,
  className,
  children,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md space-y-3 border-2 md:text-base sm:text-sm border-gray-200 md:w-56 md:h-52 sm:w-44 sm:h-44 font-primary text-center bg-white ${className}`}
    >
      {content && (
        <>
          <div className='md:w-28 md:h-28 sm:w-10 sm:h-10 flex items-center justify-center'>
            {content.icon}
          </div>
          <p
            className={`mt-3 md:text-xl font-bold md:leading-6 sm:text-lg text-primary ${titleClassName}`}
          >
            {content.title}
          </p>
          <p className={`${descriptionClassName}`}>{content.description}</p>
        </>
      )}
      {children}
    </div>
  );
};

export default ServiceCard;
