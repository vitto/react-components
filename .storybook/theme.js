import { create } from '@storybook/theming'
import brandImage from './maggioli.png';

export default create({

  base: 'dark',
  colorPrimary: '#b40038',
  colorSecondary: '#004881',

  // UI
  appBg: '#0266b4',
  appContentBg: '#fff',
  appBorderColor: '#fff',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#ddd',
  textInverseColor: 'green',

  // Toolbar default and active colors
  barTextColor: '#888',
  barSelectedColor: '#888',
  barBg: '#222',

  // Form colors
  inputBg: '#000',
  inputBorder: '#ddd',
  inputTextColor: '#ddd',
  inputBorderRadius: 0,

  brandTitle: 'Maggioli',
  brandUrl: 'https://www.maggioli.it',
  // brandImage: brandImage,
})
