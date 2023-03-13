import React, { ComponentProps, FC } from 'react';
import { styled, css } from '@storybook/theming';
import type { StyledComponent } from '@storybook/theming';

import { Link } from './Link';
import { color, typography } from './shared/styles';
import { inlineGlow } from './shared/animation';

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;

  li {
    list-style: none;
  }
`;

interface TabProps {
  isLoading?: boolean;
  isActive?: boolean;
}

const Tab: StyledComponent<TabProps> = styled(Link)<TabProps>`
  padding: 10px 15px;
  line-height: 20px;
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
  color: ${color.mediumdark};
  white-space: nowrap;

  &:hover {
    color: ${color.secondary};
  }

  ${(props) =>
    props.isLoading &&
    css`
      cursor: progress !important;
      > * {
        ${inlineGlow};
      }
    `}

  ${(props) =>
    props.isActive &&
    !props.isLoading &&
    css`
      color: ${color.secondary};
      box-shadow: ${color.secondary} 0 -3px 0 0 inset;
    `};
`;

type ItemProps = {
  key: string;
  label: string;
} & ComponentProps<typeof Tab>;

interface Props {
  isLoading?: boolean;
  items: ItemProps[];
}

export const LinkTabs: FC<Props & ComponentProps<typeof Wrapper>> = ({
  isLoading = false,
  items = [],
  ...props
}) => (
  <Wrapper {...props}>
    {items.map(({ key, label, ...item }) => (
      <li key={key}>
        <Tab isLoading={isLoading} {...item}>
          {label}
        </Tab>
      </li>
    ))}
  </Wrapper>
);
