import React, { ComponentProps, FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { color, typography } from '../shared/styles';
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

  ${Title}{
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

const linkStyles = css<{
  activeColor: string;
  active: boolean;
  isLoading: boolean;
  disabled: boolean;
}>`
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
    background: #e3f3ff;
    cursor: pointer;

    ${Right} svg {
      opacity: 1;
    }
  }

  ${(props) =>
    props.active &&
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

  ${(props) =>
    props.isLoading &&
    css`
      ${Title} {
        ${inlineGlow};
        flex: 0 1 auto;
        display: inline-block;
      }
    `};

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed !important;
      ${Title}, ${Center} {
        color: ${color.mediumdark};
      }
    `};
`;

// eslint-disable-next-line jsx-a11y/anchor-has-content
const Item = styled(({ active, activeColor, isLoading, ...rest }) => <a {...rest} />)`
  ${linkStyles}
`;

const buildStyledLinkWrapper = (
  LinkWrapper: Props['LinkWrapper']
) => styled(({ active, isLoading, activeColor, ...linkWrapperRest }) => (
  <LinkWrapper {...linkWrapperRest} />
))`
  ${linkStyles}
`;

export const ListItem: FC<Props & ComponentProps<ReturnType<typeof buildStyledLinkWrapper>>> = ({
  appearance = 'primary',
  left,
  title = <span>Loading</span>,
  center,
  right,
  onClick,
  LinkWrapper,
  ...rest
}) => {
  const listItemActiveColor = color[appearance];
  const linkInner = (
    <ItemInner onClick={onClick as any} role="presentation">
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

interface Props {
  appearance?: 'primary' | 'secondary';
  isLoading?: boolean;
  left?: ReactNode;
  title?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  active?: boolean;
  disabled?: boolean;
  LinkWrapper?: Function;
  onClick?: Function;
}
