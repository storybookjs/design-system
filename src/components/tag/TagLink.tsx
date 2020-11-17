import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { color, typography, background, spacing } from '../shared/styles';
// @ts-ignore
import { inlineGlow } from '../shared/animation';
import { Link } from '../Link';
import { TagItem } from './TagItem';

export interface TagLinkProps extends React.ComponentProps<typeof Link> {
  isLoading?: boolean;
}

export const TagLink = styled(TagItem).attrs<TagLinkProps>(({ isLoading, children }) => ({
  children: isLoading ? 'Loading tag' : children,
  as: Link,
}))<TagLinkProps>`
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

  ${(props) =>
    !props.isLoading &&
    css`
      &:hover {
        border-color: ${rgba(color.secondary, 0.5)};

        &:after {
          opacity: 1;
        }
      }
    `}
`;

TagLink.defaultProps = {
  isLoading: false,
};
