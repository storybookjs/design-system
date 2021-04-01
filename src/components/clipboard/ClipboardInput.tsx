import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import { Input } from '../Input';
import { color, spacing } from '../shared/styles';
import { ClipboardIcon } from './ClipboardIcon';

const Container = styled.div`
  position: relative;
`;

const StyledInput = styled(Input)`
  width: 100%;
  display: block;
  && input {
    padding-right: 26px !important;
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
