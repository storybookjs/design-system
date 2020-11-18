import { opacify, rgba } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';
import { Link } from './Link';
// @ts-ignore
import { TooltipNote } from './tooltip/TooltipNote';
// @ts-ignore
import WithTooltip from './tooltip/WithTooltip';

const activePadding = 20;
const inActivePadding = 15;

interface StyledButtonProps {
  isActive: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 8px ${inActivePadding}px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 150ms ease-out, color 150ms ease-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;

  font-size: ${typography.size.s1}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 1;

  color: ${color.dark};
  background-color: transparent;

  ${(props) =>
    props.isActive &&
    css`
      background-color: ${color.lightest};
      box-shadow: ${opacify(0.05, color.border)} 0 0 0 1px inset;
      color: ${color.darkest};
      padding-right: ${activePadding}px;
      padding-left: ${activePadding}px;
    `}
`;

const TooltipWrapper = styled(WithTooltip)`
  ${(props) =>
    props.isActive &&
    css`
      &:first-child {
        margin-right: -${activePadding - inActivePadding}px;
      }
      :not(:first-child):not(:last-child) {
        margin-left: -${activePadding - inActivePadding}px;
        margin-right: -${activePadding - inActivePadding}px;
      }
      &:last-child {
        margin-left: -${activePadding - inActivePadding}px;
      }
    `}

  &:first-child ${StyledButton} {
    padding-left: ${activePadding}px;
  }

  &:last-child ${StyledButton} {
    padding-right: ${activePadding}px;
  }

  &:hover ${StyledButton} {
    position: relative;
    z-index: 1;
  }
`;

const PillButton = styled(Link)`
  font-size: ${typography.size.s1}px;
  font-weight: ${typography.weight.bold};
  line-height: 1;
  display: inline-block;
  vertical-align: top;
  padding: 4px 8px;
  border-radius: 10px;
  &:hover {
    background: #e3f3ff;
    color: ${color.secondary};
    img {
      opacity: 1;
    }
  }
  img {
    height: 1rem;
    width: 1rem;
    opacity: 0.3;
    transition: all 150ms ease-out;
    margin: -3px 0;
  }
  ${(props) =>
    props.active &&
    css`
      background: #e3f3ff;
      color: ${color.secondary};
      img {
        opacity: 1;
      }
    `};
`;

const TabButton = styled(Link)`
  font-size: ${typography.size.s2 - 1}px;
  font-weight: ${typography.weight.bold};
  line-height: 20px;
  display: inline-block;
  padding: 10px 15px;
  &:hover {
    color: ${color.secondary};
  }
  ${(props) =>
    props.active &&
    css`
      color: ${color.secondary};
      box-shadow: ${color.secondary} 0 -3px 0 0 inset;
    `};
`;

interface WrapperProps {
  appearance: 'outline' | 'pill' | 'tab';
}

const Wrapper = styled.div<WrapperProps>`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  ${(props) =>
    props.appearance === 'outline' &&
    css`
      background-color: ${opacify(0.05, color.border)};
      border-radius: 3em;
    `}
`;

type Title = {
  title: string | React.ReactNode;
  tooltip: string;
};

interface ButtonToggleProps {
  titles: Title[];
  onSelectIndex: (index: number) => void;
  selectedIndex: number;
  appearance?: 'outline' | 'pill' | 'tab';
}

export function ButtonToggle({
  titles,
  onSelectIndex,
  selectedIndex,
  appearance,
  ...props
}: ButtonToggleProps) {
  return (
    <Wrapper appearance={appearance} {...props}>
      {titles.map(({ title, tooltip }, index) => {
        switch (appearance) {
          case 'pill':
            return (
              <PillButton
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                active={index === selectedIndex}
                onClick={() => onSelectIndex(index)}
                title={tooltip}
                secondary
                isButton
              >
                {title}
              </PillButton>
            );
          case 'tab':
            return (
              <TabButton
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                active={index === selectedIndex}
                onClick={() => onSelectIndex(index)}
                title={tooltip}
                secondary
                isButton
              >
                {title}
              </TabButton>
            );
          case 'outline':
            return (
              <TooltipWrapper
                tagName="span"
                key={typeof title === 'string' ? title : index}
                hasChrome={false}
                placement="bottom"
                trigger="hover"
                tooltip={<TooltipNote note={tooltip} />}
                isActive={index === selectedIndex}
              >
                <StyledButton
                  isActive={index === selectedIndex}
                  onClick={() => onSelectIndex(index)}
                >
                  {title}
                </StyledButton>
              </TooltipWrapper>
            );
          default:
            return 'this appearance is not supported';
        }
      })}
    </Wrapper>
  );
}

ButtonToggle.defaultProps = {
  appearance: 'outline',
};
