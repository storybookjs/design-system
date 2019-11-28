import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color } from './shared/styles';
import { glow } from './shared/animation';

const ProgressWrapper = styled.div`
  display: inline-block;
  height: ${props => (props.size === 'small' ? 4 : 5)}px;
`;

const Dot = styled.div`
  background: ${color.medium};
  display: inline-block;
  vertical-align: top;
  width: ${props => (props.size === 'small' ? 4 : 5)}px;
  height: ${props => (props.size === 'small' ? 4 : 5)}px;
  border-radius: 3em;
  margin: 0 ${props => (props.size === 'small' ? 2 : 3)}px;

  ${props =>
    props.active &&
    css`
      background: ${color.mediumdark};
    `};

  ${props =>
    props.isLoading &&
    css`
      animation: ${glow} 1.5s ease-in-out infinite;
      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 0.3s;
      }
      &:nth-child(3) {
        animation-delay: 0.6s;
      }
      &:nth-child(4) {
        animation-delay: 0.9s;
      }
    `};
`;

export function ProgressDots({ isLoading, steps, progress, className, size }) {
  const dots = [];
  for (let i = 0; i < steps; i += 1) {
    dots.push(<Dot isLoading={isLoading} active={i === progress - 1} key={i} size={size} />);
  }
  return (
    <ProgressWrapper
      className={className}
      size={size}
      role="status"
      aria-live="polite"
      aria-label="Content is loading ..."
    >
      {dots}
    </ProgressWrapper>
  );
}

ProgressDots.propTypes = {
  isLoading: PropTypes.bool,
  steps: PropTypes.number,
  progress: PropTypes.number,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};

ProgressDots.defaultProps = {
  isLoading: false,
  steps: 4,
  progress: 0,
  className: null,
  size: 'small',
};
