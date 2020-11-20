import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from './Button';
import Card from './Card';
import Divider from './Divider';
import Box from './Box';

export const Dates = styled(Box)`
  height: 118px;
  width: 282px;
  background-color: #000000;
  border-radius: 8px;
  border: 1px solid #3c3f44;
`;

export const Subheading = styled(Box)`
  font-size: 10px;
  font-weight: 700;
  line-height: 10px;
  font-family: SF Pro Display;
  color: #f7f8f8;
`;

export const Body = styled(Box)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-family: SF Pro Display;
  color: #d7d8db;
`;

export const DateSection = styled(Box)`
  padding: 12px 0px 10px 16px;
  width: 142px;
`;

class DatePicker extends React.PureComponent {
  render() {
    return (
      <Dates>
        <Box flex aic>
          <DateSection borderRight="1px solid #3c3f44">
            <Box mb="6px">
              <Subheading>CHECK-IN</Subheading>
            </Box>
            <Body>1/6/21</Body>
          </DateSection>
          <DateSection>
            <Box mb="6px">
              <Subheading>CHECKOUT</Subheading>
            </Box>
            <Body>1/9/21</Body>
          </DateSection>
        </Box>
        <Box borderTop="1px solid #3c3f44" width="100%">
          <DateSection>
            <Box mb="6px">
              <Subheading>GUESTS</Subheading>
            </Box>
            <Body>6 guests</Body>
          </DateSection>
        </Box>
      </Dates>
    );
  }
}

DatePicker.propTypes = {};
DatePicker.defaultProps = {};

export default DatePicker;
