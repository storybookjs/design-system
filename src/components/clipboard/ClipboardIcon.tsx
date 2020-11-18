import React from 'react';
import styled from 'styled-components';
import { color } from '../shared/styles';
import { Icon } from '../Icon';
import { Clipboard } from './Clipboard';

const StyledClipboard = styled(Clipboard)`
  line-height: 14px;
  padding: 5px;
  color: ${color.mediumdark};
  &:hover {
    color: ${color.darker};
  }
`;

interface StyledIconProps {
  copied: boolean;
}

const StyledIcon = styled(Icon)<StyledIconProps>`
  width: 14px;
  height: 14px;
  vertical-align: top;
  color: ${(props) => (props.copied ? color.positive : 'inherit')};
`;

type ClipboardIconProps = Omit<React.ComponentPropsWithoutRef<typeof Clipboard>, 'children'>;

export const ClipboardIcon = (props: ClipboardIconProps) => (
  <StyledClipboard {...props}>
    {(copied) => <StyledIcon icon={copied ? 'check' : 'copy'} copied={copied} />}
  </StyledClipboard>
);
