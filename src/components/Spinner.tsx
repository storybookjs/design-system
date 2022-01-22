import React, { ComponentProps, FunctionComponent } from 'react';
import { styled, css } from '@storybook/theming';
import { color } from './shared/styles';
import { rotate360 } from './shared/animation';

interface Props {
  inline?: boolean;
  inverse?: boolean;
  inForm?: boolean;
  positive?: boolean;
  negative?: boolean;
  neutral?: boolean;
}

const SpinnerWrapper = styled.div<Props>`
  border-radius: 3em;
  cursor: progress;
  display: inline-block;
  overflow: hidden;
  position: relative;
  transition: all 200ms ease-out;
  vertical-align: top;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -16px;
  margin-left: -16px;
  height: 32px;
  width: 32px;

  animation: ${rotate360} 0.7s linear infinite;

  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.03);
  border-top-color: rgba(0, 0, 0, 0.15);

  ${(props) =>
    props.inverse &&
    css`
      border-color: rgba(255, 255, 255, 0.2);
      border-top-color: rgba(255, 255, 255, 0.4);
    `};
  ${(props) =>
    props.inForm &&
    css`
      margin-top: -6px;
      margin-left: -6px;
      height: 12px;
      width: 12px;
      border: 1px solid ${color.secondary};
      border-bottom-color: transparent;
    `};
  ${(props) =>
    props.inline &&
    css`
      position: relative;
      top: initial;
      left: initial;
      margin-top: initial;
      margin-left: initial;
      vertical-align: middle;
      height: 8px;
      width: 8px;
      border: 1px solid;
      border-top-color: ${color.secondary};
      border-left-color: ${color.secondary};
      border-right-color: ${color.secondary};
      border-bottom-color: transparent;

      ${props.positive &&
      css`
        border-top-color: ${color.positive};
        border-left-color: ${color.positive};
        border-right-color: ${color.positive};
      `};

      ${props.negative &&
      css`
        border-top-color: ${color.red};
        border-left-color: ${color.red};
        border-right-color: ${color.red};
      `};

      ${props.neutral &&
      css`
        border-top-color: ${color.dark};
        border-left-color: ${color.dark};
        border-right-color: ${color.dark};
      `};

      ${props.inverse &&
      css`
        border-top-color: ${color.lightest};
        border-left-color: ${color.lightest};
        border-right-color: ${color.lightest};
      `};
    `};
`;

export const Spinner: FunctionComponent<Props & ComponentProps<typeof SpinnerWrapper>> = (
  props
) => {
  return (
    <SpinnerWrapper
      aria-label="Content is loading ..."
      aria-live="polite"
      role="status"
      {...props}
    />
  );
};
