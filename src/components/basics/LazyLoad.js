// Wrapper around react-lazyload that can be short-circuited for testing

import React from 'react';
import PropTypes from 'prop-types';
import ReactLazyLoad from 'react-lazyload';

function LazyLoad({ children, ...props }) {
  if (LazyLoad.disabled) {
    return children;
  }

  return <ReactLazyLoad {...props}>{children}</ReactLazyLoad>;
}

LazyLoad.propTypes = {
  children: PropTypes.node.isRequired,
};

LazyLoad.disabled = false;

export default LazyLoad;
