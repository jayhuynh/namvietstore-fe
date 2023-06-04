import React from 'react';

import BilingualButton from '@/components/buttons/Select';
import { ButtonProps, OptionType } from '@/components/buttons/Select';

import enFlag from '@/icons/enflag.svg';
import vnFlag from '@/icons/vnflag.svg';

const LanguageSelect = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const options: OptionType[] = [
      {
        icon: enFlag,
        label: 'English',
        key: 'en',
      },
      {
        icon: vnFlag,
        label: 'Tiếng Việt',
        key: 'vn',
      },
    ];

    return (
      <BilingualButton
        ref={ref}
        options={options}
        rightIcon={props.rightIcon}
        textColor={props.textColor}
        size={props.size}
        variant={props.variant}
      />
    );
  }
);

export default LanguageSelect;
