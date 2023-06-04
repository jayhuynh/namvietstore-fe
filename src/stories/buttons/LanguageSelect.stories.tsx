import { Meta } from '@storybook/react';

import LanguageSelect from '@/components/buttons/LanguageSelect';

export default {
  title: '@nv/components/buttons/BilingualButton',
  component: LanguageSelect,
  args: {
    variant: 'default',
    rightIcon: true,
    textColor: '#850000',
  },
} as Meta<typeof LanguageSelect>;

export const Default = {
  args: {
    size: 'base',
  },
};

export const Large = {
  args: {
    size: 'large',
  },
};

export const Small = {
  args: {
    size: 'small',
  },
};

export const Light = {
  args: {
    size: 'base',
    variant: 'light',
  },
};

export const Dark = {
  args: {
    size: 'base',
    variant: 'dark',
    textColor: '#FFFFFF',
  },
};
