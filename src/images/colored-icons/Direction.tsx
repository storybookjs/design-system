import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDirection = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        d="M23.5 33.6 2.9 31.4a1 1 0 0 1-.5-1.7L34.3.7a1 1 0 0 1 1.6 1.1L24.5 33a1 1 0 0 1-1 .6z"
        fill="#FFD476"
      />
      <path
        d="M24.3 33.3a1 1 0 0 1-.2-1L35 1.8a1 1 0 0 1 2 .3l3.1 44a1 1 0 0 1-1.6.8L24.3 33.3z"
        fill="#FFC445"
      />
    </g>
  </svg>
);

export default SvgDirection;
