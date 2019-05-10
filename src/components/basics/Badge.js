import React from 'react';
import styled, { css } from 'styled-components';
import { background, color } from './shared/styles';

const BadgeWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 11px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 3em;

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${props =>
    props.status === 'positive' &&
    css`
      color: ${color.positive};
      background: ${background.positive};
      svg path {
        fill: ${color.positive};
      }
    `};

  ${props =>
    props.status === 'negative' &&
    css`
      color: ${color.negative};
      background: ${background.negative};
      svg path {
        fill: ${color.negative};
      }
    `};

  ${props =>
    props.status === 'neutral' &&
    css`
      color: ${color.dark};
      background: ${color.mediumlight};
      svg path {
        fill: ${color.dark};
      }
    `};
`;

function Badge({ ...props }) {
  return <BadgeWrapper {...props} />;
}

export default Badge;
