import React from 'react';
import styled from 'styled-components';
import { Highlight } from './Highlight';

const bashCode = `# Highlight bash:
npx install some-package-name
cd some-package-name`;

const javascriptCode = `// Highlight JavaScript:
import React from 'react';

const MyComponent = () => (
  <div>My component renders all the things</div>
);

export default MyComponent;
`;

const typescriptCode = `// Highlight Typescript:
import React from 'react';

interface InterfaceMyComponentProps {
  isCool: boolean;
}

const MyComponent: React.SFC<InterfaceMyComponentProps> = ({ isCool }) => (
  <div>My component isCool: {isCool}</div>
);

export default MyComponent;
`;

const cssCode = `/* Highlight CSS: */
.someClass {
  position: relative;
}
`;

const jsonCode = `{
  "name": "@yourorg/package",
  "version": "0.0.1",
  "description": "A sweet package",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourorg/package.git"
  }
}`;

const yamlCode = `version: 2
jobs:
  build:
    docker:
      - image: circleci/node:8.10.0

    working_directory: ~/repo

    steps:
      - checkout
`;

export default {
  title: 'Design System/Highlight',
  component: Highlight,
};

export const bash = () => (
  <Highlight format={false} language="bash">
    {bashCode}
  </Highlight>
);
export const javascript = () => (
  <Highlight format={false} language="javascript">
    {javascriptCode}
  </Highlight>
);
export const typescript = () => (
  <Highlight format={false} language="typescript">
    {typescriptCode}
  </Highlight>
);
export const css = () => (
  <Highlight format={false} language="css">
    {cssCode}
  </Highlight>
);
export const json = () => (
  <Highlight format={false} language="json">
    {jsonCode}
  </Highlight>
);
export const yaml = () => (
  <Highlight format={false} language="yaml">
    {yamlCode}
  </Highlight>
);

const SmallContainer = styled.div`
  max-width: 300px;
`;

export const wrapping = () => (
  <SmallContainer>
    <Highlight format={false} language="javascript">
      {javascriptCode}
    </Highlight>
  </SmallContainer>
);

const StyledHighlight = styled(Highlight)`
  code,
  pre {
    font-size: 16px;
  }
`;

export const customStyling = () => (
  <StyledHighlight format={false} language="json">
    {jsonCode}
  </StyledHighlight>
);
