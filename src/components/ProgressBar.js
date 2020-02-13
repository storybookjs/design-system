import PropTypes from 'prop-types';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import WithTooltip from './tooltip/WithTooltip';
import { TooltipNote } from './tooltip/TooltipNote';
import { color } from './shared/styles';

export const progressLoading = keyframes`
	0%, 100% { transform: translateX(0%); }
	50% { transform: translateX(300%); }
`;

const ProgressWrapper = styled.div`
  background: ${props => (props.selectable ? color.light : '#D0EFFF')};
  position: relative;
  height: 12px;
  width: 100%;

  ${props =>
    props.short &&
    css`
      height: 5px;
    `};

  ${props =>
    props.isLoading &&
    css`
      background: ${color.light};
      overflow: hidden;

      &:before {
        animation: ${progressLoading} 2s ease-in-out infinite;
        position: absolute;
        left: calc(-33.3% / 2);
        height: 100%;
        width: 33.3%;
        transform: translateX(0);
        background: rgba(0, 0, 0, 0.05);
        z-index: 1;
        content: '';
      }
    `};
`;

const barHover = css`
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
  z-index: 1;
`;

// prettier-ignore
const Bar = styled.div`
  float: left;
  height: 100%;
  transition: all 150ms ease-out;

  ${props => props.selectable && css`
    cursor: pointer;

    &:hover { ${barHover} }
    &:hover + * {
      opacity: .3;
    }
  `}

  ${props => props.active && css` ${barHover} `}

  ${props => props.status === 'testing' && css`
    background-color: ${color.secondary};
  `}
  ${props => props.status === 'positive' && css`
    background-color: ${color.positive};
    background-image: linear-gradient(0deg, #5FC87A 0%, #61D135 100%);
  `}
  ${props => props.status === 'negative' && css`
    background-color: ${color.negative};
    background-image: linear-gradient(0deg, #F6691F 0%, #FF4400 100%);
  `}
  ${props => props.status === 'warning' && css`
    background-color: #FED230};
  `}
`;

const Tooltip = styled(WithTooltip)`
  display: block;
  width: 100%;
`;

/**
 * The `ProgressBar` tells users about progress. Use it in situations where progress is deterministic. For instance, file uploading or completion rate.
 *
 * Do not use it in situatons where loading can be infinite, instead use the loading spinner.
 */
export function ProgressBar({
  isLoading,
  numerator,
  denominator,
  short,
  selectable,
  tooltip,
  onHoverIndex,
  onClickIndex,
  selectedIndexes,
  ...props
}) {
  const progress = (
    <ProgressWrapper isLoading={isLoading} short={short} selectable={selectable} {...props}>
      {numerator &&
        numerator.map(({ bar, numeral, status }, index) => (
          <Bar
            style={{ width: `${(numeral / denominator) * 100}%` }}
            status={status}
            key={bar}
            selectable={selectable}
            active={selectable && selectedIndexes.includes(index)}
            {...(selectable
              ? {
                  onMouseEnter: () => onHoverIndex(index, true),
                  onMouseLeave: () => onHoverIndex(index, false),
                  onClick: () => onClickIndex(index),
                }
              : {})}
          />
        ))}
    </ProgressWrapper>
  );

  if (tooltip) {
    if (isLoading) {
      // Render the tooltip so the Tooltip is not remounted if loading briefly appears on the screen
      // (This can happen if a snapshot is not yet preloaded as you page through data)
      return (
        <Tooltip
          tagName="div"
          placement="top"
          trigger="hover"
          startOpen
          hasChrome={false}
          tooltip={<div />}
        >
          {progress}
        </Tooltip>
      );
    }

    // Place the tooltip at the end of the first bar
    //    (explanation: popper starts in center, we offset from there [50%])
    const offset = `${numerator ? (100 * numerator[0].numeral) / denominator - 50 : 0}%`;

    return (
      <Tooltip
        tagName="div"
        placement="bottom"
        modifiers={{ offset: { offset } }}
        trigger="hover"
        startOpen
        hasChrome={false}
        tooltip={<TooltipNote note={`${numerator[0].numeral} of ${denominator}`} />}
      >
        {progress}
      </Tooltip>
    );
  }
  return progress;
}

ProgressBar.propTypes = {
  /**
   * Show when data has not arrived
   */
  isLoading: PropTypes.bool.isRequired,
  /**
   * The amount of progress as numerator/denominator
   */
  numerator: PropTypes.arrayOf(
    PropTypes.shape({
      bar: PropTypes.string.isRequired,
      numeral: PropTypes.number.isRequired,
      status: PropTypes.oneOf(['testing', 'positive', 'negative', 'warning']).isRequired,
    })
  ).isRequired,
  /**
   * The progress out of how much
   */
  denominator: PropTypes.number.isRequired,
  /**
   * The height of the bar
   */
  short: PropTypes.bool,
  selectable: PropTypes.bool,
  selectedIndexes: PropTypes.arrayOf(PropTypes.number),
  tooltip: PropTypes.bool,
  onHoverIndex: PropTypes.func,
  onClickIndex: PropTypes.func,
};

ProgressBar.defaultProps = {
  isLoading: false,
  numerator: [{ bar: 'Loading', numeral: 0, status: 'testing' }],
  denominator: 100,
  short: false,
  selectable: false,
  selectedIndexes: [],
  tooltip: false,
  onHoverIndex: () => 0,
  onClickIndex: () => 0,
};
