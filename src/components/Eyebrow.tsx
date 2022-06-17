import React from 'react';
import { styled } from '@storybook/theming';
import { Badge } from './Badge';
import { text, color, spacing, breakpoints } from './shared/styles';
import { GithubButton } from './GithubButton';

const GithubButtonWrapper = styled.div`
  margin-left: ${spacing.padding.medium}px;
  flex: none;
`;

const EyebrowLink = styled.a<{ inverse?: boolean }>`
  ${text.storybookMedium}
  transition: transform 150ms ease-out;
  text-decoration: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }

  ${(props) => ({
    color: props.inverse ? color.lightest : color.darker,
  })}
`;

const EyebrowCallout = styled.a<{ inverse?: boolean }>`
  ${text.storybookMedium}
  transition: transform 150ms ease-out;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }

  ${(props) => ({ color: props.inverse ? color.lightest : color.dark })}
`;

const EyebrowContainer = styled.div<{
  inverse?: boolean;
}>`
  display: none;
  align-items: center;
  padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  background-color: ${(props) => (props.inverse ? 'rgba(0, 0, 0, 0.3)' : color.blueLight)};

  ${EyebrowLink} {
    margin-left: ${spacing.padding.small}px;
    margin-right: auto;
  }

  ${EyebrowCallout} {
    display: none;
    text-align: right;
  }

  @media (min-width: ${breakpoints[0]}px) {
    display: flex;
  }

  @media (min-width: ${breakpoints[2]}px) {
    ${EyebrowCallout} {
      display: inline-block;
    }
  }
`;

interface EyebrowProps {
  label: string;
  link: string;
  inverse?: boolean;
}

export const Eyebrow = ({ label, link, inverse }: EyebrowProps) => (
  <EyebrowContainer inverse={inverse}>
    <Badge status="positive">New</Badge>
    <EyebrowLink inverse={inverse} href={link}>
      {label} »
    </EyebrowLink>
    <EyebrowCallout inverse={inverse} href="https://www.chromatic.com/">
      Automate with Chromatic
    </EyebrowCallout>
    <GithubButtonWrapper>
      <GithubButton />
    </GithubButtonWrapper>
  </EyebrowContainer>
);
