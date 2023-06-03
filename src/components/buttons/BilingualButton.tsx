import Image from 'next/image';
import * as React from 'react';
import { GoTriangleDown, GoTriangleLeft } from 'react-icons/go';

import clsxm from '@/lib/clsxm';

import enFlag from '@/public/svg/enflag.svg';
import vnFlag from '@/public/svg/vnflag.svg';

const ButtonVariant = ['default', 'light', 'dark'] as const;
const ButtonSize = ['base', 'large', 'small'] as const;

type ButtonProps = {
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  rightIcon?: boolean;
  textColor?: string;
  open: boolean;
} & React.ComponentPropsWithRef<'button'>;

type LanguageType = {
  name: Language;
  flag: string;
};

type VariantType = {
  default: string[];
  light: string[];
  dark: string[];
};

type Language = 'English' | 'Tiếng Việt';

const VariantArr: VariantType = {
  default: [
    'bg-white',
    'hover:bg-[#ecf0f1]',
    'active:bg-[#bdc3c7]',
    'disabled:bg-white',
  ],

  light: [
    'bg-white',
    'hover:bg-[#ecf0f1]',
    'active:bg-[#bdc3c7]',
    'disabled:bg-white',
  ],
  dark: [
    'bg-[#576574]',
    'hover:bg-[#bdc3c7]',
    'active:bg-[#7f8c8d]',
    'disabled:bg-white',
  ],
};

const LanguageArr: LanguageType[] = [
  {
    name: 'English',
    flag: enFlag,
  },
  {
    name: 'Tiếng Việt',
    flag: vnFlag,
  },
];

const BilingualButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, rightIcon, open, textColor }, ref) => {
    const [isOpen, setisOpen] = React.useState<boolean>(open);

    const [selectedLanguage, setSelectedLanguage] =
      React.useState<Language>('English');

    const handleChangeLanguage = (language: Language) => {
      setSelectedLanguage(language);
      setisOpen(false);
    };

    return (
      <>
        <button
          ref={ref}
          type='button'
          onClick={() => setisOpen(!isOpen)}
          className={clsxm(
            'inline-flex items-center justify-between rounded-[50px] font-normal leading-5',
            `text-[${textColor}]`,
            //#region  //*=========== Size ===========
            [size === 'base' && ['text-[18px]', 'h-[40px] w-[222px]']],
            [size === 'large' && ['text-[25px]', 'h-[50px] w-[280px]']],
            [size === 'small' && ['text-[14px]', 'h-[40px] w-[180px]']],

            //#endregion  //*======== Size ===========

            //#region  //*=========== Variants ===========
            [variant === 'default' && [VariantArr.default]],
            [variant === 'light' && [VariantArr.light]],
            [variant === 'dark' && [VariantArr.dark]],
            //#endregion  //*======== Variants ===========
            className
          )}
        >
          <Image
            src={selectedLanguage === 'English' ? enFlag : vnFlag}
            alt='Country Flag'
            width={36}
            height={17}
            className='ml-4'
          />
          <p
            className={clsxm(
              [size === 'base' && ['w-[93px]']],
              [size === 'large' && ['w-[130px]']],
              [size === 'small' && ['w-[100px]']]
            )}
          >
            {selectedLanguage === 'English' ? 'English' : 'Tiếng Việt'}
          </p>
          <div className={clsxm('h-full w-[1px]', `bg-[${textColor}]`)}></div>
          {rightIcon && (
            <div className='mr-6'>
              {isOpen ? <GoTriangleDown /> : <GoTriangleLeft />}
            </div>
          )}
          {children}
        </button>
        {isOpen && (
          <div
            className={clsxm(
              'mt-2 flex flex-col items-center justify-center rounded-md  font-normal leading-5',

              //#region  //*=========== Size ===========
              [size === 'base' && ['text-[18px]', 'w-[200px]', 'ml-2']],

              [size === 'large' && ['text-[25px]', 'w-[250px]', 'ml-4']],

              [size === 'small' && ['text-[12px]', 'w-[150px]', 'ml-4']],
              //#endregion  //*======== Size ===========

              //#region  //*=========== Variants ===========
              [variant === 'default' && [VariantArr.default[0]]],
              [variant === 'light' && [VariantArr.light[0]]],
              [variant === 'dark' && [VariantArr.dark[0]]]
              //#endregion  //*======== Variants ===========
            )}
          >
            {LanguageArr.map((language) => (
              <button
                key={language.name}
                onClick={() => handleChangeLanguage(language.name)}
                className={clsxm(
                  'flex w-[90%] font-normal leading-5',
                  `text-[${textColor}]`,

                  //#region  //*=========== Size ===========
                  [size === 'base' && ['p-2']],
                  [size === 'large' && ['p-3']],
                  [size === 'small' && ['p-2']],
                  //#endregion  //*======== Size ===========

                  //#region  //*=========== Variants ===========
                  [variant === 'default' && [VariantArr.default]],
                  [variant === 'light' && [VariantArr.light]],
                  [variant === 'dark' && [VariantArr.dark]]
                  //#endregion  //*======== Variants ===========
                )}
              >
                <Image
                  src={language.flag}
                  alt='Country Flag'
                  width={36}
                  height={17}
                />
                <p className='ml-2'>{language.name}</p>
              </button>
            ))}
          </div>
        )}
      </>
    );
  }
);

export default BilingualButton;
