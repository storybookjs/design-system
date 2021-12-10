import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRepo = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path
        d="m27.2 9 14-2.7a4 4 0 0 1 4.8 3.9v22.4a4 4 0 0 1-3.2 3.9l-14 2.8a4 4 0 0 1-4.8-4V13a4 4 0 0 1 3.2-4z"
        fill="#B7F0EF"
        opacity={0.7}
      />
      <path
        d="m6.8 6.3 14 2.7a4 4 0 0 1 3.2 4v22.4a4 4 0 0 1-4.8 3.9l-14-2.8a4 4 0 0 1-3.2-4V10.3a4 4 0 0 1 4.8-4z"
        fill="#87E6E5"
      />
      <path
        d="M22 10c1.2.2 2 .6 2.6 1.2a8 8 0 0 1 1.4 3.4v24.6c0 1.7.4 3.8 1.3 6.1L24.6 42 23 45.3c-.7-2.1-1-4-1-5.9V10z"
        fill="#61C1FD"
      />
    </g>
  </svg>
);

export default SvgRepo;
