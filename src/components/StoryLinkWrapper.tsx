/* eslint-disable import/no-extraneous-dependencies */
// This is allows us to test whether the link works via the actions addon
import React, { ComponentProps, FC } from 'react';
import { action } from '@storybook/addon-actions';

const fireClickAction = action('onLinkClick');

export const StoryLinkWrapper: FC<Props & ComponentProps<'a'>> = ({
  children,
  href,
  onClick,
  to,
  ...rest
}) => {
  const modifiedOnClick: React.DOMAttributes<HTMLAnchorElement>['onClick'] = (event) => {
    event.preventDefault();
    onClick(event);
    fireClickAction(href || to);
  };

  return (
    <a href={href || to} onClick={modifiedOnClick} {...rest}>
      {children}
    </a>
  );
};

interface Props {
  to: string;
}
