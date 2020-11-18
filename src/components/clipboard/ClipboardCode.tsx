import React from 'react';
import styled from 'styled-components';

import { ClipboardIcon } from './ClipboardIcon';

const Container = styled.div`
  position: relative;
`;

const Code = styled.pre`
  width: 100%;
  display: block;
  margin: 0;
  padding-right: 32px;
  overflow: hidden;
`;

const StyledClipboardIcon = styled(ClipboardIcon)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

interface ClipboardCodeProps {
  code: string;
}

export const ClipboardCode = ({ code, ...props }: ClipboardCodeProps) => (
  <Container>
    <Code id="clipboard-code" {...props}>
      {code}
    </Code>
    <StyledClipboardIcon toCopy={code} />
  </Container>
);
