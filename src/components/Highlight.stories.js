import React from 'react';
import styled from 'styled-components';
import { Highlight } from './Highlight';

const bashCode = `# Highlight bash:
npx install some-package-name
cd some-package-name`;

const bashCodeWithWrappers = `<pre class="language-bash"><code class="language-bash">${bashCode}</code></pre>`;

const javascriptCode = `// Highlight JavaScript:
import React from 'react'

const MyComponent = () => (
  &#x3C;div>My component renders all the things&#x3C;/div>
)

export default MyComponent
`;

export const javascriptCodeWithWrappers = `<pre class="language-javascript"><code class="language-javascript">${javascriptCode}</code></pre>`;

const jsxCode = javascriptCode;

const jsxCodeWithWrappers = `<pre class="language-jsx"><code class="language-jsx">${jsxCode}</code></pre>`;

const typescriptCode = `// Highlight Typescript:
import React from 'react'

interface InterfaceMyComponentProps {
  isCool: boolean;
}

const MyComponent: React.SFC&#x3C;InterfaceMyComponentProps> = ({ isCool }) => (
  &#x3C;div>My component isCool: {isCool}&#x3C;/div>
)

export default MyComponent
`;

export const typescriptCodeWithWrappers = `<pre class="language-typescript"><code class="language-typescript">${typescriptCode}</code></pre>`;

const tsxCode = typescriptCode;

const tsxCodeWithWrappers = `<pre class="language-tsx"><code class="language-tsx">${tsxCode}</code></pre>`;

const cssCode = `/* Highlight CSS: */
.someClass {
  position: relative;
}
`;

const cssCodeWithWrappers = `<pre class="language-css"><code class="language-css">${cssCode}</code></pre>`;

const jsonCode = `{
  "name": "@yourorg/package",
  "version": "0.0.1",
  "description": "A sweet package",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourorg/package.git"
  }
}`;

const jsonCodeWithWrappers = `<pre class="language-json"><code class="language-json">${jsonCode}</code></pre>`;

const yamlCode = `version: 2
jobs:
  build:
    docker:
      - image: circleci/node:8.10.0

    working_directory: ~/repo

    steps:
      - checkout
`;

const yamlCodeWithWrappers = `<pre class="language-yaml"><code class="language-yaml">${yamlCode}</code></pre>`;

const markdownCode = `import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';

&#x3C;Meta title="MDX/Checkbox" component={Checkbox} />

# This is a level 1 heading

## This is a level 2 heading

### This is a level 3 heading

#### This is a level 4 heading

This is a paragraph

| Table | Heading |
|-------|---------|
| row   | value   |

export const test = () => &#x3C;Derp prop="test" />
`;

const markdownCodeWithWrappers = `<pre class="language-markdown"><code class="language-markdown">${markdownCode}</code></pre>`;

export default {
  title: 'Highlight',
  component: Highlight,
  excludeStories: ['javascriptCodeWithWrappers', 'typescriptCodeWithWrappers'],
};

export const Basic = (args) => <Highlight {...args} />;
Basic.args = {};

export const Bash = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="bash">{bashCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{bashCodeWithWrappers}</Highlight>
  </>
);

export const Javascript = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="javascript">{javascriptCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{javascriptCodeWithWrappers}</Highlight>
  </>
);

export const JSX = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="jsx">{jsxCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{jsxCodeWithWrappers}</Highlight>
  </>
);

export const Typescript = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="typescript">{typescriptCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{typescriptCodeWithWrappers}</Highlight>
  </>
);

export const TSX = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="tsx">{tsxCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{tsxCodeWithWrappers}</Highlight>
  </>
);

export const CSS = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="css">{cssCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{cssCodeWithWrappers}</Highlight>
  </>
);

export const JSON = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="json">{jsonCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{jsonCodeWithWrappers}</Highlight>
  </>
);

export const YAML = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="yaml">{yamlCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{yamlCodeWithWrappers}</Highlight>
  </>
);

export const Markdown = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="markdown">{markdownCode}</Highlight>
    <strong>Autoformat w/ MDX Language</strong>
    <Highlight language="mdx">{markdownCode}</Highlight>
    <strong>Autoformat w/ MD Language</strong>
    <Highlight language="md">{markdownCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{markdownCodeWithWrappers}</Highlight>
  </>
);

const SmallContainer = styled.div`
  max-width: 300px;
`;

export const Wrapping = () => (
  <SmallContainer>
    <Highlight language="javascript">{javascriptCode}</Highlight>
  </SmallContainer>
);

const StyledHighlight = styled(Highlight)`
  code,
  pre {
    font-size: 16px;
  }
`;

export const CustomStyling = () => <StyledHighlight language="json">{jsonCode}</StyledHighlight>;

/* eslint-disable */
function WrapperComponent({ children }) {
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
}
/* eslint-enable */

export const WithComponentChildren = () => (
  <Highlight withHTMLChildren={false}>
    <WrapperComponent>{javascriptCodeWithWrappers}</WrapperComponent>
  </Highlight>
);
