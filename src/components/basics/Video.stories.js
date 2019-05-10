import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Video from './Video';

const VideoWrapper = styled('div')`
  width: 45%
  margin: 0px auto;
`;

storiesOf('basics/Video', module).add(
  'video',
  () => (
    <VideoWrapper>
      <Video
        src="/videos/storybook-workflow-build-optimized-lg.mp4"
        alt="storybook example video"
        shouldChangeSize
      />
    </VideoWrapper>
  ),
  {
    chromatic: { disable: true },
  }
);
