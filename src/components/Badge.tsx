import { styled, css } from '@storybook/theming';
import { rgba } from 'polished';
import { background, color, typography } from './shared/styles';

export const Badge = styled.div<{
  status: 'positive' | 'negative' | 'neutral' | 'error' | 'warning' | 'selected';
}>`
  display: inline-block;
  vertical-align: top;
  font-size: ${typography.size.s1}px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 3em;
  font-weight: ${typography.weight.bold};

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${(props) =>
    props.status === 'positive' &&
    css`
      color: ${color.positive};
      background: ${background.positive};
      box-shadow: ${rgba(color.positive, 0.1)} 0 0 0 1px inset;
    `};

  ${(props) =>
    props.status === 'negative' &&
    css`
      color: ${color.negative};
      background: ${background.negative};
      box-shadow: ${rgba(color.negative, 0.1)} 0 0 0 1px inset;
    `};

  ${(props) =>
    props.status === 'warning' &&
    css`
      color: ${color.warning};
      background: ${background.warning};
      box-shadow: ${rgba(color.warning, 0.1)} 0 0 0 1px inset;
    `};

  ${(props) =>
    props.status === 'error' &&
    css`
      color: ${color.lightest};
      background: ${color.red};
    `};

  ${(props) =>
    props.status === 'selected' &&
    css`
      color: ${color.selected};
      background: ${background.calmBlue};
      box-shadow: ${rgba(color.selected, 0.1)} 0 0 0 1px inset;
    `};

  ${(props) =>
    (props.status === 'neutral' || props.status === undefined) &&
    css`
      color: ${color.darker};
      background: ${color.mediumlight};
      box-shadow: ${rgba(color.darker, 0.1)} 0 0 0 1px inset;
    `};
`;
