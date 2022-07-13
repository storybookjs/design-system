import React, { Fragment, FunctionComponent } from 'react';
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
export const Icon: FunctionComponent<Props> = ({ icon, ...props }: Props) => {
  let child;

  if (Array.isArray(icons[icon])) {
    const iconsArray: Element[] = icons[icon] as unknown as Element[];
    child = (
      <>
        {iconsArray.map((path, i) => {
          // eslint-disable-next-line react/no-array-index-key
          return <Fragment key={`${icon}-${i}`}>{path}</Fragment>;
        })}
      </>
    );
  } else {
    child = <>{icons[icon]}</>;
  }

  return (
    <Svg viewBox="0 0 14 14" width="14px" height="14px" {...props}>
      {child}
    </Svg>
  );
};

export interface Props {
  icon: keyof typeof icons;
}
