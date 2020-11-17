import styled, { css } from 'styled-components';
import { color, typography, background, spacing } from '../shared/styles';
// @ts-ignore
import { inlineGlow } from '../shared/animation';

export type TagItemProps = {
  isLoading?: boolean;
};

export const TagItem = styled.div.attrs<TagItemProps>(({ isLoading, children }) => ({
  children: isLoading ? 'Loading tag' : children,
}))<TagItemProps>`
  display: inline-block;
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
