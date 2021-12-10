import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLightning = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        d="M21.3 27.9 6.9 22.7a1 1 0 0 1-.3-1.7L30 1.5a1 1 0 0 1 1.6 1.1l-9 24.7a1 1 0 0 1-1.3.6z"
        fill="#FFD476"
      />
      <path
        d="M26.6 20.1 41 25.3a1 1 0 0 1 .3 1.7L17.9 46.5a1 1 0 0 1-1.6-1.1l9-24.7a1 1 0 0 1 1.3-.6z"
        fill="#FFC445"
      />
    </g>
  </svg>
);

export default SvgLightning;
