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
      className={`flex flex-col items-center justify-center rounded-md space-y-3 border-2 md:text-base sm:text-xs border-gray-200 md:w-56 md:h-52 sm:w-40 sm:h-40 font-primary text-center px-2 py-2 bg-white ${className}`}
    >
      {content && (
        <>
          <div className='md:w-14 md:h-14 sm:w-10 sm:h-10'>{content.icon}</div>
          <p
            className={`mt-3 md:text-xl font-bold md:leading-6 sm:text-sm text-primary ${titleClassName}`}
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
