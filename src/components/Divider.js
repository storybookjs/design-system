import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import Box from './Box';

const OuterBox = styled(Box)`
  height: 1px;
  width: 100%;
  background: #3c3f44;
  box-sizing: border-box;
`;
OuterBox.displayName = 'OuterBox';

class Divider extends React.PureComponent {
  static propTypes = {
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
  };

  render() {
    return <OuterBox {...this._sizing()} />;
  }

  _sizing = () => {
    let my = 4;
    if (this.props.small) {
      my = 8;
    } else if (this.props.medium) {
      my = 16;
    } else if (this.props.large) {
      my = 24;
    } else if (this.props.xlarge) {
      my = 32;
    }

    my = my + 'px';

    return { my };
  };

  static sampleProps = {};
}

export default Divider;
