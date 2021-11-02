import React from 'react';

import { Icon } from '../../Icon';
import { Link } from '../../Link';

import { icons } from '../../shared/icons';

export const CommunityLink = ({ href, icon, name }: Props) => (
  <Link tertiary href={href}>
    <Icon icon={icon} /> {name}
  </Link>
);

interface Props {
  href: string;
  icon: keyof typeof icons;
  name: string;
}
