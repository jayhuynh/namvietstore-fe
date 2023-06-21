import type { Story, StoryDefault } from "@ladle/react";

import LanguageSelect from "@/components/buttons/LanguageSelect";

export default {
  title: "@nv/components/buttons/BilingualButton",
} satisfies StoryDefault<typeof LanguageSelect>;

export const Default: Story = () => (
  <LanguageSelect size="base" rightIcon={true} variant="default" />
);
