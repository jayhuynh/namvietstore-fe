import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import Button from '@/components/buttons/Button';

export default {
  title: '@nv/components/buttons/Button',
  component: Button,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  size: 'sm',
};
