import React from 'react';
import { styled } from '@storybook/theming';
import { text, subheading, headers, code } from './shared/styles';

export default {
  title: 'Typography/Styles',
};

const HeaderBase = styled.p<{ variant: keyof typeof headers }>(
  { marginBottom: 20 },
  (props) => headers[props.variant]
);
export const Header = () => (
  <>
    <HeaderBase variant="hero1">Headers/Hero1</HeaderBase>
    <HeaderBase variant="hero2">Headers/Hero2</HeaderBase>
    <HeaderBase variant="h1">Headers/H1</HeaderBase>
    <HeaderBase variant="h2">Headers/H2</HeaderBase>
    <HeaderBase variant="h3">Headers/H3</HeaderBase>
    <HeaderBase variant="h4">Headers/H4</HeaderBase>
    <HeaderBase variant="h5">Headers/H5</HeaderBase>
    <HeaderBase variant="h6">Headers/H6</HeaderBase>
  </>
);

const SubheadingBase = styled.p<{ variant: keyof typeof subheading }>(
  { marginBottom: 20 },
  (props) => subheading[props.variant]
);
export const Subheading = () => (
  <>
    <SubheadingBase variant="regular">Subheading</SubheadingBase>
    <SubheadingBase variant="small">Subheading small</SubheadingBase>
  </>
);

const TextBase = styled.p<{ variant: keyof typeof text }>(
  { marginBottom: 20 },
  (props) => text[props.variant]
);
export const Text = () => (
  <>
    <TextBase variant="large">Text/Large</TextBase>
    <TextBase variant="largeBold">Text/LargeBold</TextBase>
    <TextBase variant="regular">Text/Regular</TextBase>
    <TextBase variant="regularBold">Text/RegularBold</TextBase>
    <TextBase variant="storybookMedium">Text/StorybookMedium</TextBase>
    <TextBase variant="storybookMediumBold">Text/StorybookMediumBold</TextBase>
    <TextBase variant="small">Text/Small</TextBase>
    <TextBase variant="smallBold">Text/SmallBold</TextBase>
  </>
);

const CodeBase = styled.p<{ variant: keyof typeof code }>(
  { marginBottom: 20 },
  (props) => code[props.variant]
);
export const Code = () => (
  <>
    <CodeBase variant="regular">Code/Regular</CodeBase>
    <CodeBase variant="small">Code/Small</CodeBase>
  </>
);
