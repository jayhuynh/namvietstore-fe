import type { Story, StoryDefault } from '@ladle/react';

import LanguageSelect from '@/components/buttons/LanguageSelect';

export default {
  title: '@nv/components/buttons/LanguageSelect',
} satisfies StoryDefault<typeof LanguageSelect>;

export const Default: Story = () => (
  <LanguageSelect size='base' rightIcon={true} variant='default' />
);

export const Large: Story = () => (
  <LanguageSelect size='large' rightIcon={true} variant='default' />
);

export const Small: Story = () => (
  <LanguageSelect size='small' rightIcon={true} variant='default' />
);

export const Light: Story = () => (
  <LanguageSelect size='base' rightIcon={true} variant='light' />
);

export const Dark: Story = () => (
  <LanguageSelect size='base' rightIcon={true} variant='dark' />
);
