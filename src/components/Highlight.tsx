/* eslint-disable react/no-danger, global-require */
import React, { ComponentProps, FunctionComponent, useEffect, useRef } from 'react';
import { styled } from '@storybook/theming';
import Prism from 'prismjs';
import { color } from './shared/styles';

if (typeof document !== 'undefined') {
  // @ts-ignore
  global.Prism = Prism;
  // @ts-ignore
  require('prismjs/components/prism-bash');
  // @ts-ignore
  require('prismjs/components/prism-javascript');
  // @ts-ignore
  require('prismjs/components/prism-typescript');
  // @ts-ignore
  require('prismjs/components/prism-json');
  // @ts-ignore
  require('prismjs/components/prism-css');
  // @ts-ignore
  require('prismjs/components/prism-yaml');
  // @ts-ignore
  require('prismjs/components/prism-markdown');
  // @ts-ignore
  require('prismjs/components/prism-jsx');
  // @ts-ignore
  require('prismjs/components/prism-tsx');
}

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

  .language-markdown .token.title,
  .language-md .token.title {
    color: #dd4a68;
  }

  .language-markdown .token.table-header,
  .language-md .token.table-header {
    color: #07a;
  }
`;

const languageMap = {
  mdx: 'markdown',
  bash: 'bash',
  javascript: 'javascript',
  typescript: 'typescript',
  json: 'json',
  css: 'css',
  yaml: 'yaml',
  markdown: 'markdown',
  md: 'md',
  jsx: 'jsx',
  tsx: 'tsx',
} as const;

interface Props {
  language?: keyof typeof languageMap;
  withHTMLChildren?: boolean;
}

export const Highlight: FunctionComponent<Props & ComponentProps<typeof HighlightBlock>> = ({
  children,
  language: inputLanguage,
  withHTMLChildren = true,
  ...rest
}) => {
  const language = languageMap[inputLanguage] || inputLanguage;
  const codeBlock = withHTMLChildren ? (
    <div dangerouslySetInnerHTML={{ __html: children as string }} />
  ) : (
    children
  );
  const domNode = useRef<HTMLDivElement>();

  useEffect(() => {
    if (domNode.current) {
      Prism.highlightAllUnder(domNode.current);
    }
  });

  return (
    <HighlightBlock {...rest} ref={domNode}>
      {language ? (
        <pre className={`language-${language}`}>
          <code className={`language-${language}`}>{codeBlock}</code>
        </pre>
      ) : (
        codeBlock
      )}
    </HighlightBlock>
  );
};
