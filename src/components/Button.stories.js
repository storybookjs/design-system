import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import { Icon } from './Icon';
import { StoryLinkWrapper } from './StoryLinkWrapper';

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
  return <CustomButton onClick={action('button action click')} {...props} />;
}

export default {
  title: 'Design System|Button',
  component: Button,
};

export const allButtons = () => (
  <div>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary</Button>
    <Button appearance="outline">Outline</Button>
    <Button appearance="primaryOutline">Outline primary</Button>
    <Button appearance="secondaryOutline">Outline secondary</Button>
    <Button appearance="primary" isDisabled>
      Disabled
    </Button>
    <br />
    <Button appearance="primary" isLoading>
      Primary
    </Button>
    <Button appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button appearance="tertiary" isLoading>
      Tertiary
    </Button>
    <Button appearance="outline" isLoading>
      Outline
    </Button>
    <Button appearance="outline" isLoading loadingText="Custom...">
      Outline
    </Button>
    <br />
    <Button appearance="primary" size="small">
      Primary
    </Button>
    <Button appearance="secondary" size="small">
      Secondary
    </Button>
    <Button appearance="tertiary" size="small">
      Tertiary
    </Button>
    <Button appearance="outline" size="small">
      Outline
    </Button>
    <Button appearance="primary" isDisabled size="small">
      Disabled
    </Button>
    <Button appearance="outline" size="small" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button appearance="outline" size="small">
      <Icon icon="link" />
      Link
    </Button>
  </div>
);

allButtons.story = {
  name: 'all buttons',
};

export const buttonWrapper = () => (
  <div>
    <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary">
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary">
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary">
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline">
      Outline
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primaryOutline">
      Outline primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondaryOutline">
      Outline secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled>
      Disabled
    </Button>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" isLoading>
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" isLoading>
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" isLoading>
      Outline
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" isLoading loadingText="Custom...">
      Outline
    </Button>
    <br />
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" size="small">
      Primary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="secondary" size="small">
      Secondary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="tertiary" size="small">
      Tertiary
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
      Outline
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="primary" isDisabled size="small">
      Disabled
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button ButtonWrapper={ButtonWrapper} appearance="outline" size="small">
      <Icon icon="link" />
      Link
    </Button>
  </div>
);

buttonWrapper.story = {
  name: 'button wrapper',
};

export const anchorWrapper = () => (
  <div>
    <StoryLinkWrapper to="http://storybook.js.org">Original Link Wrapper</StoryLinkWrapper>
    <br />
    <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" href="http://storybook.js.org">
      Primary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="secondary" href="http://storybook.js.org">
      Secondary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="tertiary" href="http://storybook.js.org">
      Tertiary
    </Button>
    <Button ButtonWrapper={StoryLinkWrapper} appearance="outline" href="http://storybook.js.org">
      Outline
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primaryOutline"
      href="http://storybook.js.org"
    >
      Outline primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondaryOutline"
      href="http://storybook.js.org"
    >
      Outline secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isDisabled
      href="http://storybook.js.org"
    >
      Disabled
    </Button>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isLoading
      href="http://storybook.js.org"
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      isLoading
      href="http://storybook.js.org"
    >
      Secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      isLoading
      href="http://storybook.js.org"
    >
      Tertiary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      isLoading
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      isLoading
      loadingText="Custom..."
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <br />
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      size="small"
      href="http://storybook.js.org"
    >
      Primary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="secondary"
      size="small"
      href="http://storybook.js.org"
    >
      Secondary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="tertiary"
      size="small"
      href="http://storybook.js.org"
    >
      Tertiary
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      href="http://storybook.js.org"
    >
      Outline
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="primary"
      isDisabled
      size="small"
      href="http://storybook.js.org"
    >
      Disabled
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      containsIcon
      href="http://storybook.js.org"
    >
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button
      ButtonWrapper={StoryLinkWrapper}
      appearance="outline"
      size="small"
      href="http://storybook.js.org"
    >
      <Icon icon="link" />
      Link
    </Button>
  </div>
);

anchorWrapper.story = {
  name: 'anchor wrapper',
};
