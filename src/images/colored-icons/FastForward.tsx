import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRedo = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.0643 25.4285L5.46135 39.6646C5.09994 39.8924 4.7577 40.0001 4.45372 40C3.70836 39.9999 3.19336 39.3523 3.19336 38.2362L3.19336 9.7638C3.19336 8.64765 3.70821 8 4.45372 8C4.7577 8 5.10002 8.10773 5.46135 8.33536L28.0643 22.5715C29.3117 23.3572 29.3117 24.6428 28.0643 25.4285"
      fill="#61C1FD"
    />
    <path
      opacity="0.6"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.0643 25.4285L23.4614 39.6646C23.0999 39.8924 22.7577 40.0001 22.4537 40C21.7084 39.9999 21.1934 39.3523 21.1934 38.2362L21.1934 9.7638C21.1934 8.64765 21.7082 8 22.4537 8C22.7577 8 23.1 8.10773 23.4614 8.33536L46.0643 22.5715C47.3117 23.3572 47.3117 24.6428 46.0643 25.4285"
      fill="#61C1FD"
    />
  </svg>
);

export default SvgRedo;
