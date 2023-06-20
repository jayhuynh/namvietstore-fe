import type { Story, StoryDefault } from '@ladle/react';

import ServiceCard from '@/components/ServiceCard';
import { ContentType } from '@/components/ServiceCard';

import icon from '@/icons/headphones.svg';

const content: ContentType = {
  icon: icon,
  title: 'Sản phẩm',
  description: 'Đội ngũ giàu kinh nghiệm, có chuyên môn',
};

export default {
  title: '@nv/components/ServiceCard',
} satisfies StoryDefault<typeof ServiceCard>;

export const Default: Story = () => <ServiceCard content={content} />;

export const Dark: Story = () => (
  <ServiceCard content={content} variant='dark' />
);

export const Large: Story = () => (
  <ServiceCard content={content} size='large' />
);

export const Small: Story = () => (
  <ServiceCard content={content} size='small' />
);
