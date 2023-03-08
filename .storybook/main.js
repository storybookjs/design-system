module.exports = {
  stories: [
    //'../src/**/*.mdx', 
  '../src/**/*.stories.js', 
  //'../src/components/*.stories.js', 
  //'../src/**/*.stories.tsx'
  
],
  addons: ['@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-a11y', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    //autodocs: true
  }
};