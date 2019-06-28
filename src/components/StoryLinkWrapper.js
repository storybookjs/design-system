/* eslint-disable import/no-extraneous-dependencies */
// This is allows us to test whether the link works via the actions addon
import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';

const fireClickAction = action('onLinkClick');

export function StoryLinkWrapper({ children, className, href, onClick, to, ...rest }) {
  const modifiedOnClick = event => {
    event.preventDefault();
    onClick();
    fireClickAction(href || to);
  };

  return (
    <a className={className} href={href || to} onClick={modifiedOnClick} {...rest}>
      {children}
    </a>
  );
}

StoryLinkWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

StoryLinkWrapper.defaultProps = {
  className: '',
  href: null,
  onClick: () => {},
  to: null,
};
