import { Meta } from '@storybook/react';

import BilingualButton from '@/components/buttons/BilingualButton';

export default {
  title: '@nv/components/buttons/BilingualButton',
  component: BilingualButton,
  args: {
    variant: 'default',
    textColor: '#850000',
    rightIcon: true,
  },
} as Meta<typeof BilingualButton>;

export const Default = {
  args: {
    variant: 'default',
    size: 'base',
    rightIcon: true,
    open: false,
  },
};

export const Open = {
  args: {
    size: 'base',
    open: true,
  },
};

export const Large = {
  args: {
    size: 'large',
    open: true,
  },
};

export const Small = {
  args: {
    size: 'small',
    open: true,
  },
};

export const Light = {
  args: {
    size: 'base',
    open: true,
    variant: 'light',
  },
};

export const Dark = {
  args: {
    size: 'base',
    open: true,
    variant: 'dark',
    textColor: '#F9F5EB',
  },
};
