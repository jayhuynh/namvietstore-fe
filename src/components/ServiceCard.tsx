import React from 'react';

const CardVariants = {
  default:
    'flex flex-grow-0 flex-col items-center justify-center rounded-md border-2 border-[#E3E3E3] bg-white text-center',
  dark: 'flex flex-grow-0 flex-col items-center justify-center rounded-md border-2 border-[#E3E3E3] bg-[#b2bec3] text-center',
};

const CardSizes = {
  base: 'h-52 w-56 px-2 py-8',
  large: 'h-64 w-64',
  small: 'h-48 w-48',
};

export type ContentType = {
  icon: string;
  title: string;
  description: string;
};

type CardVariant = keyof typeof CardVariants;

type CardSize = keyof typeof CardSizes;

type ServiceCardType = {
  content: ContentType;
  variant?: CardVariant;
  size?: CardSize;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
  className?: string;
};

const ServiceCard: React.FC<ServiceCardType> = ({
  content,
  variant = 'default',
  size = 'base',
  iconClassName,
  titleClassName,
  descriptionClassName,
  className,
  children,
}) => {
  return (
    <div className={`${CardVariants[variant]} ${CardSizes[size]} ${className}`}>
      <img
        src={content.icon}
        alt={content.title}
        className={`h-14 w-14 ${iconClassName}`}
      />
      <p
        className={`mt-3 text-xl font-bold leading-6 text-[#850000] ${titleClassName}`}
      >
        {content.title}
      </p>
      <p
        className={`leading-5' mt-3 text-base font-normal ${descriptionClassName}`}
      >
        {content.description}
      </p>
      {children}
    </div>
  );
};

export default ServiceCard;
