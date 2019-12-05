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

const javascriptCodeWithWrappers = `<pre class="language-javascript"><code class="language-javascript">${javascriptCode}</code></pre>`;

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

const typescriptCodeWithWrappers = `<pre class="language-typescript"><code class="language-typescript">${typescriptCode}</code></pre>`;

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

export default {
  title: 'Design System/Highlight',
  component: Highlight,
};

export const allLanguages = () => (
  <Highlight>
    {[
      bashCodeWithWrappers,
      javascriptCodeWithWrappers,
      typescriptCodeWithWrappers,
      cssCodeWithWrappers,
      jsonCodeWithWrappers,
      yamlCodeWithWrappers,
    ].join('')}
  </Highlight>
);

allLanguages.story = {
  name: 'all languages',
};

export const bash = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="bash">{bashCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{bashCodeWithWrappers}</Highlight>
  </>
);

export const javascript = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="javascript">{javascriptCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{javascriptCodeWithWrappers}</Highlight>
  </>
);

export const typescript = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="typescript">{typescriptCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{typescriptCodeWithWrappers}</Highlight>
  </>
);

export const css = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="css">{cssCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{cssCodeWithWrappers}</Highlight>
  </>
);

export const json = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="json">{jsonCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{jsonCodeWithWrappers}</Highlight>
  </>
);

export const yaml = () => (
  <>
    <strong>Autoformat</strong>
    <Highlight language="yaml">{yamlCode}</Highlight>
    <strong>Pre-formatted</strong>
    <Highlight>{yamlCodeWithWrappers}</Highlight>
  </>
);

const SmallContainer = styled.div`
  max-width: 300px;
`;

export const wrapping = () => (
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

export const customStyling = () => <StyledHighlight language="json">{jsonCode}</StyledHighlight>;
