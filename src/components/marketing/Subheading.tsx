import React, { ComponentProps, FC } from 'react';
import { styled, color, typography } from '@storybook/theming';

import { subheadingStyles } from '../Subheading';

const StyledSubheading = styled.span`
  ${subheadingStyles}

  color: ${color.dark};
  display: block;
  letter-spacing: 5.57px;
  line-height: ${typography.size.m1}px;
  margin-bottom: 12px;
`;

export const Subheading: FC<ComponentProps<typeof StyledSubheading>> = (props) => (
  <StyledSubheading {...props} />
);
