import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { typography, color } from './shared/styles';

const StyledSubheading = styled('span', { shouldForwardProp: (prop) => !['muted'].includes(prop) })<
  Partial<SubheadingProps>
>`
  font-size: ${typography.size.s2 - 1}px;
  font-weight: ${typography.weight.extrabold};
  letter-spacing: 0.35em;
  text-transform: uppercase;

  ${(props) =>
    props.muted &&
    `
    color: ${color.dark};
    display: block;
    line-height: ${typography.size.m1}px;
    margin-bottom: 12px;
  `}
`;

export const Subheading: FunctionComponent<SubheadingProps> = ({
  muted = false,
  ...props
}: SubheadingProps) => <StyledSubheading muted={muted} {...props} />;

export interface SubheadingProps {
  /** This prop lightens the Subheading color and increases the letter spacing */
  muted?: boolean;
}
