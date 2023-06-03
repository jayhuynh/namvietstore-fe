import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  //Modify webpack config to add alias for @ symbol
  webpackFinal: async (storybookWebpackConfig) => {
    if (storybookWebpackConfig.resolve) {
      // Ensure the alias object exists in the resolve configuration
      storybookWebpackConfig.resolve.alias =
        storybookWebpackConfig.resolve.alias || {};
      // Add the alias for the @ symbol to resolve to the root directory
      storybookWebpackConfig.resolve.alias['@'] = path.resolve(
        __dirname,
        '../'
      );
    }

    return storybookWebpackConfig;
  },
};
export default config;
