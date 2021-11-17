import React from 'react';
// @ts-ignore
import humanFormat from 'human-format';
// @ts-ignore
import CustomAddonSVG from '../../../images/colored-icons/custom-addon.svg';
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
  image: string;
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
  image,
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
        src={image && image !== '' ? image : CustomAddonSVG}
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
