import React from 'react';
import { styled } from '@storybook/theming';
import { color } from '../shared/styles';
import { Icon } from '../Icon';
import { Clipboard } from './Clipboard';

const StyledClipboard = styled(Clipboard)`
  line-height: 10px;
  padding: 10px;
  color: ${color.mediumdark};
  &:hover {
    color: ${color.darker};
  }
`;

interface StyledIconProps {
  copied: boolean;
}

const StyledIcon = styled(Icon)<StyledIconProps>`
  width: 12px;
  height: 12px;
  vertical-align: top;
  color: ${(props) => (props.copied ? color.positive : 'inherit')};
`;

type ClipboardIconProps = Omit<React.ComponentPropsWithoutRef<typeof Clipboard>, 'children'>;

export const ClipboardIcon = (props: ClipboardIconProps) => (
  <StyledClipboard {...props}>
    {(copied) => <StyledIcon icon={copied ? 'check' : 'copy'} copied={copied} />}
  </StyledClipboard>
);
