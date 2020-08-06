import copyToClipboard from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { TooltipNote } from './tooltip/TooltipNote';
import WithTooltip from './tooltip/WithTooltip';

const Tooltip = styled(WithTooltip)`
  cursor: pointer;
`;

export const Clipboard = ({
  children,
  toCopy,
  copyOptions,
  resetTimeout,
  renderCopiedTooltip,
  renderUncopiedTooltip,
  ...props
}) => {
  const timeout = useRef();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied && timeout.current) {
      clearTimeout(timeout.current);
    }
    if (copied && resetTimeout) {
      timeout.current = setTimeout(() => setCopied(false), resetTimeout);
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [copied]);

  const copy = () => {
    if (copyToClipboard(toCopy, copyOptions)) {
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

Clipboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  toCopy: PropTypes.string.isRequired,
  copyOptions: PropTypes.object, // eslint-disable-line
  renderCopiedTooltip: PropTypes.func,
  renderUncopiedTooltip: PropTypes.func,
  resetTimeout: PropTypes.number,
};

Clipboard.defaultProps = {
  copyOptions: undefined,
  renderCopiedTooltip: () => null,
  renderUncopiedTooltip: () => null,
  resetTimeout: 3000,
};
