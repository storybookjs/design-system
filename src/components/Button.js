import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Box from './Box';

export const StyledButton = styled(Box)`
  height: 48px;
  width: 282px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: linear-gradient(180deg, #6038ffff 0%, #1e97bdff 98.02%);

  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  font-family: SF Pro Display;
  color: #ffffff;
`;

class Button extends React.PureComponent {
  render() {
    return (
      <StyledButton mt="16px" mb="24px" flex aic center>
        {this.props.children}
      </StyledButton>
    );
  }
}

Button.propTypes = {};

Button.defaultProps = {
  children: 'Button',
};

export default Button;
