import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from './Button';
import Card from './Card';
import Divider from './Divider';
import Box from './Box';
import DatePicker from './DatePicker';
import PriceHeader from './PriceHeader';

export const Body = styled(Box)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-family: SF Pro Display;
  color: #d7d8db;
`;

export const Heading = styled(Box)`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  font-family: SF Pro Display;
  color: #f7f8f8;
`;

class Demo extends React.PureComponent {
  render() {
    return (
      <Card>
        <PriceHeader />
        <DatePicker />
        <Button mt="16px" mb="24px" flex aic center>
          Reserve
        </Button>
        <Box>
          <Box flex aic between mb="12px">
            <Body style={{ textDecoration: 'underline' }}>$420 x 3 nights</Body>
            <Body>$1260</Body>
          </Box>
          <Box flex aic between mb="12px">
            <Body style={{ textDecoration: 'underline' }}>Cleaning fee</Body>
            <Body>$99</Body>
          </Box>
          <Box flex aic between>
            <Body style={{ textDecoration: 'underline' }}>Service fee</Body>
            <Body>$99</Body>
          </Box>

          <Divider medium />
          <Box flex aic between>
            <Heading>Total</Heading>
            <Heading>$1458</Heading>
          </Box>
        </Box>
      </Card>
    );
  }
}

Demo.propTypes = {};
Demo.defaultProps = {};

export default Demo;
