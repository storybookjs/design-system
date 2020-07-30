import React from 'react';
import styled from 'styled-components';
import { color, typography } from '../shared/styles';
import { Link } from '../Link';

export const MenuLink = styled(({ isActive, ...rest }) => <Link {...rest} />)`
  outline: none;
  color: ${(props) => (props.isActive ? color.secondary : color.darkest)};
  font-weight: ${(props) => (props.isActive ? typography.weight.bold : typography.weight.regular)};
  line-height: 24px;
`;
