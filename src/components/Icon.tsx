import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { icons } from './shared/icons';

const Svg = styled('svg', { shouldForwardProp: (prop) => !['block', 'color'].includes(prop) })<
  Partial<Props>
>`
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);

  path {
    fill: ${(props) => props.color};
  }
`;

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */
export const Icon: FunctionComponent<Props> = ({
  icon,
  block = false,
  color = 'currentColor',
  ...props
}: Props) => {
  return (
    <Svg viewBox="0 0 1024 1024" width="20px" height="20px" block={block} color={color} {...props}>
      <path d={icons[icon]} />
    </Svg>
  );
};

interface Props {
  icon: keyof typeof icons;
  /** Pass this prop to add display: block to the Icon */
  block?: boolean;
  /** Set a custom color for the Icon */
  color?: string;
}
