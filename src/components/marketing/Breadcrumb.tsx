import React, { FunctionComponent } from 'react';
import { styled } from '@storybook/theming';
import { color, breakpoint, typography } from '../shared/styles';
import { Icon } from '../Icon';
import { Link } from '../Link';

const BreadcrumbLink = styled(Link)`
  font-size: ${typography.size.s2}px;
  line-height: ${typography.size.m1}px;
  margin-top: 16px;
  margin-bottom: 16px;

  @media (min-width: ${breakpoint * 1.333}px) {
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

const BreadcrumbInner = styled.div`
  @media (min-width: ${breakpoint * 1.333}px) {
    margin-top: -1rem;
  }
`;

const BreadcrumbIcon = styled(Icon)`
  color: ${color.mediumdark};
`;

export const Breadcrumb: FunctionComponent<Props> = ({
  children,
  linkWrapper,
  ...props
}: Props) => (
  <BreadcrumbInner>
    <BreadcrumbLink tertiary LinkWrapper={linkWrapper} {...props}>
      <BreadcrumbIcon icon="arrowleft" />
      {children}
    </BreadcrumbLink>
  </BreadcrumbInner>
);

interface Props {
  /** The content of the breadcrumb link */
  children: React.ReactNode;
  /** Adds a LinkWrapper like GatsbyLink or NextLink */
  linkWrapper: React.ComponentType<any>;
}
