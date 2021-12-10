import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRewind = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="#FD8460" fillRule="evenodd">
      <path d="m20 25.4 22.5 14.3 1 .3c.8 0 1.3-.6 1.3-1.8V9.8c0-1.2-.5-1.8-1.3-1.8a2 2 0 0 0-1 .3L20 22.6c-1.2.8-1.2 2 0 2.8" />
      <path
        d="m2 25.4 22.5 14.3 1 .3c.8 0 1.3-.6 1.3-1.8V9.8c0-1.2-.5-1.8-1.3-1.8a2 2 0 0 0-1 .3L2 22.6c-1.2.8-1.2 2 0 2.8"
        opacity={0.6}
      />
    </g>
  </svg>
);

export default SvgRewind;
