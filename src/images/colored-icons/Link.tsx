import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLink = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path
        d="m16 24.9.4-.4a4.7 4.7 0 0 1 6.3-.3l.3.4c3 3 8 3 11 0l5-5.1A7.7 7.7 0 1 0 28 8.6l-3.2 3.3c-2.5-.8-5-1-7.6-.6l1.6-1.9 5-5a13.7 13.7 0 0 1 19.4 19.3l-5 5.1a13.7 13.7 0 0 1-22.1-4z"
        fill="#FC8562"
      />
      <path
        d="m32 22.2-.3.3a4.7 4.7 0 0 1-6.2.4l-.4-.4c-3-3-8-3-11 0l-5 5a7.7 7.7 0 0 0 11 11l3.3-3.3c2.4.7 5 1 7.5.5-.4.7-1 1.4-1.6 2l-5 5A13.7 13.7 0 1 1 4.9 23.3l5-5a13.7 13.7 0 0 1 22.2 3.9z"
        fill="#FFC445"
      />
    </g>
  </svg>
);

export default SvgLink;
