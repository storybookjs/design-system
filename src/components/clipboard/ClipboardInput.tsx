import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import { Input } from '../Input';
import { color, spacing } from '../shared/styles';
import { ClipboardIcon } from './ClipboardIcon';

const Container = styled.div`
  position: relative;
  margin-top: 15px;
`;

const StyledInput = styled(Input)`
  width: 100%;
  display: block;
  && input {
    padding-top: 7px !important;
    padding-bottom: 7px !important;
    padding-right: 26px !important;
    background: ${color.lightest};
    border: 1px solid ${color.border};
    border-radius: ${spacing.borderRadius.small}px;
    font-size: 11px;
    &:focus {
      box-shadow: none;
      border: 1px solid ${color.secondary};
    }
  }
`;

const StyledClipboardIcon = styled(ClipboardIcon)`
  position: absolute;
  top: 4px;
  right: 4px;
`;

interface ClipboardInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
  value: string;
}

export const ClipboardInput = ({ value, ...props }: ClipboardInputProps) => (
  <Container>
    <StyledInput
      {...props}
      id="clipboard-input"
      icon={undefined}
      hideLabel
      value={value}
      appearance="code"
      readOnly
    />
    <StyledClipboardIcon toCopy={value} />
  </Container>
);
