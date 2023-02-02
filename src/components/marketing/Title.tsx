import React, { ComponentProps, FC } from 'react';
import { styled } from '@storybook/theming';
import { typography, color } from '../shared/styles';

const StyledTitle = styled.h3`
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m2}px;
  line-height: ${typography.size.m3}px;
  color: ${color.darkest};
`;

export const Title: FC<ComponentProps<typeof StyledTitle>> = (props) => <StyledTitle {...props} />;
