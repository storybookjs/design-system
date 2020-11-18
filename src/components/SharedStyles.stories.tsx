import React from 'react';
import styled from 'styled-components';
import { pageMargins, hoverEffect } from './shared/styles';

export default {
  title: 'Design System/SharedStyles',
};

const BlockWithMargin = styled.div`
  ${pageMargins};
  height: 300px;
  background-color: #333;
`;

export const PageMargins = () => <BlockWithMargin />;

const BlockWithHoverEffect = styled.div`
  ${hoverEffect};
  display: block;
  height: 300px;
`;

export const HoverEffectDefault = () => <BlockWithHoverEffect />;

export const HoverEffectHover = () => <BlockWithHoverEffect className="__hover" />;

export const HoverEffectActive = () => <BlockWithHoverEffect className="__active" />;
