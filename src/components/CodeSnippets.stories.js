import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { CodeSnippets } from './CodeSnippets';
import { Highlight } from './Highlight';
import { javascriptCodeWithWrappers, typescriptCodeWithWrappers } from './Highlight.stories';

// The wrapper allows you to see the shadow in Chromatic
const Wrapper = styled.div`
  padding: 20px;
`;

/* eslint-disable react/no-danger */
function JavaScriptSnippetContent() {
  return <div dangerouslySetInnerHTML={{ __html: javascriptCodeWithWrappers }} />;
}

function TypescriptSnippetContent() {
  return <div dangerouslySetInnerHTML={{ __html: typescriptCodeWithWrappers }} />;
}
/* eslint-enable react/no-danger */

const snippets = [
  {
    Snippet: JavaScriptSnippetContent,
    id: '1',
    renderTabLabel: () => 'Label 1',
  },
  {
    Snippet: TypescriptSnippetContent,
    id: '2',
    renderTabLabel: () => 'Label 2',
  },
];

export default {
  component: CodeSnippets,
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
  title: 'Design System/CodeSnippets',
};

const Story = (args) => <CodeSnippets {...args} />;

export const Single = Story.bind({});
Single.args = {
  snippets: [snippets[0]],
};

export const Multiple = Story.bind({});
Multiple.args = {
  snippets,
};
