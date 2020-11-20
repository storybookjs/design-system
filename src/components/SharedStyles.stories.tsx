import React from 'react';
import styled from 'styled-components';
import { pageMargins, hoverEffect } from './shared/styles';

export default {
  title: 'SharedStyles',
};

const BlockWithMargin = styled.div`
  ${pageMargins};
  height: 300px;
  background-color: #333;
`;

export const PageMargins = () => (
  <div>
    <p>
      The box below has <code>pageMargins</code> styles applied to it which controls the horizontal
      padding and margin
    </p>
    <BlockWithMargin />
  </div>
);

const BlockWithHoverEffect = styled.div`
  ${hoverEffect};
  display: block;
  height: 300px;
`;

export const HoverEffectRest = () => <BlockWithHoverEffect />;

export const HoverEffectHover = () => <BlockWithHoverEffect className="__hover" />;

export const HoverEffectActive = () => <BlockWithHoverEffect className="__active" />;
