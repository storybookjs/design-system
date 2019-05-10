import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { color, typography } from './shared/styles';

const Heading = styled.div`
  font-size: ${typography.size.m1}px;
  font-weight: ${typography.weight.black};
  margin-bottom: 1.5rem;
`;

const Swatch = styled.div`
  width: 100px;
  height: 50px;
`;

const SwatchHex = styled.div`
  margin-right: 30px;
  width: 80px;
`;

const SwatchGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const Swatches = styled.div``;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  > ${Swatches} {
    flex: 1;
    padding-right: 40px;
  }
`;

const Page = styled.div`
  padding: 3rem;
`;

const colorfulColors = [
  color.primary,
  color.secondary,
  color.orange,
  color.gold,
  color.green,
  color.seafoam,
  color.purple,
  color.ultraviolet,
];

const monochromeColors = [
  color.darkest,
  color.darker,
  color.dark,
  color.mediumdark,
  color.medium,
  color.mediumlight,
  color.light,
  color.lighter,
  color.lightest,
];

storiesOf('basics/color', module).add('all', () => (
  <Page>
    <ColorWrapper>
      <Swatches>
        <Heading>Color</Heading>
        {colorfulColors.map(swatch => (
          <SwatchGroup key={swatch}>
            <SwatchHex>{`${swatch}`}</SwatchHex>
            <Swatch style={{ background: swatch }} />
            <Swatch style={{ background: swatch, opacity: 0.8 }} />
            <Swatch style={{ background: swatch, opacity: 0.6 }} />
            <Swatch style={{ background: swatch, opacity: 0.3 }} />
          </SwatchGroup>
        ))}
      </Swatches>
      <Swatches>
        <Heading>Monochrome</Heading>
        {monochromeColors.map(swatch => (
          <SwatchGroup key={swatch}>
            <SwatchHex>{`${swatch}`}</SwatchHex>
            <Swatch style={{ background: swatch }} />
          </SwatchGroup>
        ))}
      </Swatches>
    </ColorWrapper>
  </Page>
));
