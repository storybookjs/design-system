import React from 'react';
import styled from 'styled-components';
import { typography } from './shared/styles';

const Heading = styled.span`
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-weight: ${typography.weight.black};
  font-size: ${typography.size.s2 - 1}px;
`;

export const Subheading = props => <Heading {...props} />;
