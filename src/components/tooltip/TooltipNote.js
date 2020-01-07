import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, typography } from '../shared/styles';

const Note = styled.div`
  padding: 2px 6px;
  line-height: 16px;
  font-size: 10px;
  font-weight: ${typography.weight.bold};
  color: ${color.lightest};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  z-index: -1;
  background: rgba(0, 0, 0, 0.4);
  margin: 6px;
`;

export function TooltipNote({ note, ...rest }) {
  return <Note {...rest}>{note}</Note>;
}

TooltipNote.propTypes = {
  note: PropTypes.string.isRequired,
};
