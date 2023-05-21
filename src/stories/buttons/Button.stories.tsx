import { Meta } from '@storybook/react';
import { GoPlus } from 'react-icons/go';

import Button from '@/components/buttons/Button';

export default {
  title: '@nv/components/buttons/Button',
  component: Button,
  args: {
    variant: 'default',
    size: 'base',
  },
} as Meta<typeof Button>;

export const Default = {
  args: {
    children: 'Đọc thêm',
    rightIcon: GoPlus,
  },
};

export const Small = {
  args: {
    variant: 'default',
    children: 'Đọc thêm',
    rightIcon: GoPlus,
    size: 'small',
  },
};

export const Large = {
  args: {
    children: 'Đọc thêm',
    rightIcon: GoPlus,
    size: 'large',
  },
};

export const LeftIcon = {
  args: {
    children: 'Đọc thêm',
    leftIcon: GoPlus,
    size: 'base',
  },
};

export const Loading = {
  args: {
    children: 'Đọc thêm',
    rightIcon: GoPlus,
    size: 'base',
    isLoading: true,
  },
};

export const Disabled = {
  args: {
    children: 'Đọc thêm',
    rightIcon: GoPlus,
    size: 'base',
    disabled: true,
  },
};
