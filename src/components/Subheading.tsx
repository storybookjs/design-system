import React, { ComponentProps, FC } from 'react';
import { styled, css } from '@storybook/theming';
import { typography } from './shared/styles';

export const subheadingStyles = css`
  font-size: ${typography.size.s2 - 1}px;
  font-weight: ${typography.weight.black};
  letter-spacing: 0.35em;
  text-transform: uppercase;
`;

const Heading = styled.span`
  ${subheadingStyles}
`;

export const Subheading: FC<ComponentProps<typeof Heading>> = (props) => <Heading {...props} />;
