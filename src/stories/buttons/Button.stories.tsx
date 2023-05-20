import { Meta } from '@storybook/react';
import { GoPlus } from 'react-icons/go';

import Button from '@/components/buttons/Button';

export default {
  title: '@nv/components/buttons/Button',
  component: Button,
  args: {
    children: 'Đọc thêm',
    rightIcon: GoPlus,
  },
} as Meta<typeof Button>;

export const Default = {};
