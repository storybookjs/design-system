import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default function SocialGraph({ title, desc, url, image }) {
  return (
    <Helmet title={title}>
      <meta name="description" content={desc} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}

SocialGraph.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
};

SocialGraph.defaultProps = {
  url: null,
  image: null,
};
