import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';
import { inlineGlow } from './shared/animation';

const Left = styled.span``;
const Title = styled.span`
  font-weight: ${typography.weight.bold};
`;
const Center = styled.span``;
const Right = styled.span``;

const ItemInner = styled.span`
  /* Layout */
  line-height: 18px;
  padding: 7px 15px;
  display: flex;
  align-items: center;

  ${Left}, ${Title}, ${Center}, ${Right} {
    display: inline-flex;
  }

  ${Title}, ${Center} {
    flex: 1;
  }

  ${Left}, ${Right} {
    flex: 0 1 auto;
  }

  ${Right} {
    text-align: right;
    margin-left: 20px;
  }
`;

const Item = styled.a`
  font-size: ${typography.size.s1}px;
  transition: all 150ms ease-out;
  color: ${color.mediumdark};
  text-decoration: none;
  display: block;

  &:not(:first-child) {
    border-top: 1px solid ${color.mediumlight};
  }

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

  ${props =>
    props.active &&
    css`
      ${Title} {
        font-weight: ${typography.weight.extrabold};
      }
      ${Title}, ${Center} {
        color: ${color.primary};
      }

      ${Right} svg {
        opacity: 1;
        path {
          fill: ${color.primary};
        }
      }
    `};

  ${props =>
    props.loading &&
    css`
      ${Title} {
        ${inlineGlow};
        flex: 0;
        display: inline-block;
      }
    `};

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed !important;
      ${Title}, ${Center} {
        color: ${color.mediumdark};
      }
    `};
`;

export default function ListItem({
  loading,
  left,
  title,
  center,
  right,
  active,
  disabled,
  href,
  onClick,
  LinkWrapper,
  ...props
}) {
  const linkInner = (
    <ItemInner onClick={onClick} role="presentation">
      {left && <Left>{left}</Left>}
      {title && <Title>{title}</Title>}
      {center && <Center>{center}</Center>}
      {right && <Right>{right}</Right>}
    </ItemInner>
  );

  return (
    <Item
      as={LinkWrapper && href ? LinkWrapper : null}
      href={!LinkWrapper ? href : undefined}
      to={LinkWrapper ? href : undefined}
      active={active}
      loading={loading}
      disabled={disabled}
      {...props}
    >
      {linkInner}
    </Item>
  );
}

ListItem.propTypes = {
  loading: PropTypes.bool,
  left: PropTypes.node,
  title: PropTypes.node,
  center: PropTypes.node,
  right: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  LinkWrapper: PropTypes.func,
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  loading: false,
  left: null,
  title: <span>Loading</span>,
  center: null,
  right: null,
  active: false,
  disabled: false,
  href: null,
  LinkWrapper: null,
  onClick: null,
};
