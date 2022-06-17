import React from 'react';
import { Eyebrow } from './Eyebrow';

export default {
  title: 'Eyebrow',
  component: Eyebrow,
  parameters: {
    chromatic: { viewports: [320, 440, 600, 900] },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#171C23' },
      ],
    },
    layout: 'fullscreen',
    viewport: {
      viewports: {
        smallMobile: {
          name: 'Mobile (Small)',
          styles: {
            width: '320px',
            height: '100%',
          },
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '440px',
            height: '100%',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '600px',
            height: '100%',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '900px',
            height: '100%',
          },
        },
      },
    },
  },
};

const Template = (args) => <Eyebrow {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Storybook Lazy Compilation for Webpack',
  link: 'https://storybook.js.org/blog/storybook-lazy-compilation-for-webpack/',
};

export const Inverse = Template.bind({});
Inverse.args = { inverse: true, ...Default.args };
Inverse.parameters = {
  backgrounds: { default: 'dark' },
};
