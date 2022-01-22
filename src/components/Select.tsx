import React, { ComponentProps, FC, FunctionComponent, ReactNode } from 'react';
import { styled, css } from '@storybook/theming';
import { color, typography, spacing } from './shared/styles';
import { jiggle } from './shared/animation';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

interface SelectContainerProps {
  appearance?: 'default' | 'tertiary';
}

const SelectContainer = styled.div<SelectContainerProps>`
  ${(props) =>
    props.appearance === 'tertiary' &&
    css`
      display: inline-flex;
    `}
`;

const Label = styled.label`
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s2}px;
`;

interface LabelProps {
  hideLabel: boolean;
}

const LabelWrapper = styled.div<LabelProps>`
  margin-bottom: 0.5em;

  ${(props) =>
    props.hideLabel &&
    css`
      border: 0px !important;
      clip: rect(0 0 0 0) !important;
      -webkit-clip-path: inset(100%) !important;
      clip-path: inset(100%) !important;
      height: 1px !important;
      overflow: hidden !important;
      padding: 0px !important;
      position: absolute !important;
      white-space: nowrap !important;
      width: 1px !important;
    `}
`;

interface SelectProps {
  disabled?: boolean;
  inProgress?: boolean;
}

const Selector = styled.select<SelectProps>`
  appearance: none;
  border: 0;
  border-radius: 0;
  font-size: ${typography.size.s2}px;
  line-height: 20px;
  padding: 10px 3em 10px 15px;
  position: relative;
  outline: none;
  width: 100%;
  margin: 0;
  display: block;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}

  ${(props) =>
    props.inProgress &&
    css`
      cursor: progress;
    `}
`;

const OptionWrapper = styled.option``;

const Arrow = styled((props: Omit<ComponentProps<typeof Icon>, 'icon'>) => (
  <Icon {...props} icon="arrowdown" />
))``;

const SelectIcon = styled(Icon)``;

const SelectSpinner = styled(Spinner)`
  right: 16px;
  left: auto;
  z-index: 2;
`;

const SelectError = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  transition: all 300ms cubic-bezier(0.175, 0.885, 0.335, 1.05);
  font-size: ${typography.size.s1}px;
  font-family: ${typography.type.primary};

  color: ${color.negative};
  line-height: 40px;
  padding-right: 2.75em;
  pointer-events: none;
`;

interface WrapperProps {
  hasIcon: boolean;
  error: any;
  appearance?: 'default' | 'tertiary';
  disabled?: boolean;
  inProgress?: boolean;
  stackLevel?: 'top' | 'middle' | 'bottom';
}

const getStackLevelStyling = (props: Pick<Props, 'stackLevel'>) => {
  const radius = 4;

  const stackLevelDefinedStyling = css`
    position: relative;

    &:focus {
      z-index: 2;
    }
  `;

  switch (props.stackLevel) {
    case 'top':
      return css`
        border-top-left-radius: ${radius}px;
        border-top-right-radius: ${radius}px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        ${stackLevelDefinedStyling}
      `;
    case 'middle':
      return css`
        border-radius: 0px;
        margin-top: -1px;
        ${stackLevelDefinedStyling}
      `;
    case 'bottom':
      return css`
        border-bottom-left-radius: ${radius}px;
        border-bottom-right-radius: ${radius}px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        margin-top: -1px;
        ${stackLevelDefinedStyling}
      `;
    default:
      return css`
        border-radius: ${radius}px;
      `;
  }
};

const SelectWrapper = styled.span<WrapperProps>`
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 100%;

  &:before {
    content: '';
    bottom: 1px;
    right: 1px;
    top: 1px;
    width: 2em;
    margin-left: 1px;
    position: absolute;
    z-index: 3;
    pointer-events: none;
  }

  ${Arrow} {
    position: absolute;
    z-index: 3;
    pointer-events: none;
    height: 12px;
    margin-top: -6px;
    right: 12px;
    top: 50%;

    path {
      fill: ${color.mediumdark};
    }
  }

  ${Selector} {
    box-shadow: ${color.border} 0 0 0 1px inset;
    ${(props) => getStackLevelStyling(props)}
  }
  ${Selector}:focus {
    box-shadow: ${color.secondary} 0 0 0 1px inset;
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}

  ${Selector} {
    background-color: ${color.lightest};
    color: ${color.darkest};
  }

  ${(props) =>
    props.appearance === 'tertiary' &&
    `
      width: auto;
      height: auto;

      ${Selector} {
        color: ${color.darkest};
        background-color: transparent;
        padding: 0 1.5em 0 0;
        text-decoration: none;
        box-shadow: none;
      }
      &:before {
        content: none;
      }
      ${Arrow} {
        right: 0;
        top: 10px;
      }
      ${SelectSpinner} {
        right: 0;
      }
      ${SelectIcon} {
        left: 0;
        top: 10px;
      }
      ${SelectError} {
        position: relative;
        line-height: 20px;
        margin-top: 8px;
      }
    `}

  ${(props) =>
    props.hasIcon &&
    `
      ${Selector} {
        padding-left: ${props.appearance === 'tertiary' ? '20px' : '40px'};
      }

      ${Selector} + ${SelectIcon} {
        transition: all 150ms ease-out;
        position: absolute;
        top: ${props.appearance === 'tertiary' ? '10px' : '50%'};
        left: ${props.appearance === 'tertiary' ? 0 : '0.8em'};
        height: 1em;
        width: 1em;
        margin-top: -0.5em;
        z-index: 2;

        path {
          fill: ${color.mediumdark};
        }
      }
      ${Selector}:focus + ${SelectIcon} path {
        fill: ${color.darker};
      }
    `}

  ${(props) =>
    props.error &&
    `
      ${Selector} {
        box-shadow: ${color.red} 0 0 0 1px inset;
        &:focus {
          box-shadow: ${color.red} 0 0 0 1px inset !important;
        }
      }

      ${Selector} + ${SelectIcon} {
        ${css`
          animation: ${jiggle} 700ms ease-out;
        `}
        path {
          fill: ${color.red};
        }
      }
    `}
