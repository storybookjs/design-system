import React, { ComponentProps, FunctionComponent } from 'react';
import { styled, css } from '@storybook/theming';
import { color } from './shared/styles';
import { glow } from './shared/animation';

const ProgressWrapper = styled.div<{ size: 'small' | 'large' }>`
  display: inline-block;
  height: ${(props) => (props.size === 'small' ? 4 : 5)}px;
`;

interface DotProps {
  size: 'small' | 'large';
  active: boolean;
  isLoading: boolean;
}

const Dot = styled.div<DotProps>`
  background: ${color.medium};
  display: inline-block;
  vertical-align: top;
  width: ${(props) => (props.size === 'small' ? 4 : 5)}px;
  height: ${(props) => (props.size === 'small' ? 4 : 5)}px;
  border-radius: 3em;
  margin: 0 ${(props) => (props.size === 'small' ? 2 : 3)}px;

  ${(props) =>
    props.active &&
    css`
      background: ${color.mediumdark};
    `};

  ${(props) =>
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

interface Props {
  isLoading: boolean;
  steps: number;
  progress: number;
  size: 'small' | 'large';
}

export const ProgressDots: FunctionComponent<Props & ComponentProps<typeof ProgressWrapper>> = ({
  isLoading = false,
  steps = 4,
  progress = 0,
  size = 'small',
  ...rest
}) => {
  const dots = [];
  for (let i = 0; i < steps; i += 1) {
    dots.push(<Dot isLoading={isLoading} active={i === progress - 1} key={i} size={size} />);
  }
  return (
    <ProgressWrapper
      size={size}
      role="status"
      aria-live="polite"
      aria-label="Content is loading ..."
      {...rest}
    >
      {dots}
    </ProgressWrapper>
  );
};
