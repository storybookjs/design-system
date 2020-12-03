import styled, { css } from 'styled-components';
import { color, typography, background, spacing } from '../shared/styles';
// @ts-ignore
import { inlineGlow } from '../shared/animation';

export type TagItemProps = {
  isLoading?: boolean;
};

function randomString(min: number, max: number) {
  const length = Math.random() * (max - min) + min;
  return Math.round(36 ** length + 1 - Math.random() * 36 ** length)
    .toString(36)
    .slice(1);
}

export const TagItem = styled.div.attrs<TagItemProps>(({ isLoading, children }) => ({
  children: isLoading ? randomString(5, 12) : children,
  ...(isLoading && { 'aria-label': 'Loading tag' }),
}))<TagItemProps>`
  display: inline-block;
  background: ${background.app};
  border-radius: ${spacing.borderRadius.small}px;
  padding: 6px 10px 4px 10px;
  font-size: ${typography.size.s2}px;
  line-height: ${typography.size.m1}px;
  position: relative;
  color: ${color.darkest};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
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
