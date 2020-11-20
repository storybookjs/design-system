import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const StyledCard = styled.div`
  height: 447px;
  width: 330px;
  background-color: #000000;
  border-radius: 8px;
  border: 1px solid #3c3f44;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 24px 24px 24px 24px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;
  & * {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;
  }
`;

class Card extends React.PureComponent {
  static propTypes = {};

  render() {
    return <StyledCard>{this.props.children}</StyledCard>;
  }

  static sampleProps = {};
}

export default Card;
