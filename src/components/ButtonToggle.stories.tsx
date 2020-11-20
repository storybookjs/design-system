import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { ButtonToggle } from './ButtonToggle';
// @ts-ignore
import chromeImg from '../images/chrome.svg';
// @ts-ignore
import firefoxImg from '../images/firefox.svg';
// @ts-ignore
import ieImg from '../images/ie.svg';
// @ts-ignore
import safariImg from '../images/safari.svg';

const onSelectIndex = action('onSelectIndex');

export default {
  title: 'ButtonToggle',
};

export const OutlineButtonsSmall = () => {
  const [index, setIndex] = useState(1);

  return (
    <ButtonToggle
      titles={[
        { title: '1 up', tooltip: '1 up [1]' },
        { title: '2 up', tooltip: '2 up [2]' },
      ]}
      selectedIndex={index}
      onSelectIndex={(idx) => setIndex(idx)}
    />
  );
};

OutlineButtonsSmall.story = {
  name: 'outline buttons small',
};

export const OutlineThreeButtonsSmall = () => {
  const [index, setIndex] = useState(1);

  return (
    <ButtonToggle
      titles={[
        { title: '1 up', tooltip: '1 up [1]' },
        { title: '2 up', tooltip: '2 up [2]' },
        { title: 'Diff', tooltip: 'Diff [3]' },
      ]}
      selectedIndex={index}
      onSelectIndex={(idx) => setIndex(idx)}
    />
  );
};

OutlineThreeButtonsSmall.story = {
  name: 'outline three buttons small',
};

export const PillWText = () => (
  <ButtonToggle
    titles={[
      { title: '360', tooltip: 'View at 360px' },
      { title: '764', tooltip: 'View at 764px' },
      { title: '1024', tooltip: 'View at 1024px' },
    ]}
    selectedIndex={1}
    onSelectIndex={onSelectIndex}
    appearance="pill"
  />
);

PillWText.story = {
  name: 'pill w/text',
};

export const PillWImage = () => (
  <ButtonToggle
    titles={[
      {
        title: <img src={chromeImg} alt="Chrome" />,
        tooltip: 'View Chrome',
      },
      {
        title: <img src={firefoxImg} alt="Firefox" />,
        tooltip: 'View Firefox',
      },
      {
        title: <img src={ieImg} alt="Safari" />,
        tooltip: 'View Safari',
      },
      {
        title: <img src={safariImg} alt="IE" />,
        tooltip: 'View IE',
      },
    ]}
    selectedIndex={1}
    onSelectIndex={onSelectIndex}
    appearance="pill"
  />
);

PillWImage.story = {
  name: 'pill w/image',
};

export const Tab = () => (
  <ButtonToggle
    titles={[
      { title: 'Canvas', tooltip: 'View your story' },
      { title: 'Snapshot', tooltip: 'View a screenshot of your story' },
      { title: 'Docs', tooltip: 'View docs for this story' },
    ]}
    selectedIndex={1}
    onSelectIndex={onSelectIndex}
    appearance="tab"
  />
);

Tab.story = {
  name: 'tab',
};
