import { action } from '@storybook/addon-actions';
import React from 'react';

import { Cardinal } from './Cardinal';

const onHover = action('hover');
const onClick = action('click');

export default {
  title: 'Cardinal',
};

export const AllCardinals = () => (
  <div style={{ background: 'white' }}>
    <Cardinal isLoading size="small" />
    <Cardinal size="small" count={14} text="Changes" />
    <Cardinal size="small" count={7} text="Accepted" noPlural status="positive" />
    <Cardinal size="small" count={4} text="Denied" noPlural status="negative" />
    <Cardinal size="small" count={3} text="Unreviewed" noPlural status="warning" />
    <Cardinal size="small" count={0} text="Unreviewed" noPlural status="neutral" />
    <br />
    <Cardinal
      selectable
      onHover={onHover}
      onClick={onClick}
      active
      size="small"
      count={14}
      text="Selectable"
      noPlural
    />
    <Cardinal
      selectable
      onHover={onHover}
      onClick={onClick}
      size="small"
      count={14}
      text="Selectable"
      noPlural
    />
    <Cardinal
      selectable
      onHover={onHover}
      onClick={onClick}
      size="small"
      count={14}
      text="Selectable"
      noPlural
    />
    <br />
    <Cardinal isLoading />
    <Cardinal count={37} text="Stories" />
    <Cardinal count={12} countLink="http://github.com" text="Commits" />
    <Cardinal size="large" count={1} text="Story" />
    <Cardinal size="large" count={2} text="Story" />
  </div>
);

AllCardinals.story = {
  name: 'all cardinals',
};

export const Alignment = () => (
  <div style={{ background: 'white' }}>
    <Cardinal size="small" count={14} text="Changes" alignment="left" />
    <Cardinal size="small" count={14} text="Changes" alignment="center" />
    <Cardinal size="small" count={14} text="Changes" alignment="right" />
    <br />
    <Cardinal size="large" count={2} text="Story" alignment="left" />
    <Cardinal size="large" count={2} text="Story" alignment="center" />
    <Cardinal size="large" count={2} text="Story" alignment="right" />
  </div>
);

Alignment.story = {
  name: 'control alignment',
};

export const SmallLoading = () => <Cardinal isLoading size="small" />;

SmallLoading.story = {
  name: 'small loading',
};

export const SmallDefault = () => <Cardinal size="small" count={14} text="Changes" />;

SmallDefault.story = {
  name: 'small default',
};

export const SmallPositive = () => (
  <Cardinal size="small" count={7} text="Accepted" noPlural status="positive" />
);

SmallPositive.story = {
  name: 'small positive',
};

export const SmallNegative = () => (
  <Cardinal size="small" count={4} text="Denied" noPlural status="negative" />
);

SmallNegative.story = {
  name: 'small negative',
};

export const SmallWarning = () => (
  <Cardinal size="small" count={3} text="Unreviewed" noPlural status="warning" />
);

SmallWarning.story = {
  name: 'small warning',
};

export const SmallNeutral = () => (
  <Cardinal size="small" count={0} text="Unreviewed" noPlural status="neutral" />
);

SmallNeutral.story = {
  name: 'small neutral',
};

export const SmallSelectable = () => (
  <div>
    <Cardinal
      selectable
      onHover={onHover}
      onClick={onClick}
      active
      size="small"
      count={14}
      text="Selectable"
      noPlural
    />
    <Cardinal
      selectable
      onHover={onHover}
      onClick={onClick}
      size="small"
      count={14}
      text="Selectable"
      noPlural
    />
  </div>
);

SmallSelectable.story = {
  name: 'small selectable',
};

export const LargeLoading = () => <Cardinal isLoading size="large" />;

LargeLoading.story = {
  name: 'large loading',
};

export const LargeDefault = () => <Cardinal size="large" count={37} text="Stories" />;

LargeDefault.story = {
  name: 'large default',
};

export const LargeLink = () => (
  <Cardinal size="large" count={12} countLink="http://github.com" text="Commits" />
);

LargeLink.story = {
  name: 'large link',
};

export const LargeSingular = () => <Cardinal size="large" count={1} text="Story" />;

LargeSingular.story = {
  name: 'large singular',
};

export const LargePlural = () => <Cardinal size="large" count={2} text="Story" />;

LargePlural.story = {
  name: 'large plural',
};
