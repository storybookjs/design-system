/* eslint-disable react/no-danger */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index';
import PropTypes from 'prop-types';

import { color, typography } from './shared/styles';

import 'prismjs/themes/prism.css';

loadLanguages(['bash', 'typescript', 'json']);

// Tweak Prism styling
const HighlightBlock = styled.div`
  *:not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${color.lighter};
    margin: 2em 0;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-size: ${typography.size.s3}px;
  }

  code {
    font-size: 17px;
  }

  .aside code {
    font-size: 15px;
  }
`;

class Highlight extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const domNode = ReactDOM.findDOMNode(this); // eslint-disable-line
    Prism.highlightAllUnder(domNode);
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <HighlightBlock {...rest}>
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </HighlightBlock>
    );
  }
}

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Highlight;
