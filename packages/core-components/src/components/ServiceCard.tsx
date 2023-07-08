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
      className={`flex flex-col items-center justify-center rounded-md space-y-3 border-2 border-[#E3E3E3] w-56 h-52 font-primary text-center bg-white ${className}`}
    >
      {content && (
        <>
          {content.icon}
          <p
            className={`mt-3 text-xl font-bold leading-6 text-primary ${titleClassName}`}
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
