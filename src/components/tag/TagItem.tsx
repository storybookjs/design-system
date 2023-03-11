import React from 'react';
import { styled, css } from '@storybook/theming';
import { color, typography, spacing } from '../shared/styles';
import { inlineGlow } from '../shared/animation';

export type TagItemProps = {
  children?: React.ReactNode;
  isLoading?: boolean;
};

function randomString(min: number, max: number) {
  const length = Math.random() * (max - min) + min;
  return Math.round(36 ** length + 1 - Math.random() * 36 ** length)
    .toString(36)
    .slice(1);
}
export const TagItem = styled(
  ({ isLoading, children, ...rest }: TagItemProps) => (
    <div {...rest} {...(isLoading && { 'aria-label': 'Loading tag' })}>
      {isLoading ? randomString(5, 12) : children}
    </div>
  ),
  {
    shouldForwardProp: (prop) => prop !== 'theme' && prop !== 'as',
  }
)<TagItemProps>`
  background: ${color.bluelighter};
  border-color: transparent;
  border-radius: ${spacing.borderRadius.small}px;
  border-style: solid;
  border-width: 1px;
  color: ${color.darkest};
  display: inline-block;
  font-size: ${typography.size.s2}px;
  line-height: ${typography.size.m1}px;
  padding: 6px 10px 4px 10px;
  position: relative;
  white-space: nowrap;

  ${(props) =>
    props.isLoading &&
    css`
      cursor: progress !important;
      ${inlineGlow};
      &:hover {
        color: transparent;
      }
    `}
`;

TagItem.defaultProps = {
  isLoading: false,
};
