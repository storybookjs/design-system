import React from 'react';

import {
  ResourceTitle,
  ResourceDesc,
  Meta,
  Resource as ResourceWrapper,
} from './PageFooter.styles';

export const Resource = ({ image, title, description, links }: Props) => (
  <div>
    <ResourceWrapper>
      {image}
      <Meta>
        <ResourceTitle>{title}</ResourceTitle>
        <ResourceDesc>{description}</ResourceDesc>
        <div>{links}</div>
      </Meta>
    </ResourceWrapper>
  </div>
);

interface Props {
  image: React.ReactElement;
  title: string;
  description: string;
  links: React.ReactNode | (() => React.ReactNode);
}
