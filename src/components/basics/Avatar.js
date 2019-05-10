import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';
import { glow } from './shared/animation';
import Icon from './Icon';

export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

// prettier-ignore
const Image = styled.div`
  background: ${props => !props.loading ? "transparent" : color.light };
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${sizes.medium}px;
  width: ${sizes.medium}px;
  line-height: ${sizes.medium}px;

  ${props => props.size === "tiny" && css`
    height: ${sizes.tiny}px;
    width: ${sizes.tiny}px;
    line-height: ${sizes.tiny}px;
	`}

  ${props => props.size === "small" && css`
    height: ${sizes.small}px;
    width: ${sizes.small}px;
    line-height: ${sizes.small}px;
	`}

  ${props => props.size === "large" && css`
    height: ${sizes.large}px;
    width: ${sizes.large}px;
    line-height: ${sizes.large}px;
	`}

  ${props => !props.src && css`
    background: ${!props.loading && "#37D5D3" };
  `}

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  svg {
    position: relative;
    bottom: -2px;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  path {
    fill: ${color.medium};
    animation: ${glow} 1.5s ease-in-out infinite;
  }
`;

// prettier-ignore
const Initial = styled.div`
  color: ${color.lightest};
  text-align: center;

  font-size: ${typography.size.s2}px;
  line-height: ${sizes.medium}px;

  ${props => props.size === "tiny" && css`
    font-size: ${typography.size.s1 - 2}px;
    line-height: ${sizes.tiny}px;
  `}

  ${props => props.size === "small" && css`
    font-size: ${typography.size.s1}px;
    line-height: ${sizes.small}px;
  `}

  ${props => props.size === "large" && css`
    font-size: ${typography.size.s3}px;
    line-height: ${sizes.large}px;
  `}
`;

function Avatar({ loading, username, src, size, ...props }) {
  let avatarFigure = <Icon icon="useralt" />;

  if (!loading) {
    if (!src) {
      avatarFigure = <Initial size={size}>{username.substring(0, 1)}</Initial>;
    } else {
      avatarFigure = <img src={src} alt={username} />;
    }
  }

  return (
    <Image size={size} loading={loading} src={src} {...props}>
      {avatarFigure}
    </Image>
  );
}

Avatar.propTypes = {
  loading: PropTypes.bool,
  username: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

Avatar.defaultProps = {
  loading: false,
  username: 'loading',
  src: null,
  size: 'medium',
};

export default Avatar;
