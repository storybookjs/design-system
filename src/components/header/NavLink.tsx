import React, { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// @ts-ignore
import { Link } from '../Link';
import { typography } from '../shared/styles';
import { HeaderContext } from './HeaderContext';

const StyledNavLink = styled(Link)`
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.extrabold};
`;

type NavLinkProps = PropTypes.InferProps<typeof Link.propTypes>;

export const NavLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, NavLinkProps>(
  (props, ref) => {
    const { inverse } = useContext(HeaderContext);
    return <StyledNavLink ref={ref} inverse={inverse} tertiary={!inverse} {...props} />;
  }
);
