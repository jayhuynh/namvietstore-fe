import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import SrcComponentsButtonsButton from '@/components/buttons/Button';

export default {
  title: '/SrcComponentsButtonsButton',
  component: SrcComponentsButtonsButton,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof SrcComponentsButtonsButton>;

const Template: ComponentStory<typeof SrcComponentsButtonsButton> = (args) => (
  <SrcComponentsButtonsButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: 'lg',
};
