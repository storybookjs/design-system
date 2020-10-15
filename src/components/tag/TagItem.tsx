import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { color, typography, background, spacing } from '../shared/styles';
// @ts-ignore
import { Link } from '../Link';

type TagItemProps = {
  containsIcon?: boolean;
  inverse?: boolean;
  isButton?: boolean;
  LinkWrapper?: React.ComponentType | (() => React.ReactNode);
  nochrome?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  withArrow?: boolean;
};

export const TagItem = styled(Link)<TagItemProps>`
  background: ${background.app};
  border-radius: ${spacing.borderRadius.small}px;
  padding: 5px 10px;
  font-size: ${typography.size.s2}px;
  line-height: ${typography.size.m2}px;
  position: relative;
  color: ${color.darkest};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  white-space: nowrap;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    border-color: ${rgba(color.secondary, 0.5)};

    &:after {
      opacity: 1;
    }
  }
`;
