/* eslint-disable import/no-extraneous-dependencies */
// This is allows us to test whether the link works via the actions addon
import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';

const fireClickAction = action('onLinkClick');

export function StoryLinkWrapper({ children, href, onClick, ...rest }) {
  const modifiedOnClick = event => {
    event.preventDefault();
    onClick();
    fireClickAction(href);
  };

  return (
    <a href={href} {...rest} onClick={modifiedOnClick}>
      {children}
    </a>
  );
}

StoryLinkWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

StoryLinkWrapper.defaultProps = {
  onClick: () => {},
};
