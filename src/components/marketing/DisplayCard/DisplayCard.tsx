import React from 'react';
// @ts-ignore
import humanFormat from 'human-format';
import { CustomAddon } from '../../../images/colored-icons';
import { VerifiedBadge } from '../VerifiedBadge';

import {
  CardWrapper,
  Image,
  Title,
  Description,
  Info,
  Spacer,
  Meta,
  Stats,
  Authors,
} from './DisplayCard.styles';

export interface DisplayCardProps {
  orientation: 'vertical' | 'horizontal';
  appearance: 'official' | 'integrators' | 'community';
  /*
   * Note: I don't love accepting a component (rather than an element) here, but
   * we need to style whatever is passed, so it needs to accept the `className`
   * prop.
   */
  image?: string | React.ComponentType;
  name: string;
  displayName: string;
  description: string;
  weeklyDownloads: number;
  authors: {
    id: string;
    name?: string;
    avatarUrl?: string;
  }[];
  isLoading: boolean;
  verifiedCreator: string;
  from: {
    title: string;
    link: string;
  };
  clickIntercept: React.ReactNode;
}

export const DisplayCard = ({
  image: ImageProp = CustomAddon,
  name = '',
  displayName,
  description = '',
  weeklyDownloads = 0,
  authors = [],
  orientation = 'horizontal',
  appearance = 'community',
  isLoading = false,
  verifiedCreator = '',
  from,
  clickIntercept,
  ...props
}: DisplayCardProps) => (
  <CardWrapper orientation={orientation} {...props}>
    {!isLoading && clickIntercept}
    <Info orientation={orientation}>
      <Image
        orientation={orientation}
        isLoading={isLoading}
        // TODO: Might need a different default icon for component catalog as opposed to the addon catalog
        // eslint-disable-next-line no-nested-ternary
        {...(ImageProp && !isLoading
          ? typeof ImageProp === 'string' && ImageProp !== ''
            ? { src: ImageProp }
            : { as: ImageProp }
          : undefined)}
      />
      <div>
        <Title isLoading={isLoading}>
          <span>{isLoading ? 'loading' : displayName || name}</span>
          {['official', 'integrators'].includes(appearance) && (
            <VerifiedBadge appearance={appearance} creator={verifiedCreator} />
          )}
        </Title>
        <Description isLoading={isLoading}>
          <span>{isLoading ? 'loading description of addon' : description}</span>
        </Description>
      </div>
    </Info>
    <Spacer />
    <Meta>
      <Stats
        size="small"
        count={
          isLoading
            ? undefined
            : humanFormat(weeklyDownloads || 0, {
                decimals: 1,
                separator: '',
              })
        }
        text={isLoading ? undefined : 'Downloads'}
        noPlural
        isLoading={isLoading}
      />
      <Authors users={isLoading ? undefined : authors} isLoading={isLoading} />
    </Meta>
  </CardWrapper>
);
