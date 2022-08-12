import { action } from '@storybook/addon-actions';
import React from 'react';

import { Cardinal } from './Cardinal';
import { Icon } from './Icon';

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
    <div style={{ background: '#171C23', display: 'inline-block' }}>
      <Cardinal size="small" count={0} text="Unreviewed" noPlural status="inverse" />
    </div>
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
    <div style={{ background: '#171C23', display: 'inline-block' }}>
      <Cardinal
        selectable
        onHover={onHover}
        onClick={onClick}
        size="small"
        count={14}
        text="Selectable"
        status="inverse"
        noPlural
      />
    </div>
    <br />
    <Cardinal isLoading />
    <Cardinal count={37} text="Stories" />
    <Cardinal count={12} countLink="http://github.com" text="Commits" />
    <div style={{ background: '#171C23', display: 'inline-block' }}>
      <Cardinal count={12} countLink="http://github.com" text="Commits" status="inverse" />
    </div>
    <Cardinal size="large" count={1} text="Story" />
    <Cardinal size="large" count={2} text="Story" />
  </div>
);

AllCardinals.storyName = 'all cardinals';

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

Alignment.storyName = 'control alignment';

export const SmallLoading = () => <Cardinal isLoading size="small" />;

SmallLoading.storyName = 'small loading';

export const SmallDefault = () => <Cardinal size="small" count={14} text="Changes" />;

SmallDefault.storyName = 'small default';

export const SmallPositive = () => (
  <Cardinal size="small" count={7} text="Accepted" noPlural status="positive" />
);

SmallPositive.storyName = 'small positive';

export const SmallNegative = () => (
  <Cardinal size="small" count={4} text="Denied" noPlural status="negative" />
);

SmallNegative.storyName = 'small negative';

export const SmallWarning = () => (
  <Cardinal size="small" count={3} text="Unreviewed" noPlural status="warning" />
);

SmallWarning.storyName = 'small warning';

export const SmallNeutral = () => (
  <Cardinal size="small" count={0} text="Unreviewed" noPlural status="neutral" />
);

SmallNeutral.storyName = 'small neutral';

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

SmallSelectable.storyName = 'small selectable';

export const LargeLoading = () => <Cardinal isLoading size="large" />;

LargeLoading.storyName = 'large loading';

export const LargeDefault = () => <Cardinal size="large" count={37} text="Stories" />;

LargeDefault.storyName = 'large default';

export const LargeLink = () => (
  <Cardinal size="large" count={12} countLink="http://github.com" text="Commits" />
);

LargeLink.storyName = 'large link';

export const LargeSingular = () => <Cardinal size="large" count={1} text="Story" />;

LargeSingular.storyName = 'large singular';

export const LargePlural = () => <Cardinal size="large" count={2} text="Story" />;

LargePlural.storyName = 'large plural';

export const WithIcon = () => (
  <Cardinal
    size="small"
    count={14}
    TextWrapper={() => (
      <span>
        Changes
        <Icon icon="question" aria-label="More info" />
      </span>
    )}
  />
);

WithIcon.storyName = 'with icon';
