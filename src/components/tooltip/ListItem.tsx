import React, { ComponentProps, ReactNode } from 'react';
import { styled, css } from '@storybook/theming';
import weakMemoize from '@emotion/weak-memoize';
import { background, color, typography } from '../shared/styles';
import { inlineGlow } from '../shared/animation';

const Left = styled.span``;
const Title = styled.span`
  font-weight: ${typography.weight.bold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Center = styled.span``;
const Right = styled.span``;

const ItemWrapper = styled.li`
  list-style: none;

  &:not(:first-child) {
    border-top: 1px solid ${color.border};
  }
`;

const ItemInner = styled.span`
  /* Layout */
  line-height: 18px;
  padding: 7px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Title} {
    display: block;
  }

  ${Left}, ${Center}, ${Right} {
    display: inline-flex;
  }

  ${Title} {
    flex: 0 1 auto;
    margin-right: auto;
  }

  ${Center} {
    flex: 0 1 auto;
    margin-left: auto;
    margin-right: auto;
  }

  ${Left}, ${Right} {
    flex: 0 1 auto;
  }

  ${Right} {
    flex: none;
    text-align: right;
    margin-left: 10px;
  }
`;

interface LinkStyleProps {
  activeColor: string;
  active?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

const linkStyles = (props: LinkStyleProps) => css`
  font-size: ${typography.size.s1}px;
  transition: all 150ms ease-out;
  color: ${color.mediumdark};
  text-decoration: none;
  display: block;

  /* Styling */
  ${Title} {
    color: ${color.darker};
  }

  ${Right} svg {
    transition: all 200ms ease-out;
    opacity: 0;
    height: 12px;
    width: 12px;
    margin: 3px 0;
    vertical-align: top;

    path {
      fill: ${color.mediumdark};
    }
  }

  &:hover {
    background: ${background.calmBlue};
    cursor: pointer;

    ${Right} svg {
      opacity: 1;
    }
  }

  ${props.active &&
  css`
    ${Title} {
      font-weight: ${typography.weight.bold};
    }
    ${Title}, ${Center} {
      color: ${props.activeColor};
    }

    ${Right} svg {
      opacity: 1;
      path {
        fill: ${props.activeColor};
      }
    }
  `};

  ${props.isLoading &&
  css`
    ${Title} {
      ${inlineGlow};
      flex: 0 1 auto;
      display: inline-block;
    }
  `};

  ${props.disabled &&
  css`
    cursor: not-allowed !important;
    ${Title}, ${Center} {
      color: ${color.mediumdark};
    }
  `};
`;

const Item = styled(
  ({
    active,
    activeColor,
    isLoading,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkStyleProps) => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...rest} />;
  }
)`
  ${linkStyles}
`;

// `LinkWrapper` is an input prop that gets internally wrapped with this function here
// `weakMemoize` ensures that for any given `LinkWrapper` we always createa single "WrappedLinkWrapper"
// without this memoization the `LinkWrapper` gets *remounted* each render
// this happens because React can't reconcile it correctly, given that the component's type (a styled component) is recreated each render
const buildStyledLinkWrapper = weakMemoize(
  (LinkWrapper: LinkWrapperType) => styled(
    ({
      active,
      isLoading,
      activeColor,
      ...linkWrapperRest
    }: ComponentProps<LinkWrapperType> & LinkStyleProps) => <LinkWrapper {...linkWrapperRest} />
  )`
    ${linkStyles}
  `
);

type StyledLinkWrapperProps = ComponentProps<ReturnType<typeof buildStyledLinkWrapper>>;

interface ListItemProps {
  appearance?: 'primary' | 'secondary';
  isLoading?: boolean;
  left?: ReactNode;
  title?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  active?: boolean;
  disabled?: boolean;
  LinkWrapper?: LinkWrapperType | null;
  onClick?: ComponentProps<typeof ItemInner>['onClick'];
}

export const ListItem = ({
  appearance = 'primary',
  left,
  title = <span>Loading</span>,
  center,
  right,
  onClick,
  LinkWrapper,
  ...rest
}: ListItemProps & Omit<StyledLinkWrapperProps, 'activeColor'>) => {
  const listItemActiveColor = color[appearance];
  const linkInner = (
    <ItemInner onClick={onClick} role="presentation">
      {left && <Left>{left}</Left>}
      {title && <Title>{title}</Title>}
      {center && <Center>{center}</Center>}
      {right && <Right>{right}</Right>}
    </ItemInner>
  );

  if (LinkWrapper) {
    const StyledLinkWrapper = buildStyledLinkWrapper(LinkWrapper);

    return (
      <ItemWrapper>
        <StyledLinkWrapper activeColor={listItemActiveColor} {...rest}>
          {linkInner}
        </StyledLinkWrapper>
      </ItemWrapper>
    );
  }

  return (
    <ItemWrapper>
      <Item activeColor={listItemActiveColor} {...rest}>
        {linkInner}
      </Item>
    </ItemWrapper>
  );
};

type AnyProps = Record<string, any>;
type LinkWrapperType = (props: AnyProps) => React.ReactElement<any, any>;
