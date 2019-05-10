/* eslint-disable import/no-extraneous-dependencies */
// This is allows us to test whether the link works via the actions addon
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';

const onLinkClick = action('onLinkClick');

export default function StoryLinkWrapper({ href, passHref, children }) {
  const child = Children.only(children);

  return React.cloneElement(child, {
    href: passHref && href,
    onClick: e => {
      e.preventDefault();
      onLinkClick(href);
    },
  });
}

StoryLinkWrapper.propTypes = {
  href: PropTypes.string.isRequired,
  passHref: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

StoryLinkWrapper.defaultProps = {
  passHref: false,
};
