import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShield = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
        d="M24 47.1a4 4 0 0 1-2.5-.9l-15-13A4 4 0 0 1 5 30.1L4 6.3a4 4 0 0 1 3.2-4C15.2.9 21 0 24 0v47.1z"
        fill="#A0DB77"
      />
      <path
        d="M24 47.1V0c2.2 0 14.5 1.9 16.8 2.4A4 4 0 0 1 44 6.3L43 30a4 4 0 0 1-1.5 3.1l-15 13a4 4 0 0 1-2.5 1z"
        fill="#AAD895"
        opacity={0.8}
      />
    </g>
  </svg>
);

export default SvgShield;
