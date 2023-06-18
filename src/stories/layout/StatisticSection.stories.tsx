import type { Story, StoryDefault } from '@ladle/react';

import { ContentType } from '@/components/layout/StatisticSection';
import StatisticSection from '@/components/layout/StatisticSection';

const content: ContentType[] = [
  {
    title: 'mặt hàng',
    statistic: '500',
  },
  {
    title: 'khách hàng hài lòng',
    statistic: '100',
  },
  {
    title: 'dự án thành công',
    statistic: '200',
  },
  {
    title: 'thành lập doanh nghiệp',
    statistic: '2010',
  },
];

export default {
  title: '@nv/components/layout/StatisticSection',
} satisfies StoryDefault<typeof StatisticSection>;

export const Default: Story = () => <StatisticSection content={content} />;
