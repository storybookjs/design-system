import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Clipboard } from './clipboard/Clipboard';
import { Highlight } from './Highlight';
import { color, spacing, typography } from './shared/styles';

import { LinkTabs } from './LinkTabs';

const Wrapper = styled.div``;

const Background = styled.div`
  background-color: #f7f9fc;
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  box-shadow: 0 2px 5px 0 ${color.border};
`;

const StyledHighlight = styled(Highlight)`
  position: relative;
  border-radius: ${spacing.borderRadius.small}px;
  overflow: hidden;

  code {
    font-size: ${typography.size.s2}px;
  }

  && pre[class*='language-'] {
    background-color: transparent;
    padding: 1em;
    padding-right: 2em;
    margin: 0;
    background: transparent;
  }
`;

const StyledClipboard = styled(Clipboard)`
  position: absolute;
  bottom: -1px;
  right: -1px;
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px 0 0 0;
  background-color: ${color.lightest};
  font-size: ${typography.size.s1}px;
  font-weight: ${typography.weight.bold};
  letter-spacing: 0;
  line-height: 14px;
  padding: 5px 13px;

  &:focus {
    box-shadow: ${color.secondary} 0 -3px 0 0 inset;
  }
`;

function Snippet({ snippet }) {
  const { PreSnippet: PreSnippetComponent, Snippet: SnippetComponent } = snippet;
  const snippetRef = useRef();
  const getCopyContent = () => snippetRef.current && snippetRef.current.textContent;

  return (
    <StyledHighlight withHTMLChildren={false}>
      {PreSnippetComponent && <PreSnippetComponent />}
      <div ref={snippetRef}>
        <SnippetComponent />
      </div>
      <StyledClipboard getCopyContent={getCopyContent}>
        {(copied) => (copied ? 'Copied' : 'Copy')}
      </StyledClipboard>
    </StyledHighlight>
  );
}

Snippet.propTypes = {
  snippet: PropTypes.shape({
    Snippet: PropTypes.elementType.isRequired,
    PreSnippet: PropTypes.elementType,
  }).isRequired,
};

const TabsWrapper = styled.div`
  background: ${color.lightest};
  border-top-left-radius: ${spacing.borderRadius.small}px;
  border-top-right-radius: ${spacing.borderRadius.small}px;
  border-bottom: 1px solid ${color.border};
`;

const StyledTabs = styled(LinkTabs)`
  && {
    transform: translateY(1px);
    margin: 0;
    padding: 0;

    li {
      margin: 0;
    }
  }
`;

function SnippetList({ snippets }) {
  const [activeSnippet, setActiveSnippet] = useState(snippets[0]);

  const tabItems = snippets.map((snippet, index) => {
    const isActive = activeSnippet.id === snippet.id;
    return {
      key: snippet.id,
      isActive,
      isButton: true,
      label: snippet.renderTabLabel({ isActive }),
      onClick: () => setActiveSnippet(snippets[index]),
    };
  });

  return (
    <>
      <TabsWrapper>
        <StyledTabs items={tabItems} />
      </TabsWrapper>

      {/* Re-render the Snippet using a unique key so the clipboard content changes */}
      <Snippet key={activeSnippet.id} snippet={activeSnippet} />
    </>
  );
}

SnippetList.propTypes = {
  snippets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      renderTabLabel: PropTypes.func.isRequired,
    }).isRequired
  ).isRequired,
};

export function CodeSnippets({ snippets, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Background>
        {snippets.length === 1 ? (
          <Snippet snippet={snippets[0]} />
        ) : (
          <SnippetList snippets={snippets} />
        )}
      </Background>
    </Wrapper>
  );
}

CodeSnippets.propTypes = {
  snippets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
