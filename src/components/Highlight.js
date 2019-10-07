/* eslint-disable react/no-danger */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index';
import PropTypes from 'prop-types';
import { color, typography } from './shared/styles';

const languages = ['bash', 'javascript', 'typescript', 'json', 'css'];
loadLanguages(languages);

// Prism theme copied from 'prismjs/themes/prism.css.' -- without Webpack, the CSS
// cannot be imported easily and any app which pulls in the design system will
// need to handle the CSS loading itself. Therefore, it is easiest to just copy
// the theme over.
// prettier-ignore
const HighlightBlock = styled.div`
  /*
    Line below from: prismjs/themes/prism.css, with removal of overly specific
    selectors (primarily [class*=language-]) so they are easier to override.
  */
  code,pre{color:#000;background:0 0;text-shadow:0 1px #fff;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code ::-moz-selection,code::-moz-selection,pre ::-moz-selection,pre::-moz-selection{text-shadow:none;background:#b3d4fc}code ::selection,code::selection,pre ::selection,pre::selection{text-shadow:none;background:#b3d4fc}@media print{code,pre{text-shadow:none}}pre{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code,pre{background:#f5f2f0}:not(pre)>code{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#a67f59;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2 - 1}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    vertical-align: baseline;
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;
    background: ${color.lighter};
    border-radius: 3px;
    margin: 1rem 0;
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
