import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

const ButtonVariant = ['default', 'light', 'dark'] as const;
const ButtonSize = ['base'] as const;

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center rounded-sm text-justify font-normal leading-[19px]',
          'h-[40px] w-[105px]',
          //#region  //*=========== Size ===========
          [size === 'base' && ['px-[7px] py-[4px]', 'text-[16px]']],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'default' && [
              'bg-[#850000] text-white',
              'hover:bg-[#b33939] hover:text-white',
              'active:hover:bg-[#c23616]',
              'disabled:hover:bg-[#c23616]',
            ],
            variant === 'light' && [
              'bg-[#850000] text-black',
              'hover:bg-[#b33939] hover:text-black',
              'active:hover:bg-[#c23616]',
              'disabled:hover:bg-[#c23616]',
            ],
            variant === 'dark' && [
              'bg-gray-900 text-white',
              'border border-gray-600',
              'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['default', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {LeftIcon && (
          <div className={clsxm([size === 'base' && 'mr-1'])}>
            <LeftIcon
              className={clsxm(
                [size === 'base' && 'md:text-md text-md'],
                leftIconClassName
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div className={clsxm([size === 'base' && 'ml-1'])}>
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
