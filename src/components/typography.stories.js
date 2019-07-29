import React from 'react';
import styled from 'styled-components';

import { typography } from './shared/styles';

const Info = styled.div`
  margin-bottom: 3rem;
`;

const Heading1 = styled.div`
  font-size: ${typography.size.l3}px;
`;
const Heading2 = styled.div`
  font-size: ${typography.size.l2}px;
`;
const Heading3 = styled.div`
  font-size: ${typography.size.l1}px;
`;
const Heading4 = styled.div`
  font-size: ${typography.size.m3}px;
`;
const Heading5 = styled.div`
  font-size: ${typography.size.m3}px;
`;
const Heading6 = styled.div`
  font-size: ${typography.size.m1}px;
`;
const Heading7 = styled.div`
  font-size: ${typography.size.s3}px;
`;
const Heading8 = styled.div`
  font-size: ${typography.size.s2}px;
`;
const Heading9 = styled.div`
  font-size: ${typography.size.s1}px;
`;

const HeadingWrapper = styled.div`
  font-weight: ${typography.weight.black};
  > * {
    margin-bottom: 1rem;
  }
`;

const Type1 = styled.div`
  font-size: ${typography.size.s3}px;
`;
const Type2 = styled.div`
  font-size: ${typography.size.s2}px;
`;
const Type3 = styled.div`
  font-size: ${typography.size.s1}px;
`;

const TypeWrapper = styled.div`
  > * {
    margin-bottom: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1;
    padding-right: 40px;
  }
`;
const Page = styled.div`
  padding: 3rem;
`;

export default {
  title: 'Design System|typography',
};

export const all = () => (
  <Page>
    <Info>
      <div>
        <b>Font:</b> Nunito sans
      </div>
      <div>
        <b>Weights:</b> 400(normal), 600(bold), 900(black)
      </div>
    </Info>
    <Wrapper>
      <HeadingWrapper>
        <Heading1>48 heading</Heading1>
        <Heading2>40 heading</Heading2>
        <Heading3>32 heading</Heading3>
        <Heading4>28 heading</Heading4>
        <Heading5>24 heading</Heading5>
        <Heading6>20 heading</Heading6>
        <Heading7>16 heading</Heading7>
        <Heading8>14 heading</Heading8>
        <Heading9>12 heading</Heading9>
      </HeadingWrapper>
      <TypeWrapper>
        <Type1>16 The quick brown fox jumps over the lazy dog</Type1>
        <Type2>14 The quick brown fox jumps over the lazy dog</Type2>
        <Type3>12 The quick brown fox jumps over the lazy dog</Type3>
      </TypeWrapper>
    </Wrapper>
  </Page>
);
