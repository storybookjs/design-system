import React from 'react';
import { styled, css } from '@storybook/theming';
import { rgba } from 'polished';
import { color } from '../shared/styles';
import { Link } from '../Link';
import { TagItem } from './TagItem';

export interface TagLinkProps extends React.ComponentProps<typeof Link> {
  isLoading?: boolean;
}

export const TagLink = styled((props: TagLinkProps) => {
  return (
    // @ts-expect-error FIXME what's wrong here?
    <TagItem {...props} as={Link}>
      {props.isLoading ? 'Loading tag' : props.children}
    </TagItem>
  );
  // TODO: check if this explicit type param is needed
})<TagLinkProps>`
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
