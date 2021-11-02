import React from 'react';

import { Service as ServiceWrapper, Text } from './PageFooter.styles';

export const Service = ({ text, href, logo }: Props) => (
  <ServiceWrapper>
    <Text>{text}</Text>
    <a href={href}>{logo}</a>
  </ServiceWrapper>
);

interface Props {
  text: string;
  href: string;
  logo: any;
}
