/* eslint-disable react/no-danger */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import { color, typography } from './shared/styles';

// Prism theme copied from 'prismjs/themes/prism.css.' -- without Webpack, the CSS
// cannot be imported easily and any app which pulls in the design system will
// need to handle the CSS loading itself. Therefore, it is easiest to just copy
// the theme over.
// prettier-ignore
const HighlightBlock = styled.div`
  /* Theme below from: prismjs/themes/prism.css */
  code[class*=language-],pre[class*=language-]{color:#000;background:0 0;text-shadow:0 1px #fff;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#a67f59;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}

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
