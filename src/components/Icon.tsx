import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { icons } from './shared/icons';

const Svg = styled.svg`
  display: inline-block;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
  vertical-align: middle;

  path {
    fill: currentColor;
  }
`;

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */
export const Icon: FunctionComponent<IconProps> = ({ icon, ...props }: IconProps) => {
  return (
    <Svg viewBox="0 0 14 14" width="14px" height="14px" {...props}>
      <>{icons[icon]}</>
    </Svg>
  );
};

export type IconType = keyof typeof icons;

export interface IconProps {
  icon: IconType;
}
