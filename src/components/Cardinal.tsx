import pluralize from 'pluralize';
import { darken } from 'polished';
import React, { FunctionComponent } from 'react';
import { styled, css } from '@storybook/theming';
import { Link } from './Link';
import { background, color, typography, spacing } from './shared/styles';
import { inlineGlow } from './shared/animation';

type Status = 'default' | 'positive' | 'negative' | 'warning' | 'neutral' | 'link' | 'inverse';
type Size = 'small' | 'large';
type Alignment = 'left' | 'center' | 'right';

interface CountProps {
  status: Status;
}

const Count = styled.div<CountProps>`
  color: ${color.darker};
  display: block;

  ${(props) =>
    props.status === 'positive' &&
    css`
      color: ${color.positive};
    `};
  ${(props) =>
    props.status === 'negative' &&
    css`
      color: ${color.negative};
    `};
  ${(props) =>
    props.status === 'warning' &&
    css`
      color: ${color.warning};
    `};
  ${(props) =>
    props.status === 'neutral' &&
    css`
      color: ${color.dark};
    `};
  ${(props) =>
    props.status === 'link' &&
    css`
      color: ${color.secondary};
      text-decoration: none;
      &:hover {
        color: ${darken(0.07, color.secondary)};
      }
      &:active {
        color: ${darken(0.1, color.secondary)};
      }
    `};
  ${(props) =>
    props.status === 'inverse' &&
    css`
      color: rgba(255, 255, 255, 0.7);
    `};

  span {
    display: inline-block;
  }
`;

const Text = styled.div`
  span {
    display: inline-block;
  }
`;

interface CardinalInnerProps {
  isLoading: boolean;
  selectable: boolean;
  active: boolean;
  size: Size;
  alignment: Alignment;
  inverse?: boolean;
}

const CardinalInner = styled.div<CardinalInnerProps>`
  display: inline-block;
  vertical-align: top;
  padding: 8px 12px;
  border-radius: ${spacing.borderRadius.small}px;
  text-align: ${(props) => props.alignment};

  svg {
    width: 12px;
    height: 12px;
    margin: 1px 0 0 4px;
    vertical-align: top;
    color: inherit;
  }

  ${(props) =>
    props.isLoading &&
    css`
      ${Count}, ${Text} {
        overflow: hidden;

        > span,
        a {
          ${inlineGlow};
        }

        img {
          opacity: 0;
        }
      }
    `};

  ${(props) =>
    props.selectable &&
    css`
      cursor: pointer;

      &:hover {
        background: ${background.app};
      }
    `};

  ${(props) =>
    props.selectable &&
    (props.inverse
      ? css`
          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        `
      : css`
          cursor: pointer;

          &:hover {
            background: ${background.app};
          }
        `)};

  ${Count} {
    font-weight: ${(props) =>
      props.size === 'small' ? typography.weight.bold : typography.weight.regular};
    font-size: ${(props) => (props.size === 'small' ? typography.size.s2 : typography.size.m3)}px;
    line-height: ${(props) => (props.size === 'small' ? typography.size.s3 : typography.size.m3)}px;
    margin-bottom: ${(props) => (props.size === 'small' ? 2 : 4)}px;
  }

  ${Text} {
    color: ${(props) => (props.inverse ? 'rgba(255, 255, 255, 0.5)' : color.dark)};
    font-size: ${(props) => (props.size === 'small' ? typography.size.s1 : typography.size.s2)}px;
    line-height: ${(props) => (props.size === 'small' ? typography.size.s2 : typography.size.m1)}px;
    clear: both;
  }

  ${(props) =>
    props.inverse &&
    css`
      a {
        color: rgba(255, 255, 255, 0.7);
      }
    `}
`;

export interface CardinalProps {
  isLoading?: boolean;
  selectable?: boolean;
  active?: boolean;
  size?: Size;
  onHover?: (e: boolean) => void;
  onClick?: React.FormEventHandler<HTMLInputElement>;
  count: React.ReactNode;
  countLink?: string;
  text: string;
  status?: Status;
  noPlural?: boolean;
  CountWrapper?: React.ElementType;
  TextWrapper?: React.ElementType;
  alignment?: Alignment;
}

export const Cardinal: FunctionComponent<CardinalProps> = ({
  isLoading,
  selectable,
  onHover,
  onClick,
  active,
  size,
  count,
  countLink,
  text,
  noPlural,
  status,
  CountWrapper,
  TextWrapper,
  alignment,
  ...props
}) => {
  let countValue = count;
  if (countLink) {
    countValue = (
      <Link href={countLink} inverse={status === 'inverse'}>
        {count}
      </Link>
    );
  }
  let events = {};
  if (selectable) {
    events = {
      onMouseEnter: () => onHover(true),
      onMouseLeave: () => onHover(false),
      onClick,
    };
  }

  return (
    <CardinalInner
      isLoading={isLoading}
      selectable={selectable}
      active={active}
      size={size}
      alignment={alignment}
      inverse={status === 'inverse'}
      {...events}
      {...props}
    >
      <Count status={status}>
        <CountWrapper>{countValue}</CountWrapper>
      </Count>
      <Text>
        <TextWrapper>
          {!noPlural && typeof count === 'number' ? pluralize(text, count) : text}
        </TextWrapper>
      </Text>
    </CardinalInner>
  );
};

const DefaultWrapper: FunctionComponent = ({ children }) => <span>{children}</span>;

Cardinal.defaultProps = {
  isLoading: false,
  selectable: false,
  onHover: () => 0,
  onClick: () => 0,
  active: false,
  size: 'large' as Size,
  status: 'default' as Status,
  count: '000',
  countLink: null,
  noPlural: false,
  text: 'loading',
  CountWrapper: DefaultWrapper,
  TextWrapper: DefaultWrapper,
  alignment: 'left' as Alignment,
};
