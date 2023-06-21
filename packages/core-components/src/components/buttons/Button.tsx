import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

const ButtonVariant = {
  default:
    'bg-[#850000] text-white hover:bg-[#b33939] hover:text-whiteactive:hover:bg-[#c23616] disabled:hover:bg-[#c23616]',
  light:
    'bg-[#850000] text-black hover:bg-[#b33939] hover:text-black active:hover:bg-[#c23616] disabled:hover:bg-[#c23616]',
  dark: 'bg-gray-900 text-white border border-gray-600 hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
};

const ButtonSize = {
  base: 'px-3 py-2 text-md h-[40px] w-[105px]',
  small: 'px-3 py-2 text-xs h-[35px] w-[85px]',
  large: 'px-3 py-3 text-lg h-[60px] w-[135px]',
};

type ButtonVariantType = keyof typeof ButtonVariant;
type ButtonSizeType = keyof typeof ButtonSize;

export type ButtonProps = {
  isLoading?: boolean;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  link?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  content?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      link,
      variant = 'default',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      content,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    const handleOnClick = () => {
      if (link) {
        window.open(link, '_blank');
      }
    };

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center rounded-xs text-justify font-normal leading-[19px] disabled:cursor-not-allowed',
          ButtonVariant[variant],
          ButtonSize[size],
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        onClick={handleOnClick}
        {...rest}
      >
        {isLoading && (
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
              variant == 'light' ? 'text-black' : 'text-white'
            }`}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {LeftIcon && (
          <div
            className={clsxm([
              [size === 'base' && 'mr-2'],
              [size === 'small' && 'mr-1'],
              [size === 'large' && 'mr-4'],
            ])}
          >
            <LeftIcon
              className={clsxm(
                [size === 'base' && 'md:text-md text-md'],
                leftIconClassName
              )}
            />
          </div>
        )}
        {children}
        <p>{content}</p>
        {RightIcon && (
          <div
            className={clsxm([
              [size === 'base' && 'ml-2'],
              [size === 'small' && 'ml-1'],
              [size === 'large' && 'ml-4'],
            ])}
          >
            <RightIcon
              className={clsxm(
                [size === 'base' && 'text-md md:text-md'],
                rightIconClassName
              )}
            />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
