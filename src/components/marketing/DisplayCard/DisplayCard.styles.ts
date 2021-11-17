import { styled, css } from '@storybook/theming';

import { inlineGlow } from '../../shared/animation';
import { breakpoint, color, hoverEffect, spacing, typography } from '../../shared/styles';
import { Cardinal } from '../../Cardinal';
import { AvatarList } from '../../AvatarList';

type CardWrapperProps = {
  orientation: 'vertical' | 'horizontal';
};

export const CardWrapper = styled.div<CardWrapperProps>`
  ${hoverEffect}
  display: flex;
  flex-direction: column;
  padding: ${spacing.padding.medium}px ${spacing.padding.medium}px 0;
  text-decoration: none;
  position: relative;

  @media (min-width: ${breakpoint * 1.5}px) {
    padding: ${spacing.padding.medium}px;

    ${(props) =>
      props.orientation === 'horizontal' &&
      `
        flex-direction: row;
        align-items: center;
      `}
  }
`;

type ImageProps = {
  orientation: 'vertical' | 'horizontal';
  isLoading: boolean;
  src: string;
};

export const Image = styled.div<ImageProps>`
  flex: none;
  width: 48px;
  height: 48px;
  margin-right: ${spacing.padding.medium}px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) =>
    props.isLoading &&
    css`
      ${inlineGlow}
    `}

  @media (min-width: ${breakpoint * 1.5}px) {
    width: 64px;
    height: 64px;

    ${(props) =>
      props.orientation === 'vertical' &&
      `
        margin-bottom: 16px;
      `}
  }
`;

type TitleProps = {
  isLoading: boolean;
};

export const Title = styled.div<TitleProps>`
  font-weight: ${typography.weight.black};
  font-size: ${typography.size.s3}px;
  line-height: ${typography.size.m2}px;
  color: ${color.darker};
  display: flex;
  align-items: center;
  position: relative;

  ${(props) =>
    props.isLoading &&
    css`
      line-height: ${typography.size.m1}px;
      span {
        ${inlineGlow}
        margin-bottom: 8px;
      }
    `}
`;

type DescriptionProps = {
  isLoading: boolean;
};

export const Description = styled.div<DescriptionProps>`
  font-size: ${typography.size.s2}px;
  line-height: ${typography.size.m1}px;
  color: ${color.darkest};
  position: relative;

  ${(props) =>
    props.isLoading &&
    css`
      line-height: ${typography.size.s3}px;
      span {
        ${inlineGlow}
      }
    `}
`;

type InfoProps = {
  orientation: 'vertical' | 'horizontal';
};

export const Info = styled.div<InfoProps>`
  display: flex;
  align-items: flex-start;

  @media (min-width: ${breakpoint * 1.5}px) {
    ${(props) =>
      props.orientation === 'horizontal' &&
      `
        align-items: center;
        margin-right: ${spacing.padding.large}px;
      `}

    ${(props) =>
      props.orientation === 'vertical' &&
      `
        display: block;
        margin-bottom: ${spacing.padding.medium}px;
      `}
  }
`;

export const Spacer = styled.div`
  border-top: 1px solid ${color.border};
  margin-top: ${spacing.padding.large}px;

  @media (min-width: ${breakpoint * 1.5}px) {
    flex: 1 1 auto;
    min-width: 0;
    margin: 0;
    border: 0;
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 16px;
  padding-bottom: 16px;

  @media (min-width: ${breakpoint * 1.5}px) {
    padding: 0;
  }
`;

export const Stats = styled(Cardinal)`
  padding: 0;
  margin-right: ${spacing.padding.large}px;
`;

export const Authors = styled(AvatarList)`
  min-width: 95.5px;
`;
