import copyToClipboard from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// @ts-ignore
import { TooltipNote } from '../tooltip/TooltipNote';
// @ts-ignore
import WithTooltip from '../tooltip/WithTooltip';

const Tooltip = styled(WithTooltip)`
  cursor: pointer;
`;

interface ClipboardProps {
  children: React.ReactNode | ((copied: boolean) => React.ReactNode);
  toCopy?: string;
  getCopyContent?: () => string;
  copyOptions?: any;
  renderCopiedTooltip?: () => React.ReactNode;
  renderUncopiedTooltip?: () => React.ReactNode;
  resetTimeout?: number;
}

export const Clipboard = ({
  children,
  toCopy,
  getCopyContent,
  copyOptions,
  resetTimeout,
  renderCopiedTooltip,
  renderUncopiedTooltip,
  ...props
}: ClipboardProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (copied && timeoutId) {
      clearTimeout(timeoutId);
    }
    if (copied && resetTimeout) {
      timeoutId = setTimeout(() => setCopied(false), resetTimeout);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [copied]);

  const copy = () => {
    if (copyToClipboard(toCopy || getCopyContent(), copyOptions)) {
      setCopied(true);
    }
  };

  return (
    <Tooltip
      onClick={copy}
      hasChrome={false}
      tooltip={copied ? renderCopiedTooltip : renderUncopiedTooltip}
      {...props}
    >
      {typeof children === 'function' ? children(copied) : children}
    </Tooltip>
  );
};

Clipboard.defaultProps = {
  copyOptions: undefined,
  renderCopiedTooltip: () => <TooltipNote note="Copied" />,
  renderUncopiedTooltip: () => <TooltipNote note="Copy to clipboard" />,
  resetTimeout: 3000,
  toCopy: undefined,
  getCopyContent: () => '',
};
