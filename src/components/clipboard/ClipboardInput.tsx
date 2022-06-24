import React from 'react';
import { styled } from '@storybook/theming';
import { Input } from '../Input';
import { ClipboardIcon } from './ClipboardIcon';

const Container = styled.div`
  position: relative;
`;

const StyledInput = styled(Input as any)`
  width: 100%;
  display: block;
  && input {
    padding-right: 32px !important;
  }
`;

const StyledClipboardIcon = styled(ClipboardIcon)`
  position: absolute;
  top: 0px;
  right: 0px;
`;

type SubProps = React.ComponentPropsWithoutRef<typeof Input>;
interface ClipboardInputProps extends SubProps {
  value: string;
}

export const ClipboardInput = ({ value, ...props }: ClipboardInputProps) => (
  <Container>
    <StyledInput
      id="clipboard-input"
      {...props}
      icon={undefined}
      hideLabel
      value={value}
      appearance="code"
      readOnly
    />
    <StyledClipboardIcon toCopy={value} />
  </Container>
);
