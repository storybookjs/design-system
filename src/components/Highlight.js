/* eslint-disable react/no-danger, global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { color } from './shared/styles';

if (typeof document !== 'undefined') {
  global.Prism = Prism;
  require('prismjs/components/prism-bash');
  require('prismjs/components/prism-javascript');
  require('prismjs/components/prism-typescript');
  require('prismjs/components/prism-json');
  require('prismjs/components/prism-css');
  require('prismjs/components/prism-yaml');
}

const languages = ['bash', 'javascript', 'typescript', 'json', 'css', 'yaml'];

// Prism theme copied from 'prismjs/themes/prism.css.' -- without Webpack, the CSS
// cannot be imported easily and any app which pulls in the design system will
// need to handle the CSS loading itself. Therefore, it is easiest to just copy
// the theme over.
// prettier-ignore
const HighlightBlock = styled.div`
  /*
    Line below from: prismjs/themes/prism.css, with removal of overly specific
    selectors (primarily [class*=language-]) and selectors that collide with our
    global styling (primarly code & pre selectors).
  */
  .token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#a67f59;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}

  code, pre {
    color: ${color.darkest};
  }

  code {
    white-space: pre;
  }

  pre {
    padding: 11px 1rem;
    margin: 1rem 0;
    background: ${color.lighter};
    overflow: auto;
  }

  .language-bash .token.operator,
  .language-bash .token.function,
  .language-bash .token.builtin {
    color: ${color.darkest};
    background: none;
  }
`;

export class Highlight extends React.Component {
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
    const { children, language, ...rest } = this.props;
    const codeBlock = <div dangerouslySetInnerHTML={{ __html: children }} />;

    return (
      <HighlightBlock {...rest}>
        {language ? (
          <pre className={`language-${language}`}>
            <code className={`language-${language}`}>{codeBlock}</code>
          </pre>
        ) : (
          codeBlock
        )}
      </HighlightBlock>
    );
  }
}

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.oneOf(languages),
};

Highlight.defaultProps = {
  language: null,
};
