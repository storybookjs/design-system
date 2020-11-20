import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Box from './Box';

export const Price = styled(Box)`
  font-size: 26px;
  font-weight: 600;
  line-height: 26px;
  font-family: SF Pro Display;
  color: white;
`;

export const Unit = styled(Box)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  font-family: SF Pro Display;
  color: #93979f;
`;

class PriceHeader extends React.PureComponent {
  render() {
    return (
      <Box flex aic width="100%" mb="16px">
        <Price>$420</Price>
        <Unit pl="4px">/ night</Unit>
      </Box>
    );
  }
}

PriceHeader.propTypes = {};
PriceHeader.defaultProps = {};

export default PriceHeader;
