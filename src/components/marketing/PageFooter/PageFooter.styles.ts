import { styled, css } from '@storybook/theming';

import { Link } from '../../Link';
import { Subheading } from '../../Subheading';

import {
  background,
  color,
  typography,
  pageMargins,
  pageMargin,
  spacing,
  breakpoint,
} from '../../shared/styles';

export const Title = styled(Subheading)`
  display: block;
  font-size: ${typography.size.s1}px;
  margin-bottom: 1rem;
  color: ${color.mediumdark};
`;

export const ResourceTitle = styled.div`
  font-weight: ${typography.weight.bold};
  margin-bottom: 0.25rem;
`;

export const ResourceDesc = styled.div`
  margin-bottom: 0.25rem;
`;

export const ResourceAction = styled(Link)`
  margin-right: 15px;
  text-transform: capitalize;
`;

export const Meta = styled.div`
  overflow: hidden;
`;

export const Resource = styled.div`
  display: flex;
  align-items: start;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  > svg {
    flex: 0 0 auto;
    margin-right: 20px;
    display: block;
    width: 40px;
    height: auto;
  }

  @media (min-width: ${breakpoint * 1}px) {
    > svg {
      width: 48px;
    }
  }
`;

export const UpperColumn = styled.div`
  flex: 1;

  padding-left: ${spacing.padding.medium}px;
  padding-right: ${spacing.padding.medium}px;
  padding-top: 3rem;
  padding-bottom: 3rem;

  &:last-child {
    border-top: 1px solid ${color.border};
  }

  @media (min-width: ${breakpoint * 1}px) {
    &:first-child {
      margin-left: ${pageMargin * 1}%;
      padding-right: 60px;
    }
    &:last-child {
      margin-right: ${pageMargin * 1}%;
      padding-left: 60px;
      border-top: none;
      border-left: 1px solid ${color.border};
    }
  }

  @media (min-width: ${breakpoint * 2}px) {
    &:first-child {
      margin-left: ${pageMargin * 2}%;
    }
    &:last-child {
      margin-right: ${pageMargin * 2}%;
    }
  }

  @media (min-width: ${breakpoint * 3}px) {
    &:first-child {
      margin-left: ${pageMargin * 3}%;
    }
    &:last-child {
      margin-right: ${pageMargin * 3}%;
    }
  }

  @media (min-width: ${breakpoint * 4}px) {
    &:first-child {
      margin-left: ${pageMargin * 4}%;
    }
    &:last-child {
      margin-right: ${pageMargin * 4}%;
    }
  }
`;

export const Upper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-bottom: 1px solid ${color.border};

  @media (min-width: ${breakpoint}px) {
    flex-direction: row;
  }
`;

export const Text = styled.div`
  color: ${color.darker};
`;

export const Colophon = styled.div`
  a {
    display: inline-block;
    vertical-align: top;
  }
`;

export const Column = styled.div`
  > a {
    display: block;
    margin-bottom: 0.75rem;
  }
`;

export const Subscribe = styled.div`
  ${Text} {
    margin-bottom: 1rem;
  }
`;

export const HrWrapper = styled.div`
  ${pageMargins};
  hr {
    margin: 0;
  }
`;

export const Service = styled.div<{ muteLogo?: boolean }>`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  svg {
    height: 22px;
    width: auto;
    display: inline-block;
    transition: all 150ms ease-out;
  }

  ${(props) =>
    props.muteLogo &&
    css`
      svg {
        /* Turn down the pure black of these logos */
        opacity: 0.75;
      }
    `}

  ${Text} {
    margin-bottom: 0.5rem;
    color: ${color.mediumdark};
  }
`;

export const Services = styled.div`
  ${pageMargins};
  padding-top: 2rem;
  padding-bottom: 1rem;

  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoint}px) {
    justify-content: space-around;
    text-align: center;
  }

  ${Service} {
    flex: 0 0 50%;
    @media (min-width: ${breakpoint}px) {
      flex: 1;
    }
  }

  a {
    display: inline-block;
    transition: all 150ms ease-out;
    transform: translate3d(0, 0, 0);

    &:hover {
      transform: translate3d(0, -2px, 0);
    }

    &:active {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const Lower = styled.div`
  ${pageMargins};
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${Colophon} {
    width: 100%;
    margin-bottom: 3rem;
    display: block;

    @media (min-width: ${breakpoint * 1}px) {
      margin-bottom: 3rem;
      width: auto;
      max-width: 200px;
    }
  }

  ${Column} {
    width: 50%;
    margin-bottom: 2.25rem;

    @media (min-width: ${breakpoint}px) {
      padding-right: 20px;
      width: auto;
      margin-bottom: 2.25rem;
    }
  }

  ${Subscribe} {
    width: 100%;
    margin-bottom: 3rem;
    @media (min-width: ${breakpoint}px) {
      width: auto;
      margin-bottom: 3rem;
    }
  }
`;

export const FooterWrapper = styled.div`
  background-color: ${background.app};
  border-top: 1px solid ${color.border};
  font-size: ${typography.size.s2}px;
  line-height: 20px;
`;
