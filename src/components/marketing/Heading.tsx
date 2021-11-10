import React, { ComponentProps, FC } from 'react';
import { styled } from '@storybook/theming';
import { typography, color, breakpoint } from '../shared/styles';

export const StyledHeading = styled.h2`
  color: ${color.darkest};
  font-size: ${typography.size.m3}px;
  font-weight: ${typography.weight.black};
  letter-spacing: -0.29px;
  line-height: ${typography.size.l2}px;
  margin-bottom: 4px;

  @media (min-width: ${breakpoint * 1}px) {
    font-size: 36px;
    margin-bottom: 8px;
    letter-spacing: -0.37px;
  }
`;

export const Heading: FC<ComponentProps<typeof StyledHeading>> = (props) => (
  <StyledHeading {...props} />
);
