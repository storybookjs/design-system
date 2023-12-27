import { css } from '@storybook/theming';
import { rgba } from 'polished';

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
  calmBlue: '#E3F3FF',
};

export const color = {
  // Palette
  primary: '#FF4785', // Coral
  secondary: '#029CFD', // Ocean
  tertiary: '#E3E6E8', // Light grey

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',
  red: '#ff4400',

  // Calm
  bluelight: '#E3F3FF', // rgba($color.blue, 12%)
  bluelighter: '#F5FBFF',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F7FAFC',
  light: '#EEF3F6',
  mediumlight: '#ECF4F9',
  medium: '#D9E8F2',
  mediumdark: '#73828C',
  dark: '#5C6870',
  darker: '#454E54',
  darkest: '#2E3438',
  tr10: 'rgba(0, 0, 0, 0.1)',
  tr5: 'rgba(0, 0, 0, 0.05)',

  border: 'hsla(203, 50%, 30%, 0.15)',

  // Status
  positive: '#448028', // Evergreen
  negative: '#D43900', // Crimson
  warning: '#A15C20', // Burnt sienna
  selected: '#0271B6', // Navy
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary:
      'var(--nunito-sans, "Nunito Sans"), "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
} as const;

export const breakpoint = 600;
export const pageMargin = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

export const hoverEffect = css`
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;

  &:hover,
  &.__hover {
    border-color: ${rgba(color.secondary, 0.5)};
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  &:active,
  &.__active {
    border-color: ${rgba(color.secondary, 1)};
    transform: translate3d(0, 0, 0);
  }
`;

export const zIndex = {
  tooltip: 2147483647,
};

// Typography styles
export const headers = {
  hero1: css({
    fontSize: typography.size.l3,
    fontWeight: typography.weight.bold,
  }),
  hero2: css({
    fontSize: typography.size.l2,
    fontWeight: typography.weight.bold,
  }),
  h1: css({
    fontSize: typography.size.l1,
    fontWeight: typography.weight.bold,
  }),
  h2: css({
    fontSize: typography.size.m3,
    fontWeight: typography.weight.bold,
  }),
  h3: css({
    fontSize: typography.size.m2,
    fontWeight: typography.weight.bold,
  }),
  h4: css({
    fontSize: typography.size.m1,
    fontWeight: typography.weight.bold,
  }),
  h5: css({
    fontSize: typography.size.s3,
    fontWeight: typography.weight.bold,
  }),
  h6: css({
    fontSize: typography.size.s2,
    fontWeight: typography.weight.bold,
  }),
};

export const subheading = {
  regular: css({
    fontSize: 13,
    fontWeight: typography.weight.extrabold,
    lineHeight: '18px',
    letterSpacing: '0.38em',
  }),
  small: css({
    fontSize: 11,
    fontWeight: typography.weight.extrabold,
    lineHeight: '16px',
    letterSpacing: '0.38em',
  }),
};

export const text = {
  storybookMediumBold: css({
    fontSize: 13,
    fontWeight: typography.weight.bold,
    lineHeight: '18px',
  }),
  storybookMedium: css({
    fontSize: 13,
    fontWeight: typography.weight.regular,
    lineHeight: '18px',
  }),
  largeBold: css({
    fontSize: typography.size.s3,
    fontWeight: typography.weight.bold,
    lineHeight: '24px',
  }),
  small: css({
    fontSize: typography.size.s1,
    fontWeight: typography.weight.regular,
    lineHeight: '18px',
  }),
  regularBold: css({
    fontSize: typography.size.s2,
    fontWeight: typography.weight.bold,
    lineHeight: '20px',
  }),
  smallBold: css({
    fontSize: typography.size.s1,
    fontWeight: typography.weight.bold,
    lineHeight: '18px',
  }),
  large: css({
    fontSize: typography.size.s3,
    fontWeight: typography.weight.regular,
    lineHeight: '24px',
  }),
  regular: css({
    fontSize: typography.size.s2,
    fontWeight: typography.weight.regular,
    lineHeight: '20px',
  }),
};

export const code = {
  regular: css({
    fontFamily: typography.type.code,
    fontSize: typography.size.s2,
    fontWeight: typography.weight.regular,
    lineHeight: '17px',
  }),

  small: css({
    fontFamily: typography.type.code,
    fontSize: typography.size.s1,
    fontWeight: typography.weight.regular,
    lineHeight: '14px',
  }),
};