`;

interface OptionProps {
  label: string;
  value: string;
}

const Option: FunctionComponent<OptionProps> = ({ label, value }) => {
  return <OptionWrapper value={value}>{label}</OptionWrapper>;
};

interface Props {
  options: OptionProps[];
  value: string;
  appearance?: 'default' | 'tertiary';
  label: string;
  hideLabel?: boolean;
  error?: ReactNode;
  icon?: ComponentProps<typeof Icon>['icon'];
  className?: string;
  inProgress?: boolean;
  disabled?: boolean;
  stackLevel?: 'top' | 'middle' | 'bottom';
}

export const Select: FunctionComponent<Props & ComponentProps<typeof Selector>> = ({
  id,
  options = [{ label: 'Loading', value: 'loading' }],
  value = 'loading',
  appearance = 'default',
  label,
  hideLabel = false,
  error,
  icon,
  className,
  inProgress = false,
  disabled = false,
  stackLevel = undefined,
  ...other
}) => {
  let spinnerId;
  let errorId;
  let ariaDescribedBy;
  if (inProgress) {
    spinnerId = `${id}-in-progress`;
    ariaDescribedBy = spinnerId;
  }
  if (error) {
    errorId = `${id}-error`;
    ariaDescribedBy = `${ariaDescribedBy || ''} ${errorId}`;
  }

  return (
    <SelectContainer className={className} appearance={appearance}>
      <LabelWrapper hideLabel={hideLabel}>
        <Label htmlFor={id}>{label}</Label>
      </LabelWrapper>
      <SelectWrapper
        appearance={appearance}
        hasIcon={!!icon}
        data-error={error}
        error={error}
        disabled={disabled}
        inProgress={inProgress}
        stackLevel={stackLevel}
      >
        {!inProgress && <Arrow />}
        <Selector
          id={id}
          value={value}
          {...other}
          disabled={disabled || inProgress}
          inProgress={inProgress}
          aria-describedby={ariaDescribedBy}
          aria-invalid={!!error}
          aria-busy={inProgress}
        >
          {options.map((option) => (
            <Option {...option} key={option.value} />
          ))}
        </Selector>
        {icon && <SelectIcon icon={icon} aria-hidden />}
        {error && <SelectError id={errorId}>{error}</SelectError>}
        {inProgress && <SelectSpinner id={spinnerId} aria-label="Loading" inForm />}
      </SelectWrapper>
    </SelectContainer>
  );
};
