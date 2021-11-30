import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { ButtonToggle } from './ButtonToggle';
import { Chrome, Firefox, Ie as IE, Safari } from '../images';

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

OutlineButtonsSmall.storyName = 'outline buttons small';

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

OutlineThreeButtonsSmall.storyName = 'outline three buttons small';

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

PillWText.storyName = 'pill w/text';

export const PillWImage = () => (
  <ButtonToggle
    titles={[
      {
        title: <Chrome title="Chrome" />,
        tooltip: 'View Chrome',
      },
      {
        title: <Firefox title="Firefox" />,
        tooltip: 'View Firefox',
      },
      {
        title: <Safari title="Safari" />,
        tooltip: 'View Safari',
      },
      {
        title: <IE title="IE" />,
        tooltip: 'View IE',
      },
    ]}
    selectedIndex={1}
    onSelectIndex={onSelectIndex}
    appearance="pill"
  />
);

PillWImage.storyName = 'pill w/image';

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

Tab.storyName = 'tab';
