import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { ProgressBar } from './ProgressBar';

const onHoverIndex = action('hoverIndex');
const onClickIndex = action('clickIndex');

export default {
  title: 'New component/ProgressBar',
  parameters: {
    component: ProgressBar,
    assets: [
      'https://cl.ly/8fd39de9cb72/download/Screen%252520Shot%2525202020-02-10%252520at%2525203.29.29%252520PM.png',
    ],
  },
  decorators: [withKnobs, storyFn => <div style={{ margin: '3rem' }}>{storyFn()}</div>],
};

export const Inprogress25 = () => (
  <ProgressBar numerator={[{ bar: 'Testing', numeral: 25, status: 'testing' }]} denominator={100} />
);

Inprogress25.story = {
  name: 'inprogress 25',
};

export const Inprogress50 = () => (
  <ProgressBar numerator={[{ bar: 'Testing', numeral: 50, status: 'testing' }]} denominator={100} />
);

Inprogress50.story = {
  name: 'inprogress 50',
};

export const Inprogress75 = () => (
  <ProgressBar numerator={[{ bar: 'Testing', numeral: 75, status: 'testing' }]} denominator={100} />
);

Inprogress75.story = {
  name: 'inprogress 75',
};

export const MultipleWarning = () => (
  <ProgressBar
    selectable
    onHoverIndex={onHoverIndex}
    onClickIndex={onClickIndex}
    numerator={[
      { bar: 'Accepted', numeral: 0, status: 'positive' },
      { bar: 'Denied', numeral: 0, status: 'negative' },
      { bar: 'Unreviewed', numeral: 90, status: 'warning' },
    ]}
    denominator={90}
  />
);

MultipleWarning.story = {
  name: 'multiple warning',
};

export const MultiplePartial = () => (
  <ProgressBar
    selectable
    onHoverIndex={onHoverIndex}
    onClickIndex={onClickIndex}
    numerator={[
      { bar: 'Accepted', numeral: 50, status: 'positive' },
      { bar: 'Denied', numeral: 30, status: 'negative' },
      { bar: 'Unreviewed', numeral: 10, status: 'warning' },
    ]}
    denominator={90}
  />
);

MultiplePartial.story = {
  name: 'multiple partial',
};

export const MultiplePositive = () => (
  <ProgressBar
    selectable
    onHoverIndex={onHoverIndex}
    onClickIndex={onClickIndex}
    numerator={[
      { bar: 'Accepted', numeral: 37, status: 'positive' },
      { bar: 'Denied', numeral: 0, status: 'negative' },
      { bar: 'Unreviewed', numeral: 0, status: 'warning' },
    ]}
    denominator={37}
  />
);

MultiplePositive.story = {
  name: 'multiple positive',
};

export const Short = () => (
  <>
    <ProgressBar short />
    <br />
    <ProgressBar
      short
      numerator={[{ bar: 'Testing', numeral: 25, status: 'testing' }]}
      denominator={100}
    />
    <br />
    <ProgressBar
      short
      numerator={[{ bar: 'Testing', numeral: 50, status: 'testing' }]}
      denominator={100}
    />
    <br />
    <ProgressBar
      short
      numerator={[{ bar: 'Testing', numeral: 75, status: 'testing' }]}
      denominator={100}
    />
  </>
);

Short.story = {
  name: 'short',
};

export const Loading = () => <ProgressBar isLoading />;

Loading.story = {
  name: 'loading',
};

export const InprogressKnobs = () => {
  const label = 'Progress';
  const defaultValue = 73;
  const options = {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  };
  return (
    <ProgressBar
      numerator={[
        { bar: 'Testing', numeral: number(label, defaultValue, options), status: 'testing' },
      ]}
      denominator={100}
      short={boolean('Size', false)}
    />
  );
};

InprogressKnobs.story = {
  name: 'Interactive',
};
