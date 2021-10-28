import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { typography, color } from './shared/styles';

const StyledSubheading = styled('span', { shouldForwardProp: (prop) => !['muted'].includes(prop) })<
  Partial<Props>
>`
  font-size: ${typography.size.s2 - 1}px;
  font-weight: ${typography.weight.black};
  letter-spacing: 0.35em;
  text-transform: uppercase;

  ${(props) =>
    props.muted &&
    `
    color: ${color.dark};
    display: block;
    letter-spacing: 5.57px;
    line-height: ${typography.size.m1}px;
    margin-bottom: 12px;
  `}
`;

export const Subheading: FunctionComponent<Props> = ({ muted = false, ...props }: Props) => (
  <StyledSubheading muted={muted} {...props} />
);

interface Props {
  /** This prop lightens the Subheading color and increases the letter spacing */
  muted?: boolean;
}
